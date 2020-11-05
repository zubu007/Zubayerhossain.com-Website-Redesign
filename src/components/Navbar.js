import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { MdFingerprint, MdFirstPage} from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button} from './Button';
import Logos from "../images/logo.png"
import './Navbar.css';
import { IconContext } from 'react-icons/lib'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <div className="navbar-container container">                   
                    <Link to= "/"className="navbar-logo" onClick={closeMobileMenu}>
                        <img src={Logos} alt="logo" className="logo"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className= "nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className= "nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/portfolio' className= "nav-links" onClick={closeMobileMenu}>
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/blog' className= "nav-links" onClick={closeMobileMenu}>
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className= "nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        
                        
                    </ul>              
                </div>
            </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
