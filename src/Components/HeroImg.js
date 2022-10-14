import "./HeroImg.css";
import React from "react";
import { Link } from "react-router-dom"
// import image_name from "../assets/image_name"

const HeroImg = () => {
    return <div className="hero">
        <div className="mask">
            {/* <img className="image_name" src="{ image_name } alt="image"/> */}
        </div>
        <div className="content">
            <p>Andrew Liu</p>
            <h1>Software Engineer</h1>
            <div>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
}




export default HeroImg