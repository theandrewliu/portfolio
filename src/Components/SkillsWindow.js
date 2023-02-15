import Draggable from "react-draggable"
import { Resizable } from "re-resizable"
import classNames from 'classnames'
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react";
import { 
    changeSkillsActive, 
    changeSkillsClosed, 
    changeSkillsMax, 
    changeSkillsOnTaskbar, 
    changeAllActiveToFalse, 
    setSkillsZ, 
    incrementGlobalZ 
} from "../Redux/homeSlice";
import closebutton from '../assets/icons/close-icon.png'
import hidebutton from '../assets/icons/hide-icon.png'
import maximizebutton from '../assets/icons/maximize-icon.png'
import minimizebutton from '../assets/icons/minimize-icon.png'
import helpbooksmall from '../assets/icons/help_book_cool-small.png'

import {
    SiPython,
    SiJavascript,
    SiDjango,
    SiFastapi,
    SiMongodb,
    SiSelenium,
    SiReact,
    SiRedux,
    SiPostgresql,
    SiHtml5,
    SiTailwindcss,
    SiOpencv,
    SiBootstrap,
    SiAmazons3,
    SiNodedotjs,
    SiDocker,
    SiGit,
    SiCss3,
} from "react-icons/si"



const SkillsWindow = () => {
    const dispatch = useDispatch();
    const isSkillsClosed = useSelector((state) => state.home.isSkillsClosed)
    const isSkillsActive = useSelector((state) => state.home.isSkillsActive)
    const isSkillsMax = useSelector((state) => state.home.isSkillsMax)
    const zValue = useSelector((state) => state.home.SkillsZ)

    const [divSize, setDivSize] = useState({width: 500, height: 275})
    const [deltaWidthSize, setDeltaWidthSize ] = useState(0)

    function setActiveWindow() {
        dispatch(changeAllActiveToFalse())
        dispatch(changeSkillsActive(true))
        dispatch(changeSkillsOnTaskbar(true))
        dispatch(setSkillsZ())
    }

    function skillsCloseOnClick() {
        dispatch(changeSkillsActive(false))
        dispatch(changeSkillsClosed(true))
        dispatch(changeSkillsOnTaskbar(false))
        dispatch(changeSkillsMax(false))
    }

    function skillsMaxOnClick() {
        if(isSkillsMax === false){
            dispatch(changeSkillsMax(true))
        } else {
            dispatch(changeSkillsMax(false))
        }
        incrementGlobalZ()
        setActiveWindow()
    }

    function skillsMinimizeOnClick() {
        dispatch(changeSkillsActive(false))
        dispatch(changeSkillsClosed(true))
        dispatch(changeSkillsOnTaskbar(true))
    }

    const gridClass = classNames('grid', 'place-items-center', 'pt-10', 'gap-y-10', {
        'grid-cols-2': divSize.width + deltaWidthSize < 640,
        'grid-cols-3': (divSize.width + deltaWidthSize >=640 && divSize.width + deltaWidthSize < 1024),
        'grid-cols-4': (divSize.width + deltaWidthSize >=1024 && divSize.width + deltaWidthSize < 1280),
        'grid-cols-5': divSize.width + deltaWidthSize >=1280 || isSkillsMax
    })

    const gridItemClass = classNames("flex flex-col items-center text-xl space-y-4 font-bold")
    
    return (
        <>
            <div className={isSkillsMax ? `w-screen h-screen fixed top-0 right-0 bottom-0 left-0`: "hidden"} style={isSkillsMax ? { zIndex: zValue}:{}}>
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
                        <div className={gridClass}>
                            <div className={gridItemClass}>
                                <SiPython size={70} />
                                <div>Python</div>
                            </div>
                            <div className={gridItemClass}>
                                <SiJavascript size={70} />
                                <div>JavaScript</div>
                            </div>
                            <div className={gridItemClass}>
                                <SiHtml5 size={70} />
                                <div>HTML</div>
                            </div>
                            <div className={gridItemClass}>
                                <SiCss3 size={70} />
                                <div>CSS</div>
                            </div>
                            <div className={gridItemClass}>
                                <SiBootstrap size={70} />
                                <div>Bootstrap</div>
                            </div>
                            <div className={gridItemClass}>
                                <SiTailwindcss size={70} />
                                <div>TailwindCSS</div>
                            </div>
                            <div className={gridItemClass}>
                                <SiReact size={70} />
                                <div>React</div>
                            </div>
                            <div className={gridItemClass}>
                                <SiRedux size={70} />
                                <div>Redux</div>
                            </div>
                            <div className={gridItemClass}>
                                <SiGit size={70} />
                                <div>Git</div>
                            </div>
                            <div className={gridItemClass}>
                                <SiDjango size={70} />
                                <div>Django</div>
                            </div>
                            <div className={gridItemClass}>
                                <SiFastapi size={70} />
                                <div>FastAPI</div>
                            </div>
                            <div className={gridItemClass}>
                                <SiPostgresql size={70} />
                                <div>PostgreSQL</div>
                            </div>
                            <div className={gridItemClass}>
                                <SiNodedotjs size={70} />
                                <div>Node.js</div>
                            </div>
                            <div className={gridItemClass}>
                                <SiMongodb size={70} />
                                <div>MongoDB</div>
                            </div>
                            <div className={gridItemClass}>
                                <SiDocker size={70} />
                                <div>Docker</div>
                            </div>
                            <div className={gridItemClass}>
                                <SiSelenium size={70} />
                                <div>Selenium</div>
                            </div>
                            <div className={gridItemClass}>
                                <SiOpencv size={70} />
                                <div>OpenCV</div>
                            </div>
                            <div className={gridItemClass}>
                                <SiAmazons3 size={70} />
                                <div>AmazonS3</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Draggable handle="#handle"  bounds="parent" defaultPosition={{x: 700, y: -300}} onStart={()=>{dispatch(incrementGlobalZ());setActiveWindow()}}>
                <Resizable bounds="parent" onResize={(e,dir,ref,delta) => {setDeltaWidthSize(delta.width)}} onResizeStop={()=>{setDivSize({width:divSize.width+deltaWidthSize});setDeltaWidthSize(0)}} style={isSkillsClosed || isSkillsMax ? {zIndex: -100, position: "absolute"} : isSkillsActive ? {zIndex:zValue, position: "absolute"}: {zIndex:zValue-1, position: "absolute"}} defaultSize={{ width: divSize.width, height: divSize.height}} minWidth={300} minHeight={200} enable={!isSkillsClosed ? { top:false, right:true, bottom:true, left:false, topRight:false, bottomRight:true, bottomLeft:false, topLeft:false } : { top:false, right:false, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}>
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
                            <div className={gridClass}>
                                <div className={gridItemClass}>
                                    <SiPython size={70} />
                                    <div>Python</div>
                                </div>
                                <div className={gridItemClass}>
                                    <SiJavascript size={70} />
                                    <div>JavaScript</div>
                                </div>
                                <div className={gridItemClass}>
                                    <SiHtml5 size={70} />
                                    <div>HTML</div>
                                </div>
                                <div className={gridItemClass}>
                                    <SiCss3 size={70} />
                                    <div>CSS</div>
                                </div>
                                <div className={gridItemClass}>
                                    <SiBootstrap size={70} />
                                    <div>Bootstrap</div>
                                </div>
                                <div className={gridItemClass}>
                                    <SiTailwindcss size={70} />
                                    <div>TailwindCSS</div>
                                </div>
                                <div className={gridItemClass}>
                                    <SiReact size={70} />
                                    <div>React</div>
                                </div>
                                <div className={gridItemClass}>
                                    <SiRedux size={70} />
                                    <div>Redux</div>
                                </div>
                                <div className={gridItemClass}>
                                    <SiGit size={70} />
                                    <div>Git</div>
                                </div>
                                <div className={gridItemClass}>
                                    <SiDjango size={70} />
                                    <div>Django</div>
                                </div>
                                <div className={gridItemClass}>
                                    <SiFastapi size={70} />
                                    <div>FastAPI</div>
                                </div>
                                <div className={gridItemClass}>
                                    <SiPostgresql size={70} />
                                    <div>PostgreSQL</div>
                                </div>
                                <div className={gridItemClass}>
                                    <SiNodedotjs size={70} />
                                    <div>Node.js</div>
                                </div>
                                <div className={gridItemClass}>
                                    <SiMongodb size={70} />
                                    <div>MongoDB</div>
                                </div>
                                <div className={gridItemClass}>
                                    <SiDocker size={70} />
                                    <div>Docker</div>
                                </div>
                                <div className={gridItemClass}>
                                    <SiSelenium size={70} />
                                    <div>Selenium</div>
                                </div>
                                <div className={gridItemClass}>
                                    <SiOpencv size={70} />
                                    <div>OpenCV</div>
                                </div>
                                <div className={gridItemClass}>
                                    <SiAmazons3 size={70} />
                                    <div>AmazonS3</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Resizable>
            </Draggable>
        </>
    )
}

export default SkillsWindow