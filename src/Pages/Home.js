import Taskbar from "../Components/Taskbar";
import AboutMeIcon from "../Components/AboutMeIcon";
import AboutMeWindow from "../Components/AboutMeWindow";
import OniIcon from "../Components/OniIcon";
import ContactMeIcon from "../Components/ContactMeIcon";
import ProjectsIcon from "../Components/ProjectsIcon";
import SkillsIcon from "../Components/SkillsIcon";



const Home = () => {
    return (
        <div className="bg-windows-bg h-screen">
            <div className="pt-11 pl-8 scale-75 w-1/12">
                <div className="flex flex-col">
                    <AboutMeIcon />
                    <SkillsIcon />
                    <ProjectsIcon />
                    <ContactMeIcon />
                    <OniIcon />
                </div>
            </div>
            
            {/* About me */}
            <AboutMeWindow />
            <Taskbar />
        </div>
    )
}

export default Home