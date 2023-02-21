import Draggable from "react-draggable"
import { Resizable } from "re-resizable"
import { useSelector, useDispatch } from "react-redux"
import { 
    changePortfolioActive, 
    changePortfolioClosed, 
    changePortfolioMax, 
    changePortfolioOnTaskbar, 
    changeAllActiveToFalse, 
    setPortfolioZ, 
    incrementGlobalZ } from "../../Redux/homeSlice";
import closebutton from '../../assets/icons/close-icon.png'
import hidebutton from '../../assets/icons/hide-icon.png'
import maximizebutton from '../../assets/icons/maximize-icon.png'
import minimizebutton from '../../assets/icons/minimize-icon.png'
import foldersmall from '../../assets/icons/folder-small.png'
import screenshot from '../../assets/images/Projects/PortfolioScreenShot.png'



const PortfolioWindow = () => {
    const dispatch = useDispatch();
    const isPortfolioClosed = useSelector((state) => state.home.isPortfolioClosed)
    const isPortfolioActive = useSelector((state) => state.home.isPortfolioActive)
    const isPortfolioMax = useSelector((state) => state.home.isPortfolioMax)
    const screenSize = useSelector((state) => state.home.screenSize)
    const zValue = useSelector((state) => state.home.PortfolioZ)


    function setActiveWindow() {
        dispatch(changeAllActiveToFalse())
        dispatch(changePortfolioActive(true))
        dispatch(changePortfolioOnTaskbar(true))
        dispatch(setPortfolioZ())
    }

    function PortfolioCloseOnClick() {
        dispatch(changePortfolioActive(false))
        dispatch(changePortfolioClosed(true))
        dispatch(changePortfolioOnTaskbar(false))
        dispatch(changePortfolioMax(false))
    }

    function PortfolioMaxOnClick() {
        if (isPortfolioMax === false){
            dispatch(changePortfolioMax(true))
        } else {
            dispatch(changePortfolioMax(false))
        }
        incrementGlobalZ()
        setActiveWindow()
    }

    function PortfolioMinimizeOnClick() {
        dispatch(changePortfolioActive(false))
        dispatch(changePortfolioClosed(true))
        dispatch(changePortfolioOnTaskbar(true))
    }


    return (
        <>
            <div className={isPortfolioMax ? `w-screen h-screen fixed top-0 right-0 bottom-0 left-0`: "hidden"} style={isPortfolioMax ? { zIndex: zValue}:{}}>
                <div className={!isPortfolioClosed ? "border-4 divide-y-4 border-taskbar flex flex-col h-full relative" : "hidden"} onClick={()=>setActiveWindow()}>
                        <div id="handle" className="flex justify-between bg-title-bar text-white">
                            <div className="flex hover:cursor-default pl-1 pt-1 items-center">
                                <img className="pb-1 pr-1" draggable={false} alt="smallfolder" src={foldersmall}/>
                                Portfolio
                            </div>
                            <div id="button-group" className="pr-1 pt-1 space-x-1.5">
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();PortfolioMinimizeOnClick()}}><img draggable={false} alt="hidebutton" src={hidebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();PortfolioMaxOnClick()}}><img draggable={false} alt="minmaxbutton" src={isPortfolioMax ? minimizebutton :maximizebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();PortfolioCloseOnClick()}}><img draggable={false} alt="closebutton" src={closebutton}/></button>
                            </div>
                        </div>
                        <div className="p-2 h-full bg-white border border-l-shadow border-t-shadow whitespace-normal break-normal overflow-auto">
                            <div className="flex justify-between items-center p-2">
                                <h1 className="text-6xl font-bold">Portfolio Website</h1>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow w-20 h-8"><a href="https://github.com/theandrewliu/portfolio" target="_blank" rel="noopener noreferrer">Source</a></button>
                            </div>
                            <div className="flex flex-col">
                                <div className="h-full">
                                    <img src={screenshot} alt="screenshot of my website"/>
                                </div>
                                <div className="text-xl space-y-3 pr-4 items-center h-full p-10">
                                You're looking at it! This portfolio website was coded entirely in React with the use of Redux to manage the state of all the windows. I needed
                                    a way to track whether or not a window was closed, maximized, minimized, or was the current active window. I used multiple modules to allow for 
                                    the windows not only be draggable but also be resizable. Inspiration for the theme of this website was from a TikTok from grovy.space, who I have linked 
                                    in the Start menu.                
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <Draggable handle="#handle"  bounds="parent" defaultPosition={{x: screenSize.width*(1/5), y: screenSize.height*(1/10)}} onStart={()=>{dispatch(incrementGlobalZ());setActiveWindow()}}>
                <Resizable bounds="parent" style={isPortfolioClosed || isPortfolioMax ? {zIndex: -100, position: "absolute"} : isPortfolioActive ? {zIndex:zValue, position: "absolute"} : {zIndex: zValue-1, position: "absolute"}} defaultSize={{ width: screenSize.width*(1/2), height:screenSize.height*(65/100)}} minWidth={screenSize.width*(1/6)} minHeight={screenSize.height*(1/5)} enable={!isPortfolioClosed ? { top:false, right:true, bottom:true, left:false, topRight:false, bottomRight:true, bottomLeft:false, topLeft:false } : { top:false, right:false, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}>
                    <div className={!isPortfolioClosed ? isPortfolioMax ? "hidden" : "border-4 divide-y-4 border-taskbar flex flex-col h-full relative" : "hidden"} onClick={()=>setActiveWindow()}>
                        <div id="handle" className="flex justify-between bg-title-bar text-white">
                            <div className="flex hover:cursor-default pl-1 pt-1 items-center">
                                <img className="pb-1 pr-1" draggable={false} alt="smallfolder" src={foldersmall}/>
                                Portfolio
                            </div>
                            <div id="button-group" className="pr-1 pt-1 space-x-1.5">
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();PortfolioMinimizeOnClick()}}><img draggable={false} alt="hidebutton" src={hidebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();PortfolioMaxOnClick()}}><img draggable={false} alt="minmaxbutton" src={isPortfolioMax ? minimizebutton :maximizebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();PortfolioCloseOnClick()}}><img draggable={false} alt="closebutton" src={closebutton}/></button>
                            </div>
                        </div>
                        <div className="p-2 bg-white border border-l-shadow border-t-shadow whitespace-normal break-normal overflow-auto">
                            <div className="flex justify-between items-center p-2">
                                <h1 className="text-6xl font-bold">Portfolio Website</h1>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow w-20 h-8"><a href="https://github.com/theandrewliu/portfolio" target="_blank" rel="noopener noreferrer">Source</a></button>
                            </div>
                            <div className="flex flex-col">
                                <div className="h-full">
                                    <img src={screenshot} alt="screenshot of my website"/>
                                </div>
                                <div className="text-xl space-y-3 pr-4 items-center h-full p-10">
                                    You're looking at it! This portfolio website was coded entirely in React with the use of Redux to manage the state of all the windows. I needed
                                    a way to track whether or not a window was closed, maximized, minimized, or was the current active window. I used multiple modules to allow for 
                                    the windows not only be draggable but also be resizable. Inspiration for the theme of this website was from a TikTok from grovy.space, who I have linked 
                                    in the Start menu.                
                                </div>
                            </div>
                        </div>
                    </div>
                </Resizable>
            </Draggable>
        </>
    )
}

export default PortfolioWindow