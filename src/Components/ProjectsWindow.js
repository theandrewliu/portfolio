import Draggable from "react-draggable"
import { Resizable } from "re-resizable"
import classNames from 'classnames'
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { 
    changeProjectsActive, 
    changeProjectsClosed, 
    changeProjectsMax, 
    changeProjectsOnTaskbar, 
    changeAllActiveToFalse, 
    setProjectsZ, 
    incrementGlobalZ 
} from "../Redux/homeSlice";
import closebutton from '../assets/icons/close-icon.png'
import hidebutton from '../assets/icons/hide-icon.png'
import maximizebutton from '../assets/icons/maximize-icon.png'
import minimizebutton from '../assets/icons/minimize-icon.png'
import briefcasesmall from '../assets/icons/briefcase-small.png'
import CommonCraveIcon from "./Projects/CommonCraveIcon"
import OverRatedIcon from "./Projects/OverRatedIcon"
import PortfolioIcon from "./Projects/PortfolioIcon"


const ProjectsWindow = () => {
    const dispatch = useDispatch();
    const isProjectsClosed = useSelector((state) => state.home.isProjectsClosed)
    const isProjectsActive = useSelector((state) => state.home.isProjectsActive)
    const isProjectsMax = useSelector((state) => state.home.isProjectsMax)
    const screenSize = useSelector((state) => state.home.screenSize)
    const zValue = useSelector((state) => state.home.ProjectsZ)

    const [divSize, setDivSize] = useState({width: screenSize.width*(1/4), height: screenSize.height*(1/4)})
    const [deltaWidthSize, setDeltaWidthSize ] = useState(0)

    function setActiveWindow() {
        dispatch(changeAllActiveToFalse())
        dispatch(changeProjectsActive(true))
        dispatch(changeProjectsOnTaskbar(true))
        dispatch(setProjectsZ())
    }

    function projectsCloseOnClick() {
        dispatch(changeProjectsActive(false))
        dispatch(changeProjectsClosed(true))
        dispatch(changeProjectsOnTaskbar(false))
        dispatch(changeProjectsMax(false))
    }

    function projectsMaxOnClick(){
        if(isProjectsMax === false){
            dispatch(changeProjectsMax(true))
        } else {
            dispatch(changeProjectsMax(false))
        }
        incrementGlobalZ()
        setActiveWindow()
    }

    function projectsMinimizeOnClick() {
        dispatch(changeProjectsActive(false))
        dispatch(changeProjectsClosed(true))
        dispatch(changeProjectsOnTaskbar(true))
    }

    const gridClass = classNames('grid place-items-center pt-10 gap-y-5', {
        'grid-cols-2': divSize.width + deltaWidthSize < 640,
        'grid-cols-3': (divSize.width + deltaWidthSize >=640 && divSize.width + deltaWidthSize < 1024),
        'grid-cols-4': (divSize.width + deltaWidthSize >=1024 && divSize.width + deltaWidthSize < 1280),
        'grid-cols-5': divSize.width + deltaWidthSize >=1280 || isProjectsMax
    })

    const gridItemClass = classNames("flex flex-col items-center text-xl space-y-4 font-bold")

    return (
        <>
            <div className={isProjectsMax ? `w-screen h-screen fixed top-0 right-0 bottom-0 left-0`: "hidden"} style={isProjectsMax ? { zIndex: zValue}:{}}>
                <div className={!isProjectsClosed ? "border-4 divide-y-4 border-taskbar flex flex-col h-full relative" : "hidden"} onClick={()=>setActiveWindow()}>
                    <div id="handle" className="flex justify-between bg-title-bar text-white">
                        <div className="flex hover:cursor-default pl-1 pt-1 items-center">
                            <img className="pb-1 pr-1" draggable={false} alt="smallbriefcase" src={briefcasesmall}/>
                            Projects
                        </div>
                        <div id="button-group" className="pr-1 pt-1 space-x-1.5">
                            <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();projectsMinimizeOnClick()}} onTouchStart={(event)=>{event.stopPropagation();projectsMinimizeOnClick()}}><img draggable={false} alt="hidebutton" src={hidebutton}/></button>
                            <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();projectsMaxOnClick()}} onTouchStart={(event)=>{event.stopPropagation();projectsMaxOnClick()}}><img draggable={false} alt="maximizebutton" src={isProjectsMax ? minimizebutton :maximizebutton}/></button>
                            <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();projectsCloseOnClick()}} onTouchStart={(event)=>{event.stopPropagation();projectsCloseOnClick()}}><img draggable={false} alt="closebutton" src={closebutton}/></button>
                        </div>
                    </div>
                    <div className="p-2 h-full bg-white border border-l-shadow border-t-shadow whitespace-normal break-normal overflow-auto">
                        <div className={gridClass}>
                            <div className={gridItemClass}>
                                <CommonCraveIcon />
                            </div>
                            <div className={gridItemClass}>
                                <OverRatedIcon />
                            </div>
                            <div className={gridItemClass}>
                                <PortfolioIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Draggable handle="#handle"  bounds="parent" defaultPosition={{x: screenSize.width*(2/5), y: screenSize.height*(1/5)}} onStart={()=>{dispatch(incrementGlobalZ());setActiveWindow()}}>
                <Resizable bounds="parent" onResize={(e,dir,ref,delta) => {setDeltaWidthSize(delta.width)}} onResizeStop={()=>{setDivSize({width:divSize.width+deltaWidthSize});setDeltaWidthSize(0)}} style={isProjectsClosed || isProjectsMax ? {zIndex: -100, position: "absolute"} : isProjectsActive ? {zIndex:zValue, position: "absolute"} : {zIndex: zValue-1, position: "absolute"}} defaultSize={{ width: screenSize.width*(1/4), height:screenSize.height*(1/3)}} minWidth={screenSize.width*(1/6)} minHeight={screenSize.height*(1/5)} enable={!isProjectsClosed ? { top:false, right:true, bottom:true, left:false, topRight:false, bottomRight:true, bottomLeft:false, topLeft:false } : { top:false, right:false, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}>
                    <div className={!isProjectsClosed ? isProjectsMax ? "hidden" : "border-4 divide-y-4 border-taskbar flex flex-col h-full relative" : "hidden"} onClick={()=>setActiveWindow()}>
                        <div id="handle" className="flex justify-between bg-title-bar text-white">
                            <div className="flex hover:cursor-default pl-1 pt-1 items-center">
                                <img className="pb-1 pr-1" draggable={false} alt="smallbriefcase" src={briefcasesmall}/>
                                Projects
                            </div>
                            <div id="button-group" className="pr-1 pt-1 space-x-1.5">
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();projectsMinimizeOnClick()}} onTouchStart={(event)=>{event.stopPropagation();projectsMinimizeOnClick()}}><img draggable={false} alt="hidebutton" src={hidebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();projectsMaxOnClick()}} onTouchStart={(event)=>{event.stopPropagation();projectsMaxOnClick()}}><img draggable={false} alt="maximizebutton" src={isProjectsMax ? minimizebutton :maximizebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();projectsCloseOnClick()}} onTouchStart={(event)=>{event.stopPropagation();projectsCloseOnClick()}}><img draggable={false} alt="closebutton" src={closebutton}/></button>
                            </div>
                        </div>
                        <div className="p-2 h-full bg-white border border-l-shadow border-t-shadow whitespace-normal break-normal overflow-auto">
                            <div className={gridClass}>
                                <div className={gridItemClass}>
                                    <CommonCraveIcon />
                                </div>
                                <div className={gridItemClass}>
                                    <OverRatedIcon />
                                </div>
                                <div className={gridItemClass}>
                                    <PortfolioIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </Resizable>
            </Draggable>
        </>
    )
}

export default ProjectsWindow