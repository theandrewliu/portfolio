import React from "react";
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import ProjectHeroImg from "../Components/ProjectHeroImg";
import AboutContent from "../Components/AboutContent";

const About = () => {
    return(
        <div>
            <Navbar />
            <ProjectHeroImg heading="About Me" text="I'm just a dude who likes to code."/>
            <AboutContent />
            <Footer />
        </div>
        ) 
};

export default About;