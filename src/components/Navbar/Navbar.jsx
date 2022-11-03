import React from 'react';
import './navbar.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import logo from '../../assets/logo_red.png'
import { useState } from 'react';




const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

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
        
            <img className='logo'
                src={logo} alt="Logo"
            />
        
        </div>
        <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{ color: 'black' }} />) : (<FaBars size={30} style={{ color: 'black' }} />)}

            </div>

        <div className={click ? 'nav active' : 'nav'}>
            <li> 
                <a href='https://www.youtube.com/watch?v=FUKpWgRyPlU'>Home</a>
            </li>
            <li> 
                <a href='https://www.youtube.com/watch?v=FUKpWgRyPlU'>About Me</a>
            </li>
            <li> 
                <a href='https://www.youtube.com/watch?v=FUKpWgRyPlU'>Projects</a>
            </li>
            <button className='btn-primary'>Contact</button>
            
        </div>
      </div>
      
      
      
  )
}

export default Navbar;