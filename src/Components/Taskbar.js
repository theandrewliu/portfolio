import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import windowslogo from '../assets/icons/windows.png'
import { 
    changeAboutMeActive, 
    changeAboutMeClosed,
    changeSkillsActive,
    changeSkillsClosed,
    changeProjectsActive,
    changeProjectsClosed,
    changeContactMeActive,
    changeContactMeClosed,
    changeOniActive,
    changeOniClosed,
    changeAllActiveToFalse,
    setAboutMeZ,
    setContactMeZ,
    setOniZ,
    setProjectsZ,
    setSkillsZ,
    incrementGlobalZ,
    changeStartActive
} from "../Redux/homeSlice"


const Taskbar = () => {
    const dispatch = useDispatch()
    const isAboutMeActive = useSelector((state) => state.home.isAboutMeActive)
    const isAboutMeOnTaskbar = useSelector((state) => state.home.AboutMeOnTaskbar)
    const AboutMeOrder = useSelector((state) => state.home.AboutMeOrder)
    const isSkillsActive = useSelector((state) => state.home.isSkillsActive)
    const isSkillsOnTaskbar = useSelector((state) => state.home.SkillsOnTaskbar)
    const SkillsOrder = useSelector((state) => state.home.SkillsOrder)
    const isProjectsActive = useSelector((state) => state.home.isProjectsActive)
    const isProjectsOnTaskbar = useSelector((state) => state.home.ProjectsOnTaskbar)
    const ProjectsOrder = useSelector((state) => state.home.ProjectsOrder)
    const isContactMeActive = useSelector((state) => state.home.isContactMeActive)
    const isContactMeOnTaskbar = useSelector((state) => state.home.ContactMeOnTaskbar)
    const ContactMeOrder = useSelector((state) => state.home.ContactMeOrder)
    const isOniActive = useSelector((state) => state.home.isOniActive)
    const isOniOnTaskbar = useSelector((state) => state.home.OniOnTaskbar)
    const OniOrder = useSelector((state) => state.home.OniOrder)
    const isStartActive = useSelector((state) => state.home.isStartActive)


    function AboutMeOnClick() {
        dispatch(incrementGlobalZ())
        if (isAboutMeActive === true) {
            dispatch(changeAboutMeActive(false))
            dispatch(changeAboutMeClosed(true))
        } else {
            dispatch(changeAllActiveToFalse())
            dispatch(setAboutMeZ())
            dispatch(changeAboutMeActive(true))
            dispatch(changeAboutMeClosed(false))
        }
    }

    function SkillsOnClick() {
        dispatch(incrementGlobalZ())
        if (isSkillsActive === true) {
            dispatch(changeSkillsActive(false))
            dispatch(changeSkillsClosed(true))
        } else {
            dispatch(changeAllActiveToFalse())
            dispatch(setSkillsZ())
            dispatch(changeSkillsActive(true))
            dispatch(changeSkillsClosed(false))
        }
    }

    function ProjectsOnClick() {
        dispatch(incrementGlobalZ())
        if (isProjectsActive === true) {
            dispatch(changeProjectsActive(false))
            dispatch(changeProjectsClosed(true))
        } else {
            dispatch(changeAllActiveToFalse())
            dispatch(setProjectsZ())
            dispatch(changeProjectsActive(true))
            dispatch(changeProjectsClosed(false))
        }
    }
    
    function ContactMeOnClick() {
        dispatch(incrementGlobalZ())
        if (isContactMeActive === true) {
            dispatch(changeContactMeActive(false))
            dispatch(changeContactMeClosed(true))
        } else {
            dispatch(changeAllActiveToFalse())
            dispatch(setContactMeZ())
            dispatch(changeContactMeActive(true))
            dispatch(changeContactMeClosed(false))
        }
    }
    
    function OniOnClick() {
        dispatch(incrementGlobalZ())
        if (isOniActive === true) {
            dispatch(changeOniActive(false))
            dispatch(changeOniClosed(true))
        } else {
            dispatch(changeAllActiveToFalse())
            dispatch(setOniZ())
            dispatch(changeOniActive(true))
            dispatch(changeOniClosed(false))
        }
    }

    function StartOnClick() {
        dispatch(incrementGlobalZ)
        if(isStartActive === true){
            dispatch(changeStartActive(false))
        } else {
            dispatch(changeAllActiveToFalse())
            dispatch(changeStartActive(true))
        }
    }

    const locale = 'en';
    const [today, setDate] = useState(new Date())
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 5*1000);
        return () => {
            clearInterval(timer);
        }
    }, []);
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric'})



    return (
        <>
            <div className={ isStartActive ? "flex flex-row bg-taskbar fixed bottom-10 h-80 w-56 border-t-white border-l-white border-r-black border-b-black z-[1000]" : "hidden"}>
                <div className="bg-title-bar text-white text-4xl text-center font-semibold border-t border-l border-r w-1/6 bottom-0">
                    <div className="mt-[170px]">
                        <div className="-rotate-90 flex justify-end">
                            Andrew94
                        </div>
                    </div>
                </div>
                <div className="w-5/6 space-y-1">
                    <div className="mt-[100px]"></div>
                    <div className="hover:bg-title-bar hover:text-white h-10 p-2 text-xl"><a className="block w-full h-full" href="https://www.linkedin.com/in/theandrewliu/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
                    <div className="hover:bg-title-bar hover:text-white h-10 p-2 text-xl"><a className="block w-full h-full" href="https://github.com/theandrewliu" target="_blank" rel="noopener noreferrer">GitHub</a></div>
                    <div className="hover:bg-title-bar hover:text-white h-10 p-2 text-xl"><a className="block w-full h-full" href="https://www.instagram.com/ndrw_l/" target="_blank" rel="noopener noreferrer">Instagram</a></div>
                    <div className="hover:bg-title-bar hover:text-white h-10 p-2 text-xl"><a className="block w-full h-full" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">OnlyFans</a></div>
                    <hr />
                    <div className="hover:bg-title-bar hover:text-white h-10 p-2 text-xs text-center">
                        <a className="block w-full h-full" href="https://grovy.space/project/windows-95-98-style-website/">
                        Website inspired by
                        grovy.space
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-taskbar fixed bottom-0 inset-x-0 h-10 justify-between flex z-[1000]">
                <div className="justify-left flex flex-row space-x-0.25 items-center">
                    <button onClick={()=>StartOnClick()} className={ !isStartActive ? "pr-3 flex items-center active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow" : "pr-3 flex items-center border border-t-shadow border-l-shadow border-b-white border-r-white"}>
                        <img alt="start-windows-logo" draggable={false} src={windowslogo} className="pl-2 scale-50"/>
                        Start
                    </button>
                    
                    <button onClick={()=> AboutMeOnClick()} style={{order: AboutMeOrder}} className={isAboutMeOnTaskbar===false ? "hidden" : isAboutMeActive ? `h-8 w-28 border border-t-shadow border-l-shadow border-r-white border-b-white` : `h-8 w-28 border border-t-white border-l-white border-b-shadow border-r-shadow`}>
                        About Me
                    </button>
                    <button onClick={()=> SkillsOnClick()} style={{order: SkillsOrder}} className={isSkillsOnTaskbar===false ? "hidden" : isSkillsActive ? `h-8 w-20 border border-t-shadow border-l-shadow border-r-white border-b-white` : `h-8 w-20 border border-t-white border-l-white border-b-shadow border-r-shadow`}>
                        Skills
                    </button>
                    <button onClick={()=> ProjectsOnClick()} style={{order: ProjectsOrder}} className={isProjectsOnTaskbar===false ? "hidden" : isProjectsActive ? `h-8 w-20 border border-t-shadow border-l-shadow border-r-white border-b-white` : `h-8 w-20 border border-t-white border-l-white border-b-shadow border-r-shadow`}>
                        Projects
                    </button>
                    <button onClick={()=> ContactMeOnClick()} style={{order: ContactMeOrder}} className={isContactMeOnTaskbar===false ? "hidden" : isContactMeActive ? `h-8 w-28 border border-t-shadow border-l-shadow border-r-white border-b-white` : `h-8 w-28 border border-t-white border-l-white border-b-shadow border-r-shadow`}>
                        Contact Me
                    </button>
                    <button onClick={()=> OniOnClick()} style={{order: OniOrder}} className={isOniOnTaskbar===false ? "hidden" : isOniActive ? `h-8 w-20 border border-t-shadow border-l-shadow border-r-white border-b-white` : `h-8 w-20 border border-t-white border-l-white border-b-shadow border-r-shadow`}>
                        Oni
                    </button>
                </div>
                <div className="flex items-center pr-1">
                    <div className="flex items-center border border-t-shadow border-r-white border-b-white border-l-shadow h-8 w-20 pl-3 pt-1">{time}</div>
                </div>
            </div>
        </>
    )
}

export default Taskbar