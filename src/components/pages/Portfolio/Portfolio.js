import React from 'react'
import './Portfolio.css'
import Project1 from "../../../images/ScreenShot.JPG"
import Cards from './Cards'
import { homeObjOne } from './Data'

function Portfolio() {
    return (
        <div className="portfolio">
            <div className="portfolio-banner">
                <h1 className="about-text">Portfolio</h1>
                <div className="projects-container">
                    <Cards {...homeObjOne} />
                    <Cards {...homeObjOne} />
                </div>
            </div>
        </div>
    )
}

export default Portfolio
