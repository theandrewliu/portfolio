import React, {useState } from "react"
import Draggable from "react-draggable"
import { useSelector, useDispatch } from "react-redux"
import { changeAboutMeActive, changeAboutMeClosed } from "../Redux/homeSlice"
import msagent from '../assets/icons/msagent.png'

const AboutMeIcon = () => {
    const dispatch = useDispatch()
    const isAboutMeClosed = useSelector((state) => state.home.isAboutMeClosed)

    const [dragStartPos, setDragStartPos] = useState({x: 0, y:0})
    const onStart = (e) => {
        setDragStartPos({x:e.screenX, y:e.screenY})
    }
    const onStop = (e) => {
        const dragX = Math.abs(dragStartPos.x - e.screenX)
        const dragY = Math.abs(dragStartPos.y - e.screenY)
        if (dragX < 3 || dragY < 3) {
            console.log(`click with drag of ${dragX}, ${dragY}`);
            //onClick function here
            aboutMeOnClick()
        } else {
            console.log(`click cancelled with drag of ${dragX}, ${dragY}`)
        }
    }

    function aboutMeOnClick() {
        console.log("clicked")
        if (isAboutMeClosed===false){
            //pass
        } else {
            dispatch(changeAboutMeActive(true))
            dispatch(changeAboutMeClosed(false))
        }
    }

    return (
    <Draggable handle="#icon" onStart={onStart} onStop={onStop} scale={0.75}>
        <div className="pb-3 justify-center flex">
            <button id="icon" type="button" title="About Me">
                <img draggable={false} className="pl-2" alt="about me" src={msagent}/>
                <div className="text-white">About Me</div> 
            </button>
        </div>
    </Draggable>
    )
}

export default AboutMeIcon