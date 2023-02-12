import React, {useState } from "react"
import Draggable from "react-draggable"
import { useSelector, useDispatch } from "react-redux"
import { changeContactMeActive, changeContactMeClosed } from "../Redux/homeSlice"
import modem from '../assets/icons/modem.png'

const ContactMeIcon = () => {
    const dispatch = useDispatch()
    const isContactMeClosed = useSelector((state) => state.home.isContactMeClosed)

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
            ContactMeOnClick()
        } else {
            console.log(`click cancelled with drag of ${dragX}, ${dragY}`)
        }
    }

    function ContactMeOnClick() {
        console.log("clicked")
        if (isContactMeClosed===false){
            //pass
        } else {
            dispatch(changeContactMeActive(true))
            dispatch(changeContactMeClosed(false))
        }
    }

    return (
    <Draggable handle="#icon" onStart={onStart} onStop={onStop} scale={0.75}>
        <div className="pb-3 justify-center flex">
            <button id="icon" type="button" title="Contact Me">
                <img draggable={false} className="pl-3" alt="contact me" src={modem}/>
                <div className="text-white">Contact Me</div> 
            </button>
        </div>
    </Draggable>
    )
}

export default ContactMeIcon