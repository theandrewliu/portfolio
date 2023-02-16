import React, {useState } from "react"
import Draggable from "react-draggable"
import { useSelector, useDispatch } from "react-redux"
import { changeFetchActive, changeFetchClosed, changeFetchOnTaskbar, setFetchOrder, setFetchZ, changeAllActiveToFalse, incrementGlobalZ } from "../../Redux/homeSlice"
import FetchImage from '../../assets/temp/FetchLogo.jpg'

const FetchIcon = () => {
    const dispatch = useDispatch()
    const isFetchClosed = useSelector((state) => state.home.isFetchClosed)

    const [dragStartPos, setDragStartPos] = useState({x: 0, y:0})

    const onStart = (e) => {
        setDragStartPos({x:e.screenX, y:e.screenY})
    }
    const onStop = (e) => {
        const dragX = Math.abs(dragStartPos.x - e.screenX)
        const dragY = Math.abs(dragStartPos.y - e.screenY)
        if (dragX < 3 || dragY < 3) {
            //onClick function here
            FetchOnClick()
        } else {
            //pass
        }
    }

    function FetchOnClick() {
        if (isFetchClosed===false){
            //pass
        } else {
            dispatch(changeAllActiveToFalse())
            dispatch(changeFetchActive(true))
            dispatch(changeFetchClosed(false))
            dispatch(changeFetchOnTaskbar(true))
            dispatch(incrementGlobalZ())
            dispatch(setFetchZ())
            dispatch(setFetchOrder())
        }
    }

    return (
    <Draggable handle="#icon" onStart={onStart} onStop={onStop} scale={0.75} defaultPosition={{x:200, y:-100}}>
        <div className="pb-3 justify-center flex z-[5]">
            <button id="icon" type="button" title="Contact Me">
                <img draggable={false} className="pl-3" alt="contact me" src={FetchImage}/>
                <div className="text-white">Fetch Form</div> 
            </button>
        </div>
    </Draggable>
    )
}

export default FetchIcon