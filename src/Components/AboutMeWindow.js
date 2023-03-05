import Draggable from "react-draggable"
import { Resizable } from "re-resizable"
import { useSelector, useDispatch } from "react-redux"
import { changeAboutMeActive, changeAboutMeClosed, changeAboutMeMax, changeAboutMeOnTaskbar, changeAllActiveToFalse, setAboutMeZ, incrementGlobalZ } from "../Redux/homeSlice";
import closebutton from '../assets/icons/close-icon.png'
import hidebutton from '../assets/icons/hide-icon.png'
import maximizebutton from '../assets/icons/maximize-icon.png'
import minimizebutton from '../assets/icons/minimize-icon.png'
import msagentsmall from '../assets/icons/msagentsmall.png'
import selfie from '../assets/images/AboutMe.jpg'


const AboutMeWindow = () => {
    const dispatch = useDispatch();
    const isAboutMeClosed = useSelector((state) => state.home.isAboutMeClosed)
    const isAboutMeActive = useSelector((state) => state.home.isAboutMeActive)
    const isAboutMeMax = useSelector((state) => state.home.isAboutMeMax)
    const screenSize = useSelector((state) => state.home.screenSize)
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
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();aboutMeMinimizeOnClick()}} onTouchStart={(event)=>{event.stopPropagation();aboutMeMinimizeOnClick()}}><img draggable={false} alt="hidebutton" src={hidebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();aboutMeMaxOnClick()}} onTouchStart={(event)=>{event.stopPropagation();aboutMeMaxOnClick()}}><img draggable={false} alt="minmaxbutton" src={isAboutMeMax ? minimizebutton :maximizebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();aboutMeCloseOnClick()}} onTouchStart={(event)=>{event.stopPropagation();aboutMeCloseOnClick()}}><img draggable={false} alt="closebutton" src={closebutton}/></button>
                            </div>
                        </div>
                        <div className="p-2 h-full bg-white border border-l-shadow border-t-shadow whitespace-normal break-normal overflow-auto">
                            <div>
                                <h1 className="text-6xl font-bold pl-8 pt-5">About Me</h1>
                            </div>
                            <div className="flex flex-row pt-5 space-x-6">
                                <div className="w-1/3 pl-4">
                                    <img alt="clueless man looking at phone" src={selfie}/>
                                </div>
                                <div className="w-2/3 text-xl space-y-3 pr-4 flex flex-col items-center h-full">
                                    <p className="indent-8">
                                        What's up! I'm Andrew! People like to call me "That super experienced software engineering guy who is also really cool." 
                                    </p>    
                                    <p className="indent-8">
                                        Okay no one does, but I'll get there one day I swear.
                                        I am a graduate of Hack Reactor's 19 week software engineering coding boot camp where I learned full stack web development. Prior to that I was working as a CAD Designer at 
                                        an orthodontic startup! I hold degrees in Chemical and Mechanical Engineering which is fancy talk for I like solving problems. When I'm not 
                                        working, you can catch me playing video games, watching shows, spending time with my dog Oni, or trying to come up with a better About Me page.
                                    </p>
                                    <p className="indent-8">
                                        Feel free to take a look around this website that I spent too many nights burning the midnight oil for. And don't hesitate to reach out to me with employment
                                        opportunities! If my LinkedIn still says "Open To Work," I am still looking for a job. If you want to reach out to just chat, that's okay too. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <Draggable handle="#handle"  bounds="parent" defaultPosition={{x: screenSize.width*.25, y: screenSize.height*.1}} onStart={()=>{dispatch(incrementGlobalZ());setActiveWindow()}}>
                <Resizable bounds="parent" style={isAboutMeClosed || isAboutMeMax ? {zIndex: -100, position: "absolute"} : isAboutMeActive ? {zIndex:zValue, position: "absolute"} : {zIndex: zValue-1, position: "absolute"}} defaultSize={{ width: screenSize.width/2, height:screenSize.height*.66}} minWidth={screenSize.width*(1/6)} minHeight={screenSize.height*.2} enable={!isAboutMeClosed ? { top:false, right:true, bottom:true, left:false, topRight:false, bottomRight:true, bottomLeft:false, topLeft:false } : { top:false, right:false, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}>
                    <div className={!isAboutMeClosed ? isAboutMeMax ? "hidden" : "border-4 divide-y-4 border-taskbar flex flex-col h-full relative" : "hidden"} onClick={()=>setActiveWindow()}>
                        <div id="handle" className="flex justify-between bg-title-bar text-white">
                            <div className="flex hover:cursor-default pl-1 pt-1 items-center">
                                <img className="pb-1 pr-1" draggable={false} alt="smallmsagent" src={msagentsmall}/>
                                About Me
                            </div>
                            <div id="button-group" className="pr-1 pt-1 space-x-1.5">
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();aboutMeMinimizeOnClick()}} onTouchStart={(event)=>{event.stopPropagation();aboutMeMinimizeOnClick()}}><img draggable={false} alt="hidebutton" src={hidebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();aboutMeMaxOnClick()}} onTouchStart={(event)=>{event.stopPropagation();aboutMeMaxOnClick()}}><img draggable={false} alt="minmaxbutton" src={isAboutMeMax ? minimizebutton :maximizebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();aboutMeCloseOnClick()}} onTouchStart={(event)=>{event.stopPropagation();aboutMeCloseOnClick()}}><img draggable={false} alt="closebutton" src={closebutton}/></button>
                            </div>
                        </div>
                        <div className="p-2 h-full bg-white border border-l-shadow border-t-shadow whitespace-normal break-normal overflow-auto">
                            <div>
                                <h1 className="text-6xl font-bold pl-8 pt-5">About Me</h1>
                            </div>
                            <div className="flex flex-row pt-5 space-x-6">
                                <div className="w-1/3 pl-4">
                                    <img alt="clueless man looking at phone" src={selfie}/>
                                </div>
                                <div className="w-2/3 text-xl space-y-3 pr-4 flex flex-col items-center h-full">
                                    <p className="indent-8">
                                        What's up! I'm Andrew! People like to call me "That super experienced software engineering guy who is also really cool." 
                                    </p>    
                                    <p className="indent-8">
                                        Okay no one does, but I'll get there one day I swear.
                                        I am a graduate of Hack Reactor's 19 week software engineering coding boot camp where I learned full stack web development. Prior to that I was working as a CAD Designer at 
                                        an orthodontic startup! I hold degrees in Chemical and Mechanical Engineering which is fancy talk for I like solving problems. When I'm not 
                                        working, you can catch me playing video games, watching shows, spending time with my dog Oni, or trying to come up with a better About Me page.
                                    </p>
                                    <p className="indent-8">
                                        Feel free to take a look around this website that I spent too many nights burning the midnight oil for. And don't hesitate to reach out to me with employment
                                        opportunities! If my LinkedIn still says "Open To Work," I am still looking for a job. If you want to reach out to just chat, that's okay too. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Resizable>
            </Draggable>
        </>
    )
}

export default AboutMeWindow