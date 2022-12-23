import React from 'react';
import './navbar.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import logo from '../../assets/logo_red.png'
import { useState } from 'react';
import Button from '../button/Button'




const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const [activeNav, setActiveNav] = useState('#home');

  const handleClick = () => setClick(!click)


  const changeBackground = () => {
    if(window.scrollY >= 80){
        setNavbar(true);
    }else{
        setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (

    <div className={navbar ? 'navbar active' : 'navbar'} >
      
     <div className={click ? 'left active' : 'left'}>
            
            <a href='https://www.linkedin.com/in/jpgrineau/' target="_blank"><BsLinkedin /></a>
        
        
            <a href='https://github.com/JGrineau?tab=repositories' target="_blank"><BsGithub /></a>
        
        
            <a href='https://www.instagram.com/' target="_blank"><BsInstagram /></a>
        </div>

        <div className='center'>
        
            <img  className='logo'
                src={logo} alt="Logo"
            />
        
        </div>
        <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{ color: 'black' }} />) : (<FaBars size={30} style={{ color: 'black' }} />)}

            </div>

        <div className={click ? 'nav active' : 'nav'}>
            <li> 
                {/* <a href='#home'>Home</a> */}
                <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}>Home</a>
            </li>
            <li> 
                {/* <a href='#about'>About</a> */}
                <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a>
            </li>
            <li> 
                {/* <a href='#projects'>Projects</a> */}
                <a href="#projects" onClick={()=> setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}>Projects</a>
            </li>
            <Button
                type="button"
                buttonStyle="btn--primary"
                buttonSize="btn--medium"
                >Contact</Button>
            
                <div className="hamburger__show">
                    
                        <a href='https://www.linkedin.com/in/jpgrineau/' target="_blank"><BsLinkedin /></a>
                    
                    
                        <a href='https://github.com/JGrineau?tab=repositories' target="_blank"><BsGithub /></a>
                    
                    
                        <a href='https://www.instagram.com/' target="_blank"><BsInstagram /></a>
                    
                </div>
        </div>
      </div>
      
      
      
  )
}

export default Navbar;