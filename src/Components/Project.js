import React from "react"
import "./ProjectCard.css"
import ProjectCard from "./ProjectCard"
import ProjectData from "./ProjectData"

const Project = () => {
    return(
        <div className="work-container">
            <div className="project-container">
               {ProjectData.map((val, ind) => {
                return(
                    <ProjectCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}
                    />
                )
               })}
            </div>
        </div>
    )
}

export default Project