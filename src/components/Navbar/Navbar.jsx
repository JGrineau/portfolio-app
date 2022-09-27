import React from 'react';
import './navbar.css'
import { useState } from 'react'
import LOGO from '../../assets/LOGO.png';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <div className='navbar'>
      <img src={LOGO} alt="logo"></img>
      <nav>
        <ul className='nav-links'>
       <li> <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</a></li>
       <li> <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a></li>
       <li> <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}>Projects</a></li>
        </ul>
        </nav>
      
        <a href="mailto:jgrineau95@gmail.com" className="btn btn-primary">Contact Me</a>

        
      </div>
  )
};

export default Navbar;