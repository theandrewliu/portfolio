import React from "react";
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import ProjectHeroImg from "../Components/ProjectHeroImg";
import Project from "../Components/Project";

const Projects = () => {
    return(
    <div>
        <Navbar />
        <ProjectHeroImg heading="Projects"  text="Some things I've worked on."/>
        <Project />
        <Footer />
    </div>
    ) 
};

export default Projects;