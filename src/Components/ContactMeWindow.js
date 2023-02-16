import Draggable from "react-draggable"
import { Resizable } from "re-resizable"
import { useSelector, useDispatch } from "react-redux"
import { changeContactMeActive, changeContactMeClosed, changeContactMeOnTaskbar, changeContactMeMax, changeAllActiveToFalse, setContactMeZ, incrementGlobalZ } from "../Redux/homeSlice";
import ContactForm from "./ContactForm";
import closebutton from '../assets/icons/close-icon.png'
import hidebutton from '../assets/icons/hide-icon.png'
import maximizebutton from '../assets/icons/maximize-icon.png'
import minimizebutton from '../assets/icons/minimize-icon.png'
import modemsmall from '../assets/icons/modem-small.png'


const ContactMeWindow = () => {
    const dispatch = useDispatch();
    const isContactMeClosed = useSelector((state) => state.home.isContactMeClosed)
    const isContactMeActive = useSelector((state) => state.home.isContactMeActive)
    const isContactMeMax = useSelector((state) => state.home.isContactMeMax)
    const zValue = useSelector((state) => state.home.ContactMeZ)

    function setActiveWindow() {
        dispatch(changeAllActiveToFalse())
        dispatch(changeContactMeActive(true))
        dispatch(changeContactMeOnTaskbar(true))
        dispatch(setContactMeZ())
    }

    function contactMeCloseOnClick() {
        dispatch(changeContactMeActive(false))
        dispatch(changeContactMeClosed(true))
        dispatch(changeContactMeOnTaskbar(false))
        dispatch(changeContactMeMax(false))
    }

    function contactMeMaxOnClick() {
        if (isContactMeMax === false){
            dispatch(changeContactMeMax(true))
        } else {
            dispatch(changeContactMeMax(false))
        }
        incrementGlobalZ()
        setActiveWindow()
    }

    function contactMeMinimizeOnClick() {
        dispatch(changeContactMeActive(false))
        dispatch(changeContactMeClosed(true))
        dispatch(changeContactMeOnTaskbar(true))
    }

    return (
        <>
        <div className={isContactMeMax ? `w-screen h-screen fixed top-0 right-0 bottom-0 left-0 z-6`: "hidden"} style={isContactMeMax ? { zIndex: zValue}:{}}>
            <div className={!isContactMeClosed ? "border-4 divide-y-4 border-taskbar flex flex-col h-full relative" : "hidden"} onClick={()=>setActiveWindow()}>
                <div id="handle" className="flex justify-between bg-title-bar text-white">
                    <div className="flex hover:cursor-default pl-1 pt-1 items-center">
                        <img className="pb-1 pr-1" draggable={false} alt="smallmodem" src={modemsmall}/>
                        Contact Me
                    </div>
                    <div id="button-group" className="pr-1 pt-1 space-x-1.5">
                        <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();contactMeMinimizeOnClick()}}><img draggable={false} alt="hidebutton" src={hidebutton}/></button>
                        <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();contactMeMaxOnClick()}}><img draggable={false} alt="maximizebutton" src={isContactMeMax ? minimizebutton :maximizebutton}/></button>
                        <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();contactMeCloseOnClick()}}><img draggable={false} alt="closebutton" src={closebutton}/></button>
                    </div>
                </div>
                <div className="p-2 h-full bg-taskbar border border-l-shadow border-t-shadow whitespace-normal break-normal overflow-auto">
                    <ContactForm />
                </div>
            </div>
        </div>
            <Draggable handle="#handle"  bounds="parent" defaultPosition={{x: 600, y: -480}} onStart={()=>{dispatch(incrementGlobalZ());setActiveWindow()}}>
                <Resizable bounds="parent" style={isContactMeClosed || isContactMeMax ? {zIndex: -100, position: "absolute"} : isContactMeActive ? {zIndex:zValue, position: "absolute"} : {zIndex: zValue-1, position: "absolute"}} defaultSize={{ width: 500, height:600}} minWidth={300} minHeight={200} enable={!isContactMeClosed ? { top:false, right:true, bottom:true, left:false, topRight:false, bottomRight:true, bottomLeft:false, topLeft:false } : { top:false, right:false, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}>
                    <div className={!isContactMeClosed ? isContactMeMax ? "hidden" : "border-4 divide-y-4 border-taskbar flex flex-col h-full relative" : "hidden"} onClick={()=>setActiveWindow()}>
                        <div id="handle" className="flex justify-between bg-title-bar text-white">
                            <div className="flex hover:cursor-default pl-1 pt-1 items-center">
                                <img className="pb-1 pr-1" draggable={false} alt="smallmodem" src={modemsmall}/>
                                Contact Me
                            </div>
                            <div id="button-group" className="pr-1 pt-1 space-x-1.5">
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();contactMeMinimizeOnClick()}}><img draggable={false} alt="hidebutton" src={hidebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();contactMeMaxOnClick()}}><img draggable={false} alt="maximizebutton" src={isContactMeMax ? minimizebutton :maximizebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();contactMeCloseOnClick()}}><img draggable={false} alt="closebutton" src={closebutton}/></button>
                            </div>
                        </div>
                        <div className="p-2 h-full bg-taskbar border border-l-shadow border-t-shadow whitespace-normal break-normal overflow-auto">
                            <ContactForm />
                        </div>
                    </div>
                </Resizable>
            </Draggable>
        </>
    )
}

export default ContactMeWindow