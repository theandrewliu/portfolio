import "./Footer.css"
import React from "react"
import { FaHome, FaMailBulk, FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color: "#fff", marginRight: "2rem" }}/>
                        <p>Los Angeles, California</p>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />andrew@andrewliu.app</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>Find me at these cool places too!</h4>
                    <div className="social">
                        <a href="https://github.com/theandrewliu">
                            <FaGithub size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                        <a href="https://www.linkedin.com/in/theandrewliu/">
                            <FaLinkedin size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer