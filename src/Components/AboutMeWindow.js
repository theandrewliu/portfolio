import Draggable from "react-draggable"
import { Resizable } from "re-resizable"
import { useSelector, useDispatch } from "react-redux"
import { changeAboutMeActive, changeAboutMeClosed } from "../Redux/homeSlice";
import closebutton from '../assets/icons/close-icon.png'
import hidebutton from '../assets/icons/hide-icon.png'
import maximizebutton from '../assets/icons/maximize-icon.png'


const AboutMeWindow = () => {
    const dispatch = useDispatch();
    const isAboutMeClosed = useSelector((state) => state.home.isAboutMeClosed)

    function aboutMeCloseOnClick() {
        console.log("clicked close")
        dispatch(changeAboutMeActive(false))
        dispatch(changeAboutMeClosed(true))
    }
    return (
        <Draggable handle="#handle"  bounds="parent">
            <Resizable defaultSize={{ width: 500, height:275}} minWidth={300} minHeight={200} enable={!isAboutMeClosed ? { top:false, right:true, bottom:true, left:false, topRight:false, bottomRight:true, bottomLeft:false, topLeft:false } : { top:false, right:false, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}>
                <div className={!isAboutMeClosed ? "border-4 divide-y-4 border-taskbar flex flex-col h-full" : "hidden"}>
                    <div id="handle" className="flex justify-between bg-title-bar text-white">
                        <div  className="flex hover:cursor-default pl-1 pt-1">
                            About Me
                        </div>
                        <div id="button-group" className="pr-1 pt-1 space-x-1.5">
                            <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125"><img draggable={false} alt="closebutton" src={hidebutton}/></button>
                            <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125"><img draggable={false} alt="closebutton" src={maximizebutton}/></button>
                            <button className="active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow h-3 w-3 scale-125" onClick={()=>aboutMeCloseOnClick()}><img draggable={false} alt="closebutton" src={closebutton}/></button>
                        </div>
                    </div>
                    <div className="h-full bg-white border border-l-shadow border-t-shadow whitespace-normal">
                        Content
                    </div>
                </div>
            </Resizable>
        </Draggable>
    )
}

export default AboutMeWindow