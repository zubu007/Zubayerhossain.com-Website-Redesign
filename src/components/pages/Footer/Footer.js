import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Logos from "../../../images/logo.png"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaReact, FaHtml5, FaCss3, FaJs, FaNodeJs, FaNpm, FaGitAlt, } from "react-icons/fa";
import {SiTypescript} from "react-icons/si"
import {AiFillGitlab} from "react-icons/ai"

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-div'>
        <p className='footer-heading'>
          Let's work on your next project.. Together!
        </p>
        <img src={Logos} alt="logo" className="logo"/>
        <div className="footer-menu">
        <ul className="">
          <li className="nav-item">
              <Link to='/' className="footer-links">
                  Home
              </Link>
          </li>
          <li className="nav-item">
              <Link to='/about' className="footer-links">
                  About
              </Link>
          </li>
          <li className="nav-item">
              <Link to='/portfolio' className="footer-links">
                  Portfolio
              </Link>
          </li>
          <li className="nav-item">
              <Link to='/blog' className="footer-links">
                  Blog
              </Link>
          </li>
          <li className="nav-item">
              <Link to='/contact' className="footer-links">
                  Contact
              </Link>
          </li>
          
          
          </ul>  
        </div>
      </div>
      <p className="copywrite">All rights reserved. Zubayer Hossain</p>
      <div className="footer-social-icon">
        <a href="https://twitter.com/Zubayer64629386">
          <FaTwitter className="icons icon-twitter"/>
        </a>
        <a href="https://www.linkedin.com/in/zubayer-hossain-8a5836190/">
        <FaLinkedin className="icons icon-linkedin"/>
        </a>
        <a href="https://github.com/zubu007">
        <FaGithub className="icons icon-github"/>
        </a>
      </div>
      <p className="built-with">KNOWLEDGE OF</p>
      <div className="footer-icons">
        <FaReact className="icon"/>
        <FaHtml5 className="icon"/>
        <FaCss3 className="icon"/>
        <FaJs className="icon"/>
        <FaNodeJs className="icon"/>
        <SiTypescript className="icon"/>
        <FaNpm className="icon"/>
        <FaGitAlt className="icon"/>
        <AiFillGitlab className="icon"/>
      </div>
    </div>
  );
}

export default Footer;