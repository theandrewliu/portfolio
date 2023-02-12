import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"


const Taskbar = () => {
    const dispatch = useDispatch()
    const isAboutMeActive = useSelector((state) => state.home.isAboutMeActive)


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
        <div className="bg-taskbar fixed bottom-0 inset-x-0 h-10 justify-between flex">
            <div className="justify-left flex space-x-1.5 items-center pl-3">
                <div>Start</div>
                <div>ActiveButtons</div>
            </div>
            <div className="flex items-center pr-1">
                <div className="flex items-center border border-t-shadow border-r-white border-b-white border-l-shadow h-8 w-20 pl-3 pt-1">{time}</div>
            </div>
        </div>
    )
}

export default Taskbar