import { useSelector, useDispatch } from "react-redux"
import { 
    changeOverRatedActive, 
    changeOverRatedClosed, 
    changeOverRatedOnTaskbar, 
    setOverRatedOrder, 
    setOverRatedZ, 
    changeAllActiveToFalse, 
    incrementGlobalZ } from "../../Redux/homeSlice"
import folder from '../../assets/icons/folder.png'

const OverRatedIcon = () => {
    const dispatch = useDispatch()
    const isOverRatedClosed = useSelector((state) => state.home.isOverRatedClosed)
    const zValue = useSelector((state) => state.home.OverRatedZ)

    function OverRatedOnClick() {
        if (isOverRatedClosed===false){
            //pass
        } else {
            dispatch(changeAllActiveToFalse())
            dispatch(changeOverRatedActive(true))
            dispatch(changeOverRatedClosed(false))
            dispatch(changeOverRatedOnTaskbar(true))
            dispatch(incrementGlobalZ())
            dispatch(setOverRatedZ())
            dispatch(setOverRatedOrder())
        }
    }

    return (
    <div onClick={(event) => {event.stopPropagation();OverRatedOnClick()}}>
        <div className="pb-3 justify-center flex" style={{zIndex:zValue}}>
            <button id="icon" type="button" title="OverRated">
                <img draggable={false} className="pl-4" alt="OverRated" src={folder}/>
                <div className="text-black">OverRated</div> 
            </button>
        </div>
    </div>
    )
}

export default OverRatedIcon