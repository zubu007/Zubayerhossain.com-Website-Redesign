import React from 'react'
import './Portfolio.css'

function Cards({
    img,
    headline,
    decription,
    github_link,
    site_link
}) {
    return (
        <>
            <div className="card">
                <div className="imgBox">
                    <img src={img} />
                </div>
                <div className="content">
                    <div className="content-div">
                        <h2 >{headline}</h2>
                        <p >{decription}</p>
                        <div className="links">
                            <a href={github_link}>Github</a>
                            <a href={site_link}>Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
