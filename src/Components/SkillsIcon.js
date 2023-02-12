import React, {useState } from "react"
import Draggable from "react-draggable"
import { useSelector, useDispatch } from "react-redux"
import { changeSkillsActive, changeSkillsClosed } from "../Redux/homeSlice"
import helpbook from '../assets/icons/help_book_cool.png'

const SkillsIcon = () => {
    const dispatch = useDispatch()
    const isSkillsClosed = useSelector((state) => state.home.isSkillsClosed)

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
            SkillsOnClick()
        } else {
            console.log(`click cancelled with drag of ${dragX}, ${dragY}`)
        }
    }

    function SkillsOnClick() {
        console.log("clicked")
        if (isSkillsClosed===false){
            //pass
        } else {
            dispatch(changeSkillsActive(true))
            dispatch(changeSkillsClosed(false))
        }
    }

    return (
    <Draggable handle="#icon" onStart={onStart} onStop={onStop} scale={0.75}>
        <div className="pb-3 justify-center flex">
            <button id="icon" type="button" title="Skills">
                <img draggable={false} className="pl-2" alt="skills" src={helpbook}/>
                <div className="text-white">Skills</div> 
            </button>
        </div>
    </Draggable>
    )
}

export default SkillsIcon