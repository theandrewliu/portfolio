import React, {useState } from "react"
import Draggable from "react-draggable"
import { useSelector, useDispatch } from "react-redux"
import { changeProjectsActive, changeProjectsClosed } from "../Redux/homeSlice"
import briefcase from '../assets/icons/briefcase.png'

const ProjectsIcon = () => {
    const dispatch = useDispatch()
    const isProjectsClosed = useSelector((state) => state.home.isProjectsClosed)

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
            ProjectsOnClick()
        } else {
            console.log(`click cancelled with drag of ${dragX}, ${dragY}`)
        }
    }

    function ProjectsOnClick() {
        console.log("clicked")
        if (isProjectsClosed===false){
            //pass
        } else {
            dispatch(changeProjectsActive(true))
            dispatch(changeProjectsClosed(false))
        }
    }

    return (
    <Draggable handle="#icon" onStart={onStart} onStop={onStop} scale={0.75}>
        <div className="pb-3 justify-center flex">
            <button id="icon" type="button" title="Projects">
                <img draggable={false} className="pl-2" alt="projects" src={briefcase}/>
                <div className="text-white">Projects</div> 
            </button>
        </div>
    </Draggable>
    )
}

export default ProjectsIcon