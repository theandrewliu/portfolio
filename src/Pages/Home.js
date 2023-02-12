import React, { useState } from "react";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";
import { useSelector, useDispatch } from "react-redux";
import { changeAboutMeActive, changeAboutMeClosed } from "../Redux/homeSlice";
import briefcase from '../assets/icons/briefcase.png'
import modem from '../assets/icons/modem.png'
import camera from '../assets/icons/camera.png'
import Taskbar from "../Components/Taskbar";
import AboutMeIcon from "../Components/AboutMeIcon";
import AboutMeWindow from "../Components/AboutMeWindow";

import MyComponent from "../Components/MyComponent";


const Home = () => {
    const dispatch = useDispatch()
    const isAboutMeActive = useSelector((state) => state.home.isAboutMeActive)

    const [dragStartPos, setDragStartPos] = useState({x: 0, y:0})
    const onStart = (e) => {
        setDragStartPos({x:e.screenX, y:e.screenY})
    }
    const onStop = (e) => {
        const dragX = Math.abs(dragStartPos.x - e.screenX)
        const dragY = Math.abs(dragStartPos.y - e.screenY)
        if (dragX < 5 || dragY < 5) {
            console.log(`click with drag of ${dragX}, ${dragY}`);
            //onClick function here
            aboutMeOnClick()
        } else {
            console.log(`click cancelled with drag of ${dragX}, ${dragY}`)
        }
    }

    function aboutMeOnClick() {
        console.log("clicked")
        if (isAboutMeActive){
            //pass
        } else {
            dispatch(changeAboutMeActive())
        }
    }


    return (
        <div className="bg-windows-bg h-screen">
            <div className="pt-11 pl-8 scale-75 w-1/12">
                <div className="flex flex-col">
                    <Draggable>
                        <div className="pb-3 justify-center flex">
                            <button className="-space-y-1" title="Projects">
                                <img className="pl-0.5" alt="projects" src={briefcase}/>
                                <div className="text-white">Projects</div> 
                            </button>
                        </div>
                    </Draggable>
                    <Draggable>
                        <div className="pb-3 justify-center flex">
                            <button title="Contact Me">
                                <img className="pl-3" alt="contact me" src={modem}/>
                                <div className="text-white">Contact Me</div> 
                            </button>
                        </div>
                    </Draggable>
                    <Draggable handle="#icon" onStart={onStart} onStop={onStop} scale={0.75}>
                        <div className="pb-3 justify-center flex">
                            <button id="icon" type="button" title="Oni">
                                <img draggable={false} className="pl-2" alt="oni" src={camera}/>
                                <div className="text-white">Oni</div> 
                            </button>
                        </div>
                    </Draggable>
                    <AboutMeIcon />
                </div>
            </div>
            
            {/* About me */}
            <AboutMeWindow />
            <MyComponent />
            <Taskbar />
        </div>
    )
}

export default Home