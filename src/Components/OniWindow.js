import Draggable from "react-draggable"
import { Resizable } from "re-resizable"
import { useSelector, useDispatch } from "react-redux"
import { changeOniActive, changeOniClosed, changeOniOnTaskbar, changeOniMax, changeAllActiveToFalse, setOniZ, incrementGlobalZ } from "../Redux/homeSlice";
import closebutton from '../assets/icons/close-icon.png'
import hidebutton from '../assets/icons/hide-icon.png'
import maximizebutton from '../assets/icons/maximize-icon.png'
import minimizebutton from '../assets/icons/minimize-icon.png'
import camerasmall from '../assets/icons/camera-small.png'
import Oni1 from '../assets/images/Oni/Oni1.jpg'
import Oni2 from '../assets/images/Oni/Oni2.jpg'
import Oni3 from '../assets/images/Oni/Oni3.jpg'
import Oni4 from '../assets/images/Oni/Oni4.jpg'


const OniWindow = () => {
    const dispatch = useDispatch();
    const isOniClosed = useSelector((state) => state.home.isOniClosed)
    const isOniActive = useSelector((state) => state.home.isOniActive)
    const isOniMax = useSelector((state) => state.home.isOniMax)
    const screenSize = useSelector((state) => state.home.screenSize)
    const zValue = useSelector((state) => state.home.OniZ)

    function setActiveWindow() {
        dispatch(changeAllActiveToFalse())
        dispatch(changeOniActive(true))
        dispatch(changeOniOnTaskbar(true))
        dispatch(setOniZ())
    }
    function oniCloseOnClick() {
        dispatch(changeOniActive(false))
        dispatch(changeOniClosed(true))
        dispatch(changeOniOnTaskbar(false))
        dispatch(changeOniMax(false))
    }

    function oniMaxOnClick() {
        if (isOniMax === false){
            dispatch(changeOniMax(true))
        } else {
            dispatch(changeOniMax(false))
        }
        incrementGlobalZ()
        setActiveWindow()
    }

    function oniMinimizeOnClick() {
        dispatch(changeOniActive(false))
        dispatch(changeOniClosed(true))
        dispatch(changeOniOnTaskbar(true))
    }

    return (
        <>
            <div className={isOniMax ? `w-screen h-screen fixed top-0 right-0 bottom-0 left-0 z-6`: "hidden"} style={isOniMax ? { zIndex: zValue}:{}}>
                <div className={!isOniClosed ? "border-4 divide-y-4 border-taskbar flex flex-col h-full relative" : "hidden"} onClick={()=>setActiveWindow()}>
                    <div id="handle" className="flex justify-between bg-title-bar text-white">
                        <div className="flex hover:cursor-default pl-1 pt-1 items-center">
                            <img className="pb-1 pr-1" draggable={false} alt="smallcamera" src={camerasmall}/>
                            Oni
                        </div>
                        <div id="button-group" className="pr-1 pt-1 space-x-1.5">
                            <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation(); oniMinimizeOnClick()}} onTouchStart={(event)=>{event.stopPropagation();oniMinimizeOnClick()}}><img draggable={false} alt="hidebutton" src={hidebutton}/></button>
                            <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation(); oniMaxOnClick()}} onTouchStart={(event)=>{event.stopPropagation();oniMaxOnClick()}}><img draggable={false} alt="maximizebutton" src={isOniMax ? minimizebutton :maximizebutton}/></button>
                            <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation(); oniCloseOnClick()}} onTouchStart={(event)=>{event.stopPropagation();oniCloseOnClick()}}><img draggable={false} alt="closebutton" src={closebutton}/></button>
                        </div>
                    </div>
                    <div className="p-2 h-full bg-white border border-l-shadow border-t-shadow whitespace-normal break-normal overflow-auto">
                        <div className="flex justify-center items-center">
                            <h1 className="text-6xl font-bold pt-5">The best dog in my world: Oni</h1>
                        </div>
                        <div className="grid grid-cols-2 place-items-center pt-10 gap-y-10 space-x-5 space-y-4">
                            <div>
                                <img src={Oni1} alt="a good dog posing for the camera" />
                            </div>
                            <div>
                                <img src={Oni2} alt="a good dog searching where that noise came from"/>
                            </div>
                            <div>
                                <img src={Oni3} alt="a good boy playing with his toy" />
                            </div>
                            <div>
                                <img src={Oni4} alt="a good boy examining his harvest" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Draggable handle="#handle"  bounds="parent" defaultPosition={{x: screenSize.width*(1/5), y: screenSize.height*(1/5)}} onStart={()=>{dispatch(incrementGlobalZ());setActiveWindow()}}>
                <Resizable bounds="parent" style={isOniClosed || isOniMax ? {zIndex: -100,position: "absolute"} : isOniActive ? {zIndex:zValue, position: "absolute"} : {zIndex: zValue-1, position: "absolute"}} defaultSize={{ width: screenSize.width*.5, height:screenSize.height*.6}} minWidth={screenSize.width*(1/6)} minHeight={screenSize.height*(1/5)} enable={!isOniClosed ? { top:false, right:true, bottom:true, left:false, topRight:false, bottomRight:true, bottomLeft:false, topLeft:false } : { top:false, right:false, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}>
                    <div className={!isOniClosed ? isOniMax ? "hidden" : "border-4 divide-y-4 border-taskbar flex flex-col h-full relative" : "hidden"} onClick={()=>setActiveWindow()}>
                        <div id="handle" className="flex justify-between bg-title-bar text-white">
                            <div className="flex hover:cursor-default pl-1 pt-1 items-center">
                                <img className="pb-1 pr-1" draggable={false} alt="smallcamera" src={camerasmall}/>
                                Oni
                            </div>
                            <div id="button-group" className="pr-1 pt-1 space-x-1.5">
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation(); oniMinimizeOnClick()}} onTouchStart={(event)=>{event.stopPropagation();oniMinimizeOnClick()}}><img draggable={false} alt="hidebutton" src={hidebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation(); oniMaxOnClick()}} onTouchStart={(event)=>{event.stopPropagation();oniMaxOnClick()}}><img draggable={false} alt="maximizebutton" src={isOniMax ? minimizebutton :maximizebutton}/></button>
                                <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={(event)=>{event.stopPropagation(); oniCloseOnClick()}} onTouchStart={(event)=>{event.stopPropagation();oniCloseOnClick()}}><img draggable={false} alt="closebutton" src={closebutton}/></button>
                            </div>
                        </div>
                        <div className="p-2 h-full bg-white border border-l-shadow border-t-shadow whitespace-normal break-normal overflow-auto">
                            <div className="flex justify-center items-center">
                                <h1 className="text-6xl font-bold pt-5">The best dog in my world: Oni</h1>
                            </div>
                            <div className="grid grid-cols-2 place-items-center pt-10 gap-y-10 space-x-5 space-y-4">
                                <div>
                                    <img src={Oni1} alt="a good dog posing for the camera" />
                                </div>
                                <div>
                                    <img src={Oni2} alt="a good dog searching where that noise came from"/>
                                </div>
                                <div>
                                    <img src={Oni3} alt="a good boy playing with his toy" />
                                </div>
                                <div>
                                    <img src={Oni4} alt="a good boy examining his harvest" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Resizable>
            </Draggable>
        </>
    )
}

export default OniWindow