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
//------Fetch
import FetchIcon from "../Components/Fetch/FetchIcon";
import FetchWindow from "../Components/Fetch/FetchWindow";

let height = window.innerHeight - 40 //subtracting the height of the taskbar

const Home = () => {
    return (
        <div className="bg-windows-bg" style={{height:height}}>
            <div className="pt-11 pl-8 scale-75 w-1/12">
                <div className="flex flex-col relative">
                    <AboutMeIcon />
                    <SkillsIcon />
                    <ProjectsIcon />
                    <ContactMeIcon />
                    <OniIcon />
                </div>
                
                <FetchIcon />
                
            </div>
            <AboutMeWindow/>
            <SkillsWindow />
            <ProjectsWindow />
            <ContactMeWindow />
            <OniWindow />
            {/* -------Fetch Stuff--------- */}
            <FetchWindow />
            <Taskbar />
        </div>
    )
}

export default Home