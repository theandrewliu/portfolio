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
} from "../Redux/homeSlice"


const Taskbar = () => {
    const dispatch = useDispatch()
    const isAboutMeActive = useSelector((state) => state.home.isAboutMeActive)
    const isAboutMeOnTaskbar = useSelector((state) => state.home.AboutMeOnTaskbar)
    const isSkillsActive = useSelector((state) => state.home.isSkillsActive)
    const isSkillsOnTaskbar = useSelector((state) => state.home.SkillsOnTaskbar)
    const isProjectsActive = useSelector((state) => state.home.isProjectsActive)
    const isProjectsOnTaskbar = useSelector((state) => state.home.ProjectsOnTaskbar)
    const isContactMeActive = useSelector((state) => state.home.isContactMeActive)
    const isContactMeOnTaskbar = useSelector((state) => state.home.ContactMeOnTaskbar)
    const isOniActive = useSelector((state) => state.home.isOniActive)
    const isOniOnTaskbar = useSelector((state) => state.home.OniOnTaskbar)

    function AboutMeOnClick() {
        if (isAboutMeActive === true) {
            dispatch(changeAboutMeActive(false))
            dispatch(changeAboutMeClosed(true))
        } else {
            dispatch(changeAboutMeActive(true))
            dispatch(changeAboutMeClosed(false))
        }
    }

    function SkillsOnClick() {
        if (isSkillsActive === true) {
            dispatch(changeSkillsActive(false))
            dispatch(changeSkillsClosed(true))
        } else {
            dispatch(changeSkillsActive(true))
            dispatch(changeSkillsClosed(false))
        }
    }

    function ProjectsOnClick() {
        if (isProjectsActive === true) {
            dispatch(changeProjectsActive(false))
            dispatch(changeProjectsClosed(true))
        } else {
            dispatch(changeProjectsActive(true))
            dispatch(changeProjectsClosed(false))
        }
    }
    
    function ContactMeOnClick() {
        if (isContactMeActive === true) {
            dispatch(changeContactMeActive(false))
            dispatch(changeContactMeClosed(true))
        } else {
            dispatch(changeContactMeActive(true))
            dispatch(changeContactMeClosed(false))
        }
    }
    
    function OniOnClick() {
        if (isOniActive === true) {
            dispatch(changeOniActive(false))
            dispatch(changeOniClosed(true))
        } else {
            dispatch(changeOniActive(true))
            dispatch(changeOniClosed(false))
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
        <div className="bg-taskbar fixed bottom-0 inset-x-0 h-10 justify-between flex z-[1000]">
            <div className="justify-left flex flex-row space-x-1.5 items-center">
                <button className="pr-3 flex items-center active:border-t-shadow active:border-l-shadow active:border-b-white active:border-r-white bg-taskbar border border-t-white border-l-white border-b-shadow border-r-shadow">
                    <img alt="start-windows-logo" draggable={false} src={windowslogo} className="pl-2 scale-50"/>
                    Start
                </button>
                
                <button onClick={()=> AboutMeOnClick()} className={isAboutMeOnTaskbar===false ? "hidden" : isAboutMeActive ? "border order-last border-t-shadow border-l-shadow border-r-white border-b-white" : "border border-t-white border-l-white border-b-shadow border-r-shadow"}>
                    About Me
                </button>
                <button onClick={()=> SkillsOnClick()} className={isSkillsOnTaskbar===false ? "hidden" : isSkillsActive ? "border order-last border-t-shadow border-l-shadow border-r-white border-b-white" : "border border-t-white border-l-white border-b-shadow border-r-shadow"}>
                    Skills
                </button>
                <button onClick={()=> ProjectsOnClick()} className={isProjectsOnTaskbar===false ? "hidden" : isProjectsActive ? "border order-last border-t-shadow border-l-shadow border-r-white border-b-white" : "border border-t-white border-l-white border-b-shadow border-r-shadow"}>
                    Projects
                </button>
                <button onClick={()=> ContactMeOnClick()} className={isContactMeOnTaskbar===false ? "hidden" : isContactMeActive ? "border order-last border-t-shadow border-l-shadow border-r-white border-b-white" : "border border-t-white border-l-white border-b-shadow border-r-shadow"}>
                    Contact Me
                </button>
                <button onClick={()=> OniOnClick()} className={isOniOnTaskbar===false ? "hidden" : isOniActive ? "border order-last border-t-shadow border-l-shadow border-r-white border-b-white" : "border border-t-white border-l-white border-b-shadow border-r-shadow"}>
                    Oni
                </button>
            </div>
            <div className="flex items-center pr-1">
                <div className="flex items-center border border-t-shadow border-r-white border-b-white border-l-shadow h-8 w-20 pl-3 pt-1">{time}</div>
            </div>
        </div>
    )
}

export default Taskbar