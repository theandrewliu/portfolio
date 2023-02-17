import { useSelector, useDispatch } from "react-redux"
import { 
    changeCommonCraveActive, 
    changeCommonCraveClosed, 
    changeCommonCraveOnTaskbar, 
    setCommonCraveOrder, 
    setCommonCraveZ, 
    changeAllActiveToFalse, 
    incrementGlobalZ } from "../../Redux/homeSlice"
import folder from '../../assets/icons/folder.png'

const CommonCraveIcon = () => {
    const dispatch = useDispatch()
    const isCommonCraveClosed = useSelector((state) => state.home.isCommonCraveClosed)
    const zValue = useSelector((state) => state.home.CommonCraveZ)

    function CommonCraveOnClick() {
        if (isCommonCraveClosed===false){
            //pass
        } else {
            dispatch(changeAllActiveToFalse())
            dispatch(changeCommonCraveActive(true))
            dispatch(changeCommonCraveClosed(false))
            dispatch(changeCommonCraveOnTaskbar(true))
            dispatch(incrementGlobalZ())
            dispatch(setCommonCraveZ())
            dispatch(setCommonCraveOrder())
        }
    }

    return (
    <div onClick={(event) => {event.stopPropagation(); CommonCraveOnClick();}}>
        <div className="pb-3 justify-center flex" style={{zIndex:zValue}}>
            <button id="icon" type="button" title="Common Crave">
                <img draggable={false} className="pl-8" alt="Common Crave" src={folder}/>
                <div className="text-black">Common Crave</div> 
            </button>
        </div>
    </div>
    )
}

export default CommonCraveIcon