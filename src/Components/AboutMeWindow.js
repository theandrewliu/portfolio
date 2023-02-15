import Draggable from "react-draggable"
import { Resizable } from "re-resizable"
import { useSelector, useDispatch } from "react-redux"
import { changeAboutMeActive, changeAboutMeClosed, changeAboutMeMax, changeAboutMeOnTaskbar, changeAllActiveToFalse, setAboutMeZ, incrementGlobalZ } from "../Redux/homeSlice";
import closebutton from '../assets/icons/close-icon.png'
import hidebutton from '../assets/icons/hide-icon.png'
import maximizebutton from '../assets/icons/maximize-icon.png'
import minimizebutton from '../assets/icons/minimize-icon.png'
import msagentsmall from '../assets/icons/msagentsmall.png'


const AboutMeWindow = () => {
    const dispatch = useDispatch();
    const isAboutMeClosed = useSelector((state) => state.home.isAboutMeClosed)
    const isAboutMeActive = useSelector((state) => state.home.isAboutMeActive)
    const isAboutMeMax = useSelector((state) => state.home.isAboutMeMax)
    const zValue = useSelector((state) => state.home.AboutMeZ)


    function setActiveWindow() {
        dispatch(changeAllActiveToFalse())
        dispatch(changeAboutMeActive(true))
        dispatch(changeAboutMeOnTaskbar(true))
        dispatch(setAboutMeZ())
    }

    function aboutMeCloseOnClick() {
        dispatch(changeAboutMeActive(false))
        dispatch(changeAboutMeClosed(true))
        dispatch(changeAboutMeOnTaskbar(false))
        dispatch(changeAboutMeMax(false))
    }

    function aboutMeMaxOnClick() {
        if (isAboutMeMax === false){
            dispatch(changeAboutMeMax(true))
        } else {
            dispatch(changeAboutMeMax(false))
        }
        incrementGlobalZ()
        setActiveWindow()
    }

    function aboutMeMinimizeOnClick() {
        dispatch(changeAboutMeActive(false))
        dispatch(changeAboutMeClosed(true))
        dispatch(changeAboutMeOnTaskbar(true))
    }


    return (
        <>
            <div className={isAboutMeMax ? `w-screen h-screen fixed top-0 right-0 bottom-0 left-0`: "hidden"} style={isAboutMeMax ? { zIndex: zValue}:{}}>
                <div className={!isAboutMeClosed ? "border-4 divide-y-4 border-taskbar flex flex-col h-full relative" : "hidden"} onClick={()=>setActiveWindow()}>
                        <div id="handle" className="flex justify-between bg-title-bar text-white">
                            <div className="flex hover:cursor-default pl-1 pt-1 items-center">
                                <img className="pb-1 pr-1" draggable={false} alt="smallmsagent" src={msagentsmall}/>
                                About Me
                            </div>
                            <div id="button-group" className="pr-1 pt-1 space-x-1.5">
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();aboutMeMinimizeOnClick()}}><img draggable={false} alt="hidebutton" src={hidebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();aboutMeMaxOnClick()}}><img draggable={false} alt="minmaxbutton" src={isAboutMeMax ? minimizebutton :maximizebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();aboutMeCloseOnClick()}}><img draggable={false} alt="closebutton" src={closebutton}/></button>
                            </div>
                        </div>
                        <div className="p-2 h-full bg-white border border-l-shadow border-t-shadow whitespace-normal break-normal overflow-auto">
                            <p>Hello! I'm Andrew and I will fill this out soon!</p>
                        </div>
                    </div>
            </div>
            <Draggable handle="#handle"  bounds="parent" defaultPosition={{x: 600, y: -200}} onStart={()=>{dispatch(incrementGlobalZ());setActiveWindow()}}>
                <Resizable bounds="parent" style={isAboutMeClosed || isAboutMeMax ? {zIndex: -100, position: "absolute"} : isAboutMeActive ? {zIndex:zValue, position: "absolute"} : {zIndex: zValue-1, position: "absolute"}} defaultSize={{ width: 500, height:275}} minWidth={300} minHeight={200} enable={!isAboutMeClosed ? { top:false, right:true, bottom:true, left:false, topRight:false, bottomRight:true, bottomLeft:false, topLeft:false } : { top:false, right:false, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}>
                    <div className={!isAboutMeClosed ? isAboutMeMax ? "hidden" : "border-4 divide-y-4 border-taskbar flex flex-col h-full relative" : "hidden"} onClick={()=>setActiveWindow()}>
                        <div id="handle" className="flex justify-between bg-title-bar text-white">
                            <div className="flex hover:cursor-default pl-1 pt-1 items-center">
                                <img className="pb-1 pr-1" draggable={false} alt="smallmsagent" src={msagentsmall}/>
                                About Me
                            </div>
                            <div id="button-group" className="pr-1 pt-1 space-x-1.5">
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();aboutMeMinimizeOnClick()}}><img draggable={false} alt="hidebutton" src={hidebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();aboutMeMaxOnClick()}}><img draggable={false} alt="minmaxbutton" src={isAboutMeMax ? minimizebutton :maximizebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();aboutMeCloseOnClick()}}><img draggable={false} alt="closebutton" src={closebutton}/></button>
                            </div>
                        </div>
                        <div className="p-2 h-full bg-white border border-l-shadow border-t-shadow whitespace-normal break-normal overflow-auto">
                            <p>Hello! I'm Andrew and I will fill this out soon!</p>
                        </div>
                    </div>
                </Resizable>
            </Draggable>
        </>
    )
}

export default AboutMeWindow