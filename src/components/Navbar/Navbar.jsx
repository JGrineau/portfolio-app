import React from 'react';
import './navbar.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import logo from '../../assets/logo_red.png'
import { useState } from 'react';




const Navbar = () => {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if(window.scrollY >= 110){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground)


  return (
    <div className={navbar ? 'navbar active' : 'navbar'} >
     <div className='left'>
            
            <a href='https://www.linkedin.com/in/jpgrineau/' target="_blank"><BsLinkedin /></a>
        
        
            <a href='https://github.com/JGrineau?tab=repositories' target="_blank"><BsGithub /></a>
        
        
            <a href='https://www.instagram.com/' target="_blank"><BsInstagram /></a>
        </div>

        <div className='center'>
        
            <img className='logo'
                src={logo} alt="Logo"
            />
        
        </div>

        <nav>
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
        </nav>
      </div>
      
      
      
  )
}

export default Navbar;