import "./AboutContent.css"
import { Link } from "react-router-dom"
import React from "react"

const AboutContent = () =>{
    return(
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>By day, I go by Andrew. By night, I still go by Andrew. To condense it, 
                    I'm a coding boot camp graduate educated in Python, JavaScript, Django, 
                    and React. But I'm a lifelong learner and I'm continuing to learn different 
                    technologies in order to keep up to date. Outside of coding, you can catch me 
                    with my boy Oni, trying out the newest games, or at a new restaurant finding my next favorite food.</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
        </div>
    )
}

export default AboutContent