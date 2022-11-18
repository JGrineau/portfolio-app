import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import './footer.css';

const Footer = () => {

  

  return (
    <footer>
      {/* <div className='marquee__container'>
        
          <h1>BEFEARLESSINTHEPURSUITOFWHATSETSYOURSOULONFIRE</h1>
          
        
      </div> */}

<div class="marquee">
      <h3>
        <div class="marquee-wrapper">
          <div class="marquee-title">
          <span>BEFEARLESSINTHEPURSUITOFWHATSETSYOURSOULONFIRE</span>
          </div>
          <div class="marquee-title">
            <span>BEFEARLESSINTHEPURSUITOFWHATSETSYOURSOULONFIRE</span>
          </div>
        </div>
      </h3>
    </div>




      <a href="#home" className="footer__logo">JPG</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
      <div className="footer__socials">
      <a href='https://www.linkedin.com/in/jpgrineau/' target="_blank"><BsLinkedin /></a>
        
        
            <a href='https://github.com/JGrineau?tab=repositories' target="_blank"><BsGithub /></a>
        
        
            <a href='https://www.instagram.com/' target="_blank"><BsInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; JP Grineau 2022. INC.</small>
      </div>
    </footer>
  )
}

export default Footer