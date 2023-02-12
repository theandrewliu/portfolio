import React, {useState } from "react"
import Draggable from "react-draggable"
import { useSelector, useDispatch } from "react-redux"
import { changeOniActive, changeOniClosed } from "../Redux/homeSlice"
import camera from '../assets/icons/camera.png'

const OniIcon = () => {
    const dispatch = useDispatch()
    const isOniClosed = useSelector((state) => state.home.isOniClosed)

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
            OniOnClick()
        } else {
            console.log(`click cancelled with drag of ${dragX}, ${dragY}`)
        }
    }

    function OniOnClick() {
        console.log("clicked")
        if (isOniClosed===false){
            //pass
        } else {
            dispatch(changeOniActive(true))
            dispatch(changeOniClosed(false))
        }
    }

    return (
    <Draggable handle="#icon" onStart={onStart} onStop={onStop} scale={0.75}>
        <div className="pb-3 justify-center flex">
            <button id="icon" type="button" title="Oni">
                <img draggable={false} className="pl-2" alt="oni" src={camera}/>
                <div className="text-white">Oni</div> 
            </button>
        </div>
    </Draggable>
    )
}

export default OniIcon