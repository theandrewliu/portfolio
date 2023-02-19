import { useSelector, useDispatch } from "react-redux"
import { 
    changePortfolioActive, 
    changePortfolioClosed, 
    changePortfolioOnTaskbar, 
    setPortfolioOrder, 
    setPortfolioZ, 
    changeAllActiveToFalse, 
    incrementGlobalZ } from "../../Redux/homeSlice"
import folder from '../../assets/icons/folder.png'

const PortfolioIcon = () => {
    const dispatch = useDispatch()
    const isPortfolioClosed = useSelector((state) => state.home.isPortfolioClosed)
    const zValue = useSelector((state) => state.home.PortfolioZ)

    function PortfolioOnClick() {
        if (isPortfolioClosed===false){
            //pass
        } else {
            dispatch(changeAllActiveToFalse())
            dispatch(changePortfolioActive(true))
            dispatch(changePortfolioClosed(false))
            dispatch(changePortfolioOnTaskbar(true))
            dispatch(incrementGlobalZ())
            dispatch(setPortfolioZ())
            dispatch(setPortfolioOrder())
        }
    }

    return (
    <div onClick={(event) => {event.stopPropagation(); PortfolioOnClick();}}>
        <div className="pb-3 justify-center flex" style={{zIndex:zValue}}>
            <button id="icon" type="button" title="Portfolio">
                <img draggable={false} className="pl-2" alt="Portfolio" src={folder}/>
                <div className="text-black">Portfolio</div> 
            </button>
        </div>
    </div>
    )
}

export default PortfolioIcon