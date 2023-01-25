import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import Marquee from '../marquee/Marquee';
import './footer.css';

const Footer = () => {

  

  return (
    <footer>
      <Marquee />
      {/* <div className='marquee__container'>
        
          <h1>BEFEARLESSINTHEPURSUITOFWHATSETSYOURSOULONFIRE</h1>
          
        
      </div> */}

{/* <div class="marquee">
      <h3>
        <div class="marquee-wrapper">
          <div class="marquee-title">
          <span> BE FEARLESS IN THE PURSUIT OF WHAT SETS YOUR SOUL ON FIRE</span>
          <div className="marquee-title">
          <span> BE FEARLESS IN THE PURSUIT OF WHAT SETS YOUR SOUL ON FIRE</span>
          </div>  
          </div>
        </div>
      </h3>
    </div> */}




      <a href="#home" className="footer__logo">JPG</a>
      <ul className="links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
      <div className="footer__socials">
      <a href='https://www.linkedin.com/in/jpgrineau/' target="_blank" rel="noreferrer"><BsLinkedin /></a>
        
        
            <a href='https://github.com/JGrineau?tab=repositories' target="_blank" rel="noreferrer"><BsGithub /></a>
        
        
            <a href='https://www.instagram.com/' target="_blank" rel="noreferrer"><BsInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; JP Grineau 2022. INC.</small>
      </div>
    </footer>
  )
}

export default Footer