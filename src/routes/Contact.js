import React from "react";
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import ProjectHeroImg from "../Components/ProjectHeroImg";

const Contact = () => {
    return(
        <div>
            <Navbar />
            <ProjectHeroImg heading="Contact Me" text="andrew@andrewliu.app"/>
            <Footer />
        </div>
        ) 
};

export default Contact;