import Taskbar from "../Components/Taskbar";
import AboutMeIcon from "../Components/AboutMeIcon";
import AboutMeWindow from "../Components/AboutMeWindow";
import SkillsIcon from "../Components/SkillsIcon";
import SkillsWindow from "../Components/SkillsWindow";
import OniIcon from "../Components/OniIcon";
import OniWindow from "../Components/OniWindow";
import ContactMeIcon from "../Components/ContactMeIcon";
import ContactMeWindow from "../Components/ContactMeWindow";
import ProjectsIcon from "../Components/ProjectsIcon";
import ProjectsWindow from "../Components/ProjectsWindow";
import CommonCraveWindow from "../Components/Projects/CommonCraveWindow";
import OverRatedWindow from "../Components/Projects/OverRatedWindow";
import PortfolioWindow from "../Components/Projects/PorfolioWindow";
import { setScreenSize } from "../Redux/homeSlice";
import {useSelector, useDispatch } from "react-redux"


const Home = () => {
    const dispatch = useDispatch();

    dispatch(setScreenSize({width: window.innerWidth, height: window.innerHeight}))
    const screenSize = useSelector((state) => state.home.screenSize)

    return (
        <div className="bg-windows-bg flex flex-row" style={{height:screenSize.height-40}}>
            <div className="pt-11 pl-8 scale-75 w-1/12">
                <div className="flex flex-col relative">
                    <AboutMeIcon />
                    <SkillsIcon />
                    <ProjectsIcon />
                    <ContactMeIcon />
                    <OniIcon />
                </div>
                
            </div>
            <AboutMeWindow/>
            <SkillsWindow />
            <ProjectsWindow />
            <ContactMeWindow />
            <OniWindow />
            <CommonCraveWindow />
            <OverRatedWindow />
            <PortfolioWindow />
            <Taskbar />
        </div>
    )
}

export default Home