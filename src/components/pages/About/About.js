import React from 'react'
import './About.css'
import Education from './Education'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import Footer from '../Footer/Footer'
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data'
import Skill from './Skill'
import Profile from './profile'

function Home() {
    return (
        <div>
            <Profile />
            <Skill />
            <Education />  
            <Footer />
        </div>
    )
}

export default Home
