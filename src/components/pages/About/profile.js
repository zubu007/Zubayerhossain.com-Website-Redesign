import React from 'react'
import './About.css'
import Picture from '../../../images/about_picture.jpg'


function profile() {
    return (
        <div>
            <div className="banner-about">
                <div className="hero-section-about">
                    <h1 className="about-text">About</h1>
                    <div className="picture-and-text">
                        <div className="picture">
                            <img src={Picture} className="picture-file"/>
                        </div>
                        <div className="text">
                            <p className="hi-text">Hi,</p>
                            <p className="para">onec a est at mi volutpat sagittis. Nam in dictum massa. Aenean sollicitudin t
ellus quam, nec faucibus ex luctus id. Integer tempus consectetur porta. Sed at d
ictum urna. Suspendisse sed placerat est, eget dapibus eros. Suspendisse vel enim
 libero. Quisque at consequat eros.
                            </p>
                            <div className="button"><h1>Lets Talk</h1></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default profile
