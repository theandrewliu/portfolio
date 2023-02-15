import React, {useState } from "react"
import Draggable from "react-draggable"
import { useSelector, useDispatch } from "react-redux"
import { changeSkillsActive, changeSkillsClosed, changeSkillsOnTaskbar, setSkillsOrder, setSkillsZ, changeAllActiveToFalse, incrementGlobalZ } from "../Redux/homeSlice"
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
            //onClick function here
            SkillsOnClick()
        } else {
            //pass
        }
    }

    function SkillsOnClick() {
        if (isSkillsClosed===false){
            //pass
        } else {
            dispatch(changeAllActiveToFalse())
            dispatch(changeSkillsActive(true))
            dispatch(changeSkillsClosed(false))
            dispatch(changeSkillsOnTaskbar(true))
            dispatch(incrementGlobalZ())
            dispatch(setSkillsZ())
            dispatch(setSkillsOrder())
        }
    }

    return (
    <Draggable handle="#icon" onStart={onStart} onStop={onStop} scale={0.75}>
        <div className="pb-3 justify-center flex z-[5]">
            <button id="icon" type="button" title="Skills">
                <img draggable={false} className="pl-2" alt="skills" src={helpbook}/>
                <div className="text-white">Skills</div> 
            </button>
        </div>
    </Draggable>
    )
}

export default SkillsIcon