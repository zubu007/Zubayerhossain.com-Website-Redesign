import React from 'react'
import './About.css'
import Picture from '../../../images/about_picture.jpg'


function profile() {
    document.addEventListener('scroll', parallax)
    function parallax(e) {
        this.querySelectorAll('.floater').forEach(
            Layer => {
                let y = (window.pageYOffset)/3
                Layer.style.transform = `translateY(${y}px)`
            }
        )
    }
    return (
        <div>
            <h1 className="floater" style={{left: -200, top: 150}}>About</h1>
            <h1 className="floater" style={{right: -150, top: 850}}>Skills</h1>
            <h1 className="floater" style={{right: -150, top: 1550}}>Educa</h1>
            <h1 className="floater" style={{left: -200, top: 1800}}>cation</h1>
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
