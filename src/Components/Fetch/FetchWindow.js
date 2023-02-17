import Draggable from "react-draggable"
import { Resizable } from "re-resizable"
import { useSelector, useDispatch } from "react-redux"
import { changeFetchActive, changeFetchClosed, changeFetchOnTaskbar, changeFetchMax, changeAllActiveToFalse, setFetchZ, incrementGlobalZ } from "../../Redux/homeSlice";
import closebutton from '../../assets/icons/close-icon.png'
import hidebutton from '../../assets/icons/hide-icon.png'
import maximizebutton from '../../assets/icons/maximize-icon.png'
import minimizebutton from '../../assets/icons/minimize-icon.png'
import { useState, useEffect } from "react";


const FetchWindow = () => {
    const dispatch = useDispatch();
    const isFetchClosed = useSelector((state) => state.home.isFetchClosed)
    const isFetchActive = useSelector((state) => state.home.isFetchActive)
    const isFetchMax = useSelector((state) => state.home.isFetchMax)
    const screenSize = useSelector((state) => state.home.screenSize)
    const zValue = useSelector((state) => state.home.FetchZ)

    const initialValues = {
        name: "",
        email: "",
        password: "",
        occupation: "",
        state: "",
    }
    const [formSuccess, setFormSuccess] = useState(false)
    const [values, setValues] = useState(initialValues)
    const [occupations, setOccupations] = useState([])
    const [states, setStates] = useState([])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        })
    }

    useEffect(() => {
        async function getData(){
            let res = await fetch(`https://frontend-take-home.fetchrewards.com/form`)
            if (!res.ok) {
                throw new Error("Could not get Occupation and State data in getData()")
            }
            let data = await res.json(res)
            setOccupations(data.occupations)
            setStates(data.states)
        }
        getData()
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

        const url = `https://frontend-take-home.fetchrewards.com/form`
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        if(response.status === 201) {
            setValues(initialValues)
            setFormSuccess(true)
        }
    }

    function setActiveWindow() {
        dispatch(changeAllActiveToFalse())
        dispatch(changeFetchActive(true))
        dispatch(changeFetchOnTaskbar(true))
        dispatch(setFetchZ())
    }

    function FetchCloseOnClick() {
        dispatch(changeFetchActive(false))
        dispatch(changeFetchClosed(true))
        dispatch(changeFetchOnTaskbar(false))
        dispatch(changeFetchMax(false))
        setFormSuccess(false)
        setValues(initialValues)
    }

    function FetchMaxOnClick() {
        if (isFetchMax === false){
            dispatch(changeFetchMax(true))
        } else {
            dispatch(changeFetchMax(false))
        }
        incrementGlobalZ()
        setActiveWindow()
    }

    function FetchMinimizeOnClick() {
        dispatch(changeFetchActive(false))
        dispatch(changeFetchClosed(true))
        dispatch(changeFetchOnTaskbar(true))
    }

    return (
        <>
        <div className={isFetchMax ? `w-screen h-screen fixed top-0 right-0 bottom-0 left-0 z-6`: "hidden"} style={isFetchMax ? {zIndex: zValue}:{}}>
            <div className={!isFetchClosed ? "border-4 divide-y-4 border-taskbar flex flex-col h-full relative" : "hidden"} onClick={()=>setActiveWindow()}>
                <div id="handle" className="flex justify-between bg-title-bar text-white">
                    <div className="flex hover:cursor-default pl-1 pt-1 items-center">
                        Fetch Form
                    </div>
                    <div id="button-group" className="pr-1 pt-1 space-x-1.5">
                        <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();FetchMinimizeOnClick()}}><img draggable={false} alt="hidebutton" src={hidebutton}/></button>
                        <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();FetchMaxOnClick()}}><img draggable={false} alt="maximizebutton" src={isFetchMax ? minimizebutton :maximizebutton}/></button>
                        <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();FetchCloseOnClick()}}><img draggable={false} alt="closebutton" src={closebutton}/></button>
                    </div>
                </div>
                <div className={formSuccess ? "hidden" : "p-2 h-full bg-taskbar border border-l-shadow border-t-shadow whitespace-normal break-normal overflow-auto"}>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-4xl font-bold pt-10 pb-4">User Form</h1>
                        <form className="flex flex-col justify-center items-center w-full max-w-lg space-y-5 pt-10" onSubmit={handleSubmit}>
                            <div className="space-x-2">
                                <label htmlFor="name">Full Name:</label>
                                <input
                                    value={values.name}
                                    onChange={handleInputChange}
                                    required
                                    type="text"
                                    name="name"
                                    label="name"
                                />
                            </div>
                            <div className="space-x-2">
                                <label htmlFor="email">Email:</label>
                                <input
                                    value = {values.email}
                                    onChange={handleInputChange}
                                    required
                                    type="email"
                                    name="email"
                                    label="email"
                                />
                            </div>
                            <div className="space-x-2">
                                <label htmlFor="password">Password:</label>
                                <input
                                    value={values.password}
                                    onChange={handleInputChange}
                                    required
                                    type="password"
                                    name="password"
                                    label="password"
                                />
                            </div>
                            <div>
                                <select
                                    value = {values.occupation}
                                    onChange={handleInputChange}
                                    required
                                    name="occupation"
                                    label="occupation"
                                >
                                <option value="">Select an Occupation</option>
                                {occupations.map(occupation => {
                                    return(
                                        <option key={occupations.indexOf(occupation)} value={occupation}>{occupation}</option>
                                    )
                                })}
                                </select>
                            </div>
                            <div className>
                                <select
                                    value = {values.state}
                                    onChange={handleInputChange}
                                    required
                                    name="state"
                                    label="state"
                                >
                                <option value="">Select a State</option>
                                {states.map(state =>{
                                    return(
                                        <option key={state.abbreviation} value={state.name}>{state.name}</option>
                                    )
                                })}
                                </select>
                            </div>
                            <button className="border rounded-md w-20 h-8 bg-shadow text-white active:bg-title-bar hover:bg-slate-500" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <div className={formSuccess ? "p-2 h-full bg-taskbar border border-l-shadow border-t-shadow whitespace-normal break-normal overflow-auto" : "hidden"}>
                    <div className="flex flex-col items-center justify-center h-3/4 space-y-20">
                        <div>User Form has been successfully submitted!</div>
                        <button className="border rounded-md w-20 h-8 bg-shadow text-white active:bg-title-bar hover:bg-slate-500" onClick={()=>FetchCloseOnClick()}>Close</button>
                    </div>
                </div>
            </div>
        </div>
            <Draggable handle="#handle"  bounds="parent" defaultPosition={{x: screenSize.width*(.35), y: screenSize.height*(.15)}} onStart={()=>{dispatch(incrementGlobalZ());setActiveWindow()}}>
                <Resizable bounds="parent" style={isFetchClosed || isFetchMax ? {zIndex: -100, position: "absolute"} : isFetchActive ? {zIndex:zValue, position: "absolute"} : {zIndex: zValue-1, position: "absolute"}} defaultSize={{ width: screenSize.width*(1/4), height:screenSize.height*(4/7)}} minWidth={screenSize.width*(1/6)} minHeight={screenSize.height*(1/5)} enable={!isFetchClosed ? { top:false, right:true, bottom:true, left:false, topRight:false, bottomRight:true, bottomLeft:false, topLeft:false } : { top:false, right:false, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}>
                    <div className={!isFetchClosed ? isFetchMax ? "hidden" : "border-4 divide-y-4 border-taskbar flex flex-col h-full relative" : "hidden"} onClick={()=>setActiveWindow()}>
                        <div id="handle" className="flex justify-between bg-title-bar text-white">
                            <div className="flex hover:cursor-default pl-1 pt-1 items-center">
                                Fetch Form
                            </div>
                            <div id="button-group" className="pr-1 pt-1 space-x-1.5">
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();FetchMinimizeOnClick()}}><img draggable={false} alt="hidebutton" src={hidebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();FetchMaxOnClick()}}><img draggable={false} alt="maximizebutton" src={isFetchMax ? minimizebutton :maximizebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();FetchCloseOnClick()}}><img draggable={false} alt="closebutton" src={closebutton}/></button>
                            </div>
                        </div>
                        <div className={formSuccess ? "hidden" : "p-2 h-full bg-taskbar border border-l-shadow border-t-shadow whitespace-normal break-normal overflow-auto"}>
                            <div className="flex flex-col justify-center items-center">
                                <h1 className="text-4xl font-bold pt-10 pb-4">User Form</h1>
                                <form className="flex flex-col justify-center items-center w-full max-w-lg space-y-5 pt-10" onSubmit={handleSubmit}>
                                    <div className="space-x-2">
                                        <label htmlFor="name">Full Name:</label>
                                        <input
                                            value={values.name}
                                            onChange={handleInputChange}
                                            required
                                            type="text"
                                            name="name"
                                            label="name"
                                        />
                                    </div>
                                    <div className="space-x-2">
                                        <label htmlFor="email">Email:</label>
                                        <input
                                            value = {values.email}
                                            onChange={handleInputChange}
                                            required
                                            type="email"
                                            name="email"
                                            label="email"
                                        />
                                    </div>
                                    <div className="space-x-2">
                                        <label htmlFor="password">Password:</label>
                                        <input
                                            value={values.password}
                                            onChange={handleInputChange}
                                            required
                                            type="password"
                                            name="password"
                                            label="password"
                                        />
                                    </div>
                                    <div>
                                        <select
                                            value = {values.occupation}
                                            onChange={handleInputChange}
                                            required
                                            name="occupation"
                                            label="occupation"
                                        >
                                        <option value="">Select an Occupation</option>
                                        {occupations.map(occupation => {
                                            return(
                                                <option key={occupations.indexOf(occupation)} value={occupation}>{occupation}</option>
                                            )
                                        })}
                                        </select>
                                    </div>
                                    <div className>
                                        <select
                                            value = {values.state}
                                            onChange={handleInputChange}
                                            required
                                            name="state"
                                            label="state"
                                        >
                                        <option value="">Select a State</option>
                                        {states.map(state =>{
                                            return(
                                                <option key={state.abbreviation} value={state.name}>{state.name}</option>
                                            )
                                        })}
                                        </select>
                                    </div>
                                    <button className="border rounded-md w-20 h-8 bg-shadow text-white active:bg-title-bar hover:bg-slate-500" type="submit">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className={formSuccess ? "p-2 h-full bg-taskbar border border-l-shadow border-t-shadow whitespace-normal break-normal overflow-auto" : "hidden"}>
                            <div className="flex flex-col items-center justify-center h-3/4 space-y-20">
                                <div>User Form has been successfully submitted!</div>
                                <button className="border rounded-md w-20 h-8 bg-shadow text-white active:bg-title-bar hover:bg-slate-500" onClick={()=>FetchCloseOnClick()}>Close</button>
                            </div>
                        </div>
                    </div>
                </Resizable>
            </Draggable>
        </>
    )
}

export default FetchWindow