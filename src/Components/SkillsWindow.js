import Draggable from "react-draggable"
import { Resizable } from "re-resizable"
import { useSelector, useDispatch } from "react-redux"
import { changeSkillsActive, changeSkillsClosed, changeSkillsMax, changeSkillsOnTaskbar, changeAllActiveToFalse, incrementGlobalZ } from "../Redux/homeSlice";
import { changeAboutMeActive, changeAboutMeClosed, changeAboutMeOnTaskbar } from "../Redux/homeSlice";
import { changeContactMeActive, changeContactMeClosed, changeContactMeOnTaskbar } from "../Redux/homeSlice";
import { changeOniActive, changeOniClosed, changeOniOnTaskbar } from "../Redux/homeSlice";
import { changeProjectsActive, changeProjectsClosed, changeProjectsOnTaskbar } from "../Redux/homeSlice";
import closebutton from '../assets/icons/close-icon.png'
import hidebutton from '../assets/icons/hide-icon.png'
import maximizebutton from '../assets/icons/maximize-icon.png'
import minimizebutton from '../assets/icons/minimize-icon.png'
import helpbooksmall from '../assets/icons/help_book_cool-small.png'



const SkillsWindow = () => {
    const dispatch = useDispatch();
    const isSkillsClosed = useSelector((state) => state.home.isSkillsClosed)
    const isSkillsActive = useSelector((state) => state.home.isSkillsActive)
    const isSkillsMax = useSelector((state) => state.home.isSkillsMax)
    const isAboutMeClosed = useSelector((state) => state.home.isAboutMeClosed)
    const isContactMeClosed = useSelector((state) =>state.home.isContactMeClosed)
    const isOniClosed = useSelector((state) => state.home.isOniClosed)
    const isProjectsClosed = useSelector((state) => state.home.isProjectsClosed)
    const zValue = useSelector((state) => state.home.globalZ)

    function setActiveWindow() {
        dispatch(changeAllActiveToFalse())
        dispatch(changeSkillsActive(true))
        dispatch(changeSkillsOnTaskbar(true))
    }

    function skillsCloseOnClick() {
        dispatch(changeSkillsActive(false))
        dispatch(changeSkillsClosed(true))
        dispatch(changeSkillsOnTaskbar(false))
        dispatch(changeSkillsMax(false))
    }

    function skillsMaxOnClick() {
        if(isSkillsMax === false){
            if(!isContactMeClosed){
                contactMeMinimizeOnClick()
            }
            if(!isOniClosed){
                oniMinimizeOnClick()
            }
            if(!isProjectsClosed){
                projectMinimizeOnClick()
            }
            if(!isAboutMeClosed){
                aboutMeMinimizeOnClick()
            }
            dispatch(changeSkillsMax(true))
        } else {
            dispatch(changeSkillsMax(false))
        }
    }


    function skillsMinimizeOnClick() {
        dispatch(changeSkillsActive(false))
        dispatch(changeSkillsClosed(true))
        dispatch(changeSkillsOnTaskbar(true))
    }

    // functions to minimize all the other windows
    function aboutMeMinimizeOnClick() {
        dispatch(changeAboutMeActive(false))
        dispatch(changeAboutMeClosed(true))
        dispatch(changeAboutMeOnTaskbar(true))
    }
    
    function contactMeMinimizeOnClick() {
        dispatch(changeContactMeActive(false))
        dispatch(changeContactMeClosed(true))
        dispatch(changeContactMeOnTaskbar(true))
    }
    
    function oniMinimizeOnClick() {
        dispatch(changeOniActive(false))
        dispatch(changeOniClosed(true))
        dispatch(changeOniOnTaskbar(true))
    }

    function projectMinimizeOnClick() {
        dispatch(changeProjectsActive(false))
        dispatch(changeProjectsClosed(true))
        dispatch(changeProjectsOnTaskbar(true))
    }


    return (
        <>
            <div className={isSkillsMax ? `w-screen h-screen fixed top-0 right-0 bottom-0 left-0 z-6`: "hidden"}>
                <div className={!isSkillsClosed ? "border-4 divide-y-4 border-taskbar flex flex-col h-full relative" : "hidden"} onClick={()=>setActiveWindow()}>
                    <div id="handle" className="flex justify-between bg-title-bar text-white">
                        <div className="flex hover:cursor-default pl-1 pt-1 items-center">
                            <img className="pb-1 pr-1" draggable={false} alt="smallhelpbook" src={helpbooksmall}/>
                            Skills
                        </div>
                        <div id="button-group" className="pr-1 pt-1 space-x-1.5">
                            <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();skillsMinimizeOnClick()}}><img draggable={false} alt="hidebutton" src={hidebutton}/></button>
                            <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();skillsMaxOnClick()}}><img draggable={false} alt="maximizebutton" src={isSkillsMax ? minimizebutton :maximizebutton}/></button>
                            <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();skillsCloseOnClick()}}><img draggable={false} alt="closebutton" src={closebutton}/></button>
                        </div>
                    </div>
                    <div className="p-2 h-full bg-white border border-l-shadow border-t-shadow whitespace-normal break-normal overflow-auto">
                        <p>There will be images of tech stack here</p>
                    </div>
                </div>
            </div>
            <Draggable handle="#handle"  bounds="parent" defaultPosition={{x: 700, y: -300}} onStart={()=>{dispatch(incrementGlobalZ());setActiveWindow()}}>
                <Resizable style={isSkillsClosed ? {zIndex: -100, position: "absolute"} : isSkillsActive ? {zIndex:zValue, position: "absolute"}: {zIndex:5, position: "absolute"}} defaultSize={{ width: 500, height:275}} minWidth={300} minHeight={200} enable={!isSkillsClosed ? { top:false, right:true, bottom:true, left:false, topRight:false, bottomRight:true, bottomLeft:false, topLeft:false } : { top:false, right:false, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}>
                    <div className={!isSkillsClosed ? isSkillsMax ? "hidden" : "border-4 divide-y-4 border-taskbar flex flex-col h-full relative" : "hidden"} onClick={()=>setActiveWindow()}>
                        <div id="handle" className="flex justify-between bg-title-bar text-white">
                            <div className="flex hover:cursor-default pl-1 pt-1 items-center">
                                <img className="pb-1 pr-1" draggable={false} alt="smallhelpbook" src={helpbooksmall}/>
                                Skills
                            </div>
                            <div id="button-group" className="pr-1 pt-1 space-x-1.5">
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();skillsMinimizeOnClick()}}><img draggable={false} alt="hidebutton" src={hidebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();skillsMaxOnClick()}}><img draggable={false} alt="maximizebutton" src={isSkillsMax ? minimizebutton :maximizebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();skillsCloseOnClick()}}><img draggable={false} alt="closebutton" src={closebutton}/></button>
                            </div>
                        </div>
                        <div className="p-2 h-full bg-white border border-l-shadow border-t-shadow whitespace-normal break-normal overflow-auto">
                            <p>There will be images of tech stack here</p>
                        </div>
                    </div>
                </Resizable>
            </Draggable>
        </>
    )
}

export default SkillsWindow