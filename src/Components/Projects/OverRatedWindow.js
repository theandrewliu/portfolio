import Draggable from "react-draggable"
import { Resizable } from "re-resizable"
import { useSelector, useDispatch } from "react-redux"
import { 
    changeOverRatedActive, 
    changeOverRatedClosed, 
    changeOverRatedMax, 
    changeOverRatedOnTaskbar, 
    changeAllActiveToFalse, 
    setOverRatedZ, 
    incrementGlobalZ } from "../../Redux/homeSlice";
import closebutton from '../../assets/icons/close-icon.png'
import hidebutton from '../../assets/icons/hide-icon.png'
import maximizebutton from '../../assets/icons/maximize-icon.png'
import minimizebutton from '../../assets/icons/minimize-icon.png'
import foldersmall from '../../assets/icons/folder-small.png'
import OverRatedScreenshot from '../../assets/images/Projects/home.gif'



const OverRatedWindow = () => {
    const dispatch = useDispatch();
    const isOverRatedClosed = useSelector((state) => state.home.isOverRatedClosed)
    const isOverRatedActive = useSelector((state) => state.home.isOverRatedActive)
    const isOverRatedMax = useSelector((state) => state.home.isOverRatedMax)
    const screenSize = useSelector((state) => state.home.screenSize)
    const zValue = useSelector((state) => state.home.OverRatedZ)


    function setActiveWindow() {
        dispatch(changeAllActiveToFalse())
        dispatch(changeOverRatedActive(true))
        dispatch(changeOverRatedOnTaskbar(true))
        dispatch(setOverRatedZ())
    }

    function OverRatedCloseOnClick() {
        dispatch(changeOverRatedActive(false))
        dispatch(changeOverRatedClosed(true))
        dispatch(changeOverRatedOnTaskbar(false))
        dispatch(changeOverRatedMax(false))
    }

    function OverRatedMaxOnClick() {
        if (isOverRatedMax === false){
            dispatch(changeOverRatedMax(true))
        } else {
            dispatch(changeOverRatedMax(false))
        }
        incrementGlobalZ()
        setActiveWindow()
    }

    function OverRatedMinimizeOnClick() {
        dispatch(changeOverRatedActive(false))
        dispatch(changeOverRatedClosed(true))
        dispatch(changeOverRatedOnTaskbar(true))
    }


    return (
        <>
            <div className={isOverRatedMax ? `w-screen h-screen fixed top-0 right-0 bottom-0 left-0`: "hidden"} style={isOverRatedMax ? { zIndex: zValue}:{}}>
                <div className={!isOverRatedClosed ? "border-4 divide-y-4 border-taskbar flex flex-col h-full relative" : "hidden"} onClick={()=>setActiveWindow()}>
                        <div id="handle" className="flex justify-between bg-title-bar text-white">
                            <div className="flex hover:cursor-default pl-1 pt-1 items-center">
                                <img className="pb-1 pr-1" draggable={false} alt="smallfolder" src={foldersmall}/>
                                OverRated
                            </div>
                            <div id="button-group" className="pr-1 pt-1 space-x-1.5">
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();OverRatedMinimizeOnClick()}}><img draggable={false} alt="hidebutton" src={hidebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();OverRatedMaxOnClick()}}><img draggable={false} alt="minmaxbutton" src={isOverRatedMax ? minimizebutton :maximizebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();OverRatedCloseOnClick()}}><img draggable={false} alt="closebutton" src={closebutton}/></button>
                            </div>
                        </div>
                        <div className="p-2 h-full bg-white border border-l-shadow border-t-shadow whitespace-normal break-normal overflow-auto">
                            <div className="flex justify-between items-center p-2">
                                <h1 className="text-6xl font-bold">OverRated</h1>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow w-20 h-8"><a href="https://github.com/theandrewliu/OverRated" target="_blank" rel="noopener noreferrer">Source</a></button>
                            </div>
                            <div className="flex flex-col">
                                <div className="h-full flex justify-center">
                                    <img src={OverRatedScreenshot} alt="gif of landing page of overrated"/>
                                </div>
                                <div className="text-xl space-y-3 pr-4 items-center h-full p-10">
                                During our time in the Hack Reactor program, my three colleagues and I created a final project called "OverRated." 
                                The concept behind this website was to combine the features of OkCupid with Yelp's rating system. The result was a 
                                platform where users could sign up and create an account, upload profile pictures (hosted on Amazon S3), find and connect 
                                with other users, send messages, and view and rate matches. While my main focus was on the backend development, where we 
                                utilized FastAPI to create our API endpoints, the entire project was built from scratch in just one month. We deployed the 
                                site using Gitlab Pages and hosted the database on Heroku's free plan. However, in November 2022, Heroku discontinued their 
                                free plan, which caused the site to malfunction. Perhaps there will be an opportunity to revisit and improve the project in 
                                the future.                
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <Draggable handle="#handle"  bounds="parent" defaultPosition={{x: screenSize.width*(1/5), y: screenSize.height*(2/11)}} onStart={()=>{dispatch(incrementGlobalZ());setActiveWindow()}}>
                <Resizable bounds="parent" style={isOverRatedClosed || isOverRatedMax ? {zIndex: -100, position: "absolute"} : isOverRatedActive ? {zIndex:zValue, position: "absolute"} : {zIndex: zValue-1, position: "absolute"}} defaultSize={{ width: screenSize.width*(1/2), height:screenSize.height*(6/10)}} minHeight={screenSize.height*(1/5)} enable={!isOverRatedClosed ? { top:false, right:true, bottom:true, left:false, topRight:false, bottomRight:true, bottomLeft:false, topLeft:false } : { top:false, right:false, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}>
                    <div className={!isOverRatedClosed ? isOverRatedMax ? "hidden" : "border-4 divide-y-4 border-taskbar flex flex-col h-full relative" : "hidden"} onClick={()=>setActiveWindow()}>
                        <div id="handle" className="flex justify-between bg-title-bar text-white">
                            <div className="flex hover:cursor-default pl-1 pt-1 items-center">
                                <img className="pb-1 pr-1" draggable={false} alt="smallfolder" src={foldersmall}/>
                                OverRated
                            </div>
                            <div id="button-group" className="pr-1 pt-1 space-x-1.5">
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();OverRatedMinimizeOnClick()}}><img draggable={false} alt="hidebutton" src={hidebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();OverRatedMaxOnClick()}}><img draggable={false} alt="minmaxbutton" src={isOverRatedMax ? minimizebutton :maximizebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();OverRatedCloseOnClick()}}><img draggable={false} alt="closebutton" src={closebutton}/></button>
                            </div>
                        </div>
                        <div className="p-2 h-full bg-white border border-l-shadow border-t-shadow whitespace-normal break-normal overflow-auto">
                            <div className="flex justify-between items-center p-2">
                                <h1 className="text-6xl font-bold">OverRated</h1>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow w-20 h-8"><a href="https://github.com/theandrewliu/OverRated" target="_blank" rel="noopener noreferrer">Source</a></button>
                            </div>
                            <div className="flex flex-col">
                                <div className="h-full flex justify-center">
                                    <img src={OverRatedScreenshot} alt="gif of landing page of overrated"/>
                                </div>
                                <div className="text-xl space-y-3 pr-4 items-center h-full p-10">
                                During our time in the Hack Reactor program, my three colleagues and I created a final project called "OverRated." 
                                The concept behind this website was to combine the features of OkCupid with Yelp's rating system. The result was a 
                                platform where users could sign up and create an account, upload profile pictures (hosted on Amazon S3), find and connect 
                                with other users, send messages, and view and rate matches. While my main focus was on the backend development, where we 
                                utilized FastAPI to create our API endpoints, the entire project was built from scratch in just one month. We deployed the 
                                site using Gitlab Pages and hosted the database on Heroku's free plan. However, in November 2022, Heroku discontinued their 
                                free plan, which caused the site to malfunction. Perhaps there will be an opportunity to revisit and improve the project in 
                                the future.                
                                </div>
                            </div>
                        </div>
                    </div>
                </Resizable>
            </Draggable>
        </>
    )
}

export default OverRatedWindow