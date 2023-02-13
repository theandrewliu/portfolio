import Draggable from "react-draggable"
import { Resizable } from "re-resizable"
import { useSelector, useDispatch } from "react-redux"
import { changeOniActive, changeOniClosed, changeOniOnTaskbar, changeOniMax, changeAllActiveToFalse, incrementGlobalZ } from "../Redux/homeSlice";
import { changeSkillsActive, changeSkillsClosed, changeSkillsOnTaskbar} from "../Redux/homeSlice";
import { changeContactMeActive, changeContactMeClosed, changeContactMeOnTaskbar } from "../Redux/homeSlice";
import { changeProjectsActive, changeProjectsClosed, changeProjectsOnTaskbar } from "../Redux/homeSlice";
import { changeAboutMeActive, changeAboutMeClosed, changeAboutMeOnTaskbar } from "../Redux/homeSlice";
import closebutton from '../assets/icons/close-icon.png'
import hidebutton from '../assets/icons/hide-icon.png'
import maximizebutton from '../assets/icons/maximize-icon.png'
import minimizebutton from '../assets/icons/minimize-icon.png'
import camerasmall from '../assets/icons/camera-small.png'


const OniWindow = () => {
    const dispatch = useDispatch();
    const isOniClosed = useSelector((state) => state.home.isOniClosed)
    const isOniActive = useSelector((state) => state.home.isOniActive)
    const isOniMax = useSelector((state) => state.home.isOniMax)
    const isAboutMeClosed = useSelector((state) => state.home.isAboutMeClosed)
    const isContactMeClosed = useSelector((state) =>state.home.isContactMeClosed)
    const isProjectsClosed = useSelector((state) => state.home.isProjectsClosed)
    const isSkillsClosed = useSelector((state) => state.home.isSkillsClosed)
    const zValue = useSelector((state) => state.home.globalZ)

    function setActiveWindow() {
        dispatch(changeAllActiveToFalse())
        dispatch(changeOniActive(true))
        dispatch(changeOniOnTaskbar(true))
    }
    function oniCloseOnClick() {
        dispatch(changeOniActive(false))
        dispatch(changeOniClosed(true))
        dispatch(changeOniOnTaskbar(false))
        dispatch(changeOniMax(false))
    }

    function oniMaxOnClick() {
        if (isOniMax === false){
            if(!isContactMeClosed){
                contactMeMinimizeOnClick()
            }
            if(!isAboutMeClosed){
                aboutMeMinimizeOnClick()
            }
            if(!isProjectsClosed){
                projectMinimizeOnClick()
            }
            if(!isSkillsClosed){
                skillsMinimizeOnClick()
            }
            dispatch(changeOniMax(true))
        } else {
            dispatch(changeOniMax(false))
        }
    }

    function oniMinimizeOnClick() {
        dispatch(changeOniActive(false))
        dispatch(changeOniClosed(true))
        dispatch(changeOniOnTaskbar(true))
    }

    // functions to minimize all the other windows
    function aboutMeMinimizeOnClick() {
        dispatch(changeAboutMeActive(false))
        dispatch(changeAboutMeClosed(true))
        dispatch(changeAboutMeOnTaskbar(true))
    }

    function skillsMinimizeOnClick() {
        dispatch(changeSkillsActive(false))
        dispatch(changeSkillsClosed(true))
        dispatch(changeSkillsOnTaskbar(true))
    }

    function contactMeMinimizeOnClick() {
        dispatch(changeContactMeActive(false))
        dispatch(changeContactMeClosed(true))
        dispatch(changeContactMeOnTaskbar(true))
    }

    function projectMinimizeOnClick() {
        dispatch(changeProjectsActive(false))
        dispatch(changeProjectsClosed(true))
        dispatch(changeProjectsOnTaskbar(true))
    }


    return (
        <>
            <div className={isOniMax ? `w-screen h-screen fixed top-0 right-0 bottom-0 left-0 z-6`: "hidden"}>
                <div className={!isOniClosed ? "border-4 divide-y-4 border-taskbar flex flex-col h-full relative" : "hidden"} onClick={()=>setActiveWindow()}>
                    <div id="handle" className="flex justify-between bg-title-bar text-white">
                        <div className="flex hover:cursor-default pl-1 pt-1 items-center">
                            <img className="pb-1 pr-1" draggable={false} alt="smallcamera" src={camerasmall}/>
                            Oni
                        </div>
                        <div id="button-group" className="pr-1 pt-1 space-x-1.5">
                            <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation(); oniMinimizeOnClick()}}><img draggable={false} alt="hidebutton" src={hidebutton}/></button>
                            <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation(); oniMaxOnClick()}}><img draggable={false} alt="maximizebutton" src={isOniMax ? minimizebutton :maximizebutton}/></button>
                            <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation(); oniCloseOnClick()}}><img draggable={false} alt="closebutton" src={closebutton}/></button>
                        </div>
                    </div>
                    <div className="p-2 h-full bg-white border border-l-shadow border-t-shadow whitespace-normal break-normal overflow-auto">
                        <p>Pictures of Oni will go here asdfasdfasdfasdfasdfasdfasdf</p>
                    </div>
                </div>
            </div>
            <Draggable handle="#handle"  bounds="parent" defaultPosition={{x: 400, y: -100}} onStart={()=>{dispatch(incrementGlobalZ());setActiveWindow()}}>
                <Resizable style={isOniClosed ? {zIndex: -100,position: "absolute"} : isOniActive ? {zIndex:zValue, position: "absolute"} : {zIndex: 5, position: "absolute"}} defaultSize={{ width: 500, height:275}} minWidth={300} minHeight={200} enable={!isOniClosed ? { top:false, right:true, bottom:true, left:false, topRight:false, bottomRight:true, bottomLeft:false, topLeft:false } : { top:false, right:false, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}>
                    <div className={!isOniClosed ? isOniMax ? "hidden" : "border-4 divide-y-4 border-taskbar flex flex-col h-full relative" : "hidden"} onClick={()=>setActiveWindow()}>
                        <div id="handle" className="flex justify-between bg-title-bar text-white">
                            <div className="flex hover:cursor-default pl-1 pt-1 items-center">
                                <img className="pb-1 pr-1" draggable={false} alt="smallcamera" src={camerasmall}/>
                                Oni
                            </div>
                            <div id="button-group" className="pr-1 pt-1 space-x-1.5">
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation(); oniMinimizeOnClick()}}><img draggable={false} alt="hidebutton" src={hidebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation(); oniMaxOnClick()}}><img draggable={false} alt="maximizebutton" src={isOniMax ? minimizebutton :maximizebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation(); oniCloseOnClick()}}><img draggable={false} alt="closebutton" src={closebutton}/></button>
                            </div>
                        </div>
                        <div className="p-2 h-full bg-white border border-l-shadow border-t-shadow whitespace-normal break-normal overflow-auto">
                            <p>Pictures of Oni will go here asdfasdfasdfasdfasdfasdfasdf</p>
                        </div>
                    </div>
                </Resizable>
            </Draggable>
        </>
    )
}

export default OniWindow