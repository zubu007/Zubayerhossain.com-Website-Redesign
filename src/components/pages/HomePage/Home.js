import React from 'react'
import './Home.css';
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import BackLogo from '../../../images/back_logo.png'
import Typical from 'react-typical'



function Home() {
    document.addEventListener('mousemove', parallax);
    function parallax(e) {
        this.querySelectorAll('.back-img').forEach(
            Layer => {
                let x = (window.innerWidth - e.pageX *5) / 100;
                let y = (window.innerHeight - e.pageY *5)/100;
                Layer.style.transform = `translate(${x}px, ${y}px)`;
            }
        )
        this.querySelectorAll('.hero_text').forEach(
            Layer => {
                let x = (window.innerWidth - e.pageX *1) / 100;
                let y = (window.innerHeight - e.pageY *1)/100;
                Layer.style.transform = `translate(${x}px, ${y}px)`;
            }
        )
    }

    return (
        <>
            
            <div className="banner">
                <img src={BackLogo} className="back-img" />
                <div className="hero_text">
                    <h1 className="top_line">
                        I am
                    </h1>
                    <h1 className="main_name">
                        Zubayer
                    </h1>
                    <h1 className="des">
                        <Typical 
                            className="type"
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                'Developer',
                                1000,
                                'Designer',
                                1000,
                                'Advisor',
                                1000,
                                'Fast-learner',
                                1000,
                                'Team-player',
                                1000
                            ]}
                        />
                    </h1>
                </div>
            </div>
            <div className="social">
                <a href="https://twitter.com/Zubayer64629386">
                    <FaTwitter className="icon icon-twitter"/>
                </a>
                <a href="https://www.linkedin.com/in/zubayer-hossain-8a5836190/">
                    <FaLinkedin className="icon icon-linkedin"/>
                </a>
                <a href="https://github.com/zubu007">
                    <FaGithub className="icon icon-github"/>
                </a>
            </div>
            <div className="copyright">
                <p>c. 2020 Zubayer Hossain. All Rights Reserved</p>      
            </div>

        </>
    )
}

export default Home
