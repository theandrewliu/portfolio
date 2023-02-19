import Draggable from "react-draggable"
import { Resizable } from "re-resizable"
import { useSelector, useDispatch } from "react-redux"
import { 
    changeCommonCraveActive, 
    changeCommonCraveClosed, 
    changeCommonCraveMax, 
    changeCommonCraveOnTaskbar, 
    changeAllActiveToFalse, 
    setCommonCraveZ, 
    incrementGlobalZ } from "../../Redux/homeSlice";
import closebutton from '../../assets/icons/close-icon.png'
import hidebutton from '../../assets/icons/hide-icon.png'
import maximizebutton from '../../assets/icons/maximize-icon.png'
import minimizebutton from '../../assets/icons/minimize-icon.png'
import foldersmall from '../../assets/icons/folder-small.png'



const CommonCraveWindow = () => {
    const dispatch = useDispatch();
    const isCommonCraveClosed = useSelector((state) => state.home.isCommonCraveClosed)
    const isCommonCraveActive = useSelector((state) => state.home.isCommonCraveActive)
    const isCommonCraveMax = useSelector((state) => state.home.isCommonCraveMax)
    const screenSize = useSelector((state) => state.home.screenSize)
    const zValue = useSelector((state) => state.home.CommonCraveZ)


    function setActiveWindow() {
        dispatch(changeAllActiveToFalse())
        dispatch(changeCommonCraveActive(true))
        dispatch(changeCommonCraveOnTaskbar(true))
        dispatch(setCommonCraveZ())
    }

    function CommonCraveCloseOnClick() {
        dispatch(changeCommonCraveActive(false))
        dispatch(changeCommonCraveClosed(true))
        dispatch(changeCommonCraveOnTaskbar(false))
        dispatch(changeCommonCraveMax(false))
    }

    function CommonCraveMaxOnClick() {
        if (isCommonCraveMax === false){
            dispatch(changeCommonCraveMax(true))
        } else {
            dispatch(changeCommonCraveMax(false))
        }
        incrementGlobalZ()
        setActiveWindow()
    }

    function CommonCraveMinimizeOnClick() {
        dispatch(changeCommonCraveActive(false))
        dispatch(changeCommonCraveClosed(true))
        dispatch(changeCommonCraveOnTaskbar(true))
    }


    return (
        <>
            <div className={isCommonCraveMax ? `w-screen h-screen fixed top-0 right-0 bottom-0 left-0`: "hidden"} style={isCommonCraveMax ? { zIndex: zValue}:{}}>
                <div className={!isCommonCraveClosed ? "border-4 divide-y-4 border-taskbar flex flex-col h-full relative" : "hidden"} onClick={()=>setActiveWindow()}>
                        <div id="handle" className="flex justify-between bg-title-bar text-white">
                            <div className="flex hover:cursor-default pl-1 pt-1 items-center">
                                <img className="pb-1 pr-1" draggable={false} alt="smallfolder" src={foldersmall}/>
                                Common Crave
                            </div>
                            <div id="button-group" className="pr-1 pt-1 space-x-1.5">
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();CommonCraveMinimizeOnClick()}}><img draggable={false} alt="hidebutton" src={hidebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();CommonCraveMaxOnClick()}}><img draggable={false} alt="minmaxbutton" src={isCommonCraveMax ? minimizebutton :maximizebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();CommonCraveCloseOnClick()}}><img draggable={false} alt="closebutton" src={closebutton}/></button>
                            </div>
                        </div>
                        <div className="p-2 h-full bg-white border border-l-shadow border-t-shadow whitespace-normal break-normal overflow-auto">
                            <div className="flex justify-between items-center p-2">
                                <h1 className="text-6xl font-bold">Common Crave</h1>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow w-20 h-8"><a href="https://github.com/yeseniaramirez14/commoncrave" target="_blank" rel="noopener noreferrer">Source</a></button>
                            </div>
                            <div className="flex flex-col">
                                <div className="h-full flex justify-center">
                                    <img alt="gif of common crave use"/>
                                </div>
                                <div className="text-xl space-y-3 pr-4 items-center h-full p-10">
                                    Common Crave is an attempt to help groups decide on what to eat. A group leader will create the group, send an invite to the party where each user selects
                                    what type of food they're craving. If they have a particular restaurant in mind, there's an option to type in a restaurant name and the categories will be
                                    selected. After everyone's decided, a restaurant that is the most craved and equidistant to all members will be selected.
                                    <br></br>
                                    <br></br>
                                    Currently the website is a work in progress but I will update this description when it gets completed.                
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <Draggable handle="#handle"  bounds="parent" defaultPosition={{x: screenSize.width*(1/5), y: screenSize.height*(1/10)}} onStart={()=>{dispatch(incrementGlobalZ());setActiveWindow()}}>
                <Resizable bounds="parent" style={isCommonCraveClosed || isCommonCraveMax ? {zIndex: -100, position: "absolute"} : isCommonCraveActive ? {zIndex:zValue, position: "absolute"} : {zIndex: zValue-1, position: "absolute"}} defaultSize={{ width: screenSize.width*(1/2), height:screenSize.height*(6/10)}} minWidth={screenSize.width*(1/6)} minHeight={screenSize.height*(1/5)} enable={!isCommonCraveClosed ? { top:false, right:true, bottom:true, left:false, topRight:false, bottomRight:true, bottomLeft:false, topLeft:false } : { top:false, right:false, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}>
                    <div className={!isCommonCraveClosed ? isCommonCraveMax ? "hidden" : "border-4 divide-y-4 border-taskbar flex flex-col h-full relative" : "hidden"} onClick={()=>setActiveWindow()}>
                        <div id="handle" className="flex justify-between bg-title-bar text-white">
                            <div className="flex hover:cursor-default pl-1 pt-1 items-center">
                                <img className="pb-1 pr-1" draggable={false} alt="smallfolder" src={foldersmall}/>
                                Common Crave
                            </div>
                            <div id="button-group" className="pr-1 pt-1 space-x-1.5">
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();CommonCraveMinimizeOnClick()}}><img draggable={false} alt="hidebutton" src={hidebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();CommonCraveMaxOnClick()}}><img draggable={false} alt="minmaxbutton" src={isCommonCraveMax ? minimizebutton :maximizebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation();CommonCraveCloseOnClick()}}><img draggable={false} alt="closebutton" src={closebutton}/></button>
                            </div>
                        </div>
                        <div className="p-2 h-full bg-white border border-l-shadow border-t-shadow whitespace-normal break-normal overflow-auto">
                            <div className="flex justify-between items-center p-2">
                                <h1 className="text-6xl font-bold">Common Crave</h1>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow w-20 h-8"><a href="https://github.com/yeseniaramirez14/commoncrave" target="_blank" rel="noopener noreferrer">Source</a></button>
                            </div>
                            <div className="flex flex-col">
                                <div className="h-full flex justify-center">
                                    <img alt="gif of common crave use"/>
                                </div>
                                <div className="text-xl space-y-3 pr-4 items-center h-full p-10">
                                    Common Crave is an attempt to help groups decide on what to eat. A group leader will create the group, send an invite to the party where each user selects
                                    what type of food they're craving. If they have a particular restaurant in mind, there's an option to type in a restaurant name and the categories will be
                                    selected. After everyone's decided, a restaurant that is the most craved and equidistant to all members will be selected.
                                    <br></br>
                                    <br></br>
                                    Currently the website is a work in progress but I will update this description when it gets completed.                
                                </div>
                            </div>
                        </div>
                    </div>
                </Resizable>
            </Draggable>
        </>
    )
}

export default CommonCraveWindow