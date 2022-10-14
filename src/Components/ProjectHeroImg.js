import "./ProjectHeroImg.css"
import React, { Component } from "react"

class ProjectHeroImg extends Component {
    render() {
        return(
        <div className="hero-img">
            <div className="heading">
                <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
            </div>
        </div>
        ) 
    }
}

export default ProjectHeroImg