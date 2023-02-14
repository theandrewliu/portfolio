import React, {useState } from "react"
import Draggable from "react-draggable"
import { useSelector, useDispatch } from "react-redux"
import { changeContactMeActive, changeContactMeClosed, changeContactMeOnTaskbar, setContactMeOrder, setContactMeZ, changeAllActiveToFalse } from "../Redux/homeSlice"
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
            //onClick function here
            ContactMeOnClick()
        } else {
            //pass
        }
    }

    function ContactMeOnClick() {
        if (isContactMeClosed===false){
            //pass
        } else {
            dispatch(changeAllActiveToFalse())
            dispatch(changeContactMeActive(true))
            dispatch(changeContactMeClosed(false))
            dispatch(changeContactMeOnTaskbar(true))
            dispatch(setContactMeZ())
            dispatch(setContactMeOrder())
        }
    }

    return (
    <Draggable handle="#icon" onStart={onStart} onStop={onStop} scale={0.75}>
        <div className="pb-3 justify-center flex z-[5]">
            <button id="icon" type="button" title="Contact Me">
                <img draggable={false} className="pl-3" alt="contact me" src={modem}/>
                <div className="text-white">Contact Me</div> 
            </button>
        </div>
    </Draggable>
    )
}

export default ContactMeIcon