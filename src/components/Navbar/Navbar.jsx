import React from 'react';
import './navbar.css'
import { useState } from 'react'
// import {BsLinkedin} from 'react-icons/bs'
// import {BsGithub} from 'react-icons/bs'
import logo from '../../assets/LOGO.png'



const Navbar = () => {
  // const [activeNav, setActiveNav] = useState('#');
  const [top, setTop] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 80){
      setTop(true);

    }else{
      setTop(false);
    }
  }

  window.addEventListener('scroll', changeBackground);


  const hamburger = document.querySelector(".hamburger");
  const topList = document.querySelector(".topList");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    topList.classList.toggle("active")
  })

  document.querySelectorAll(".topList").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    topList.classList.remove("active");
  }))

  return (
    <div className={top ? 'top active' : 'top'}>
    <div className="topLeft">
    <i className='topIcon fa-brands fa-linkedin'></i>
    <i className='topIcon fa-brands fa-square-github'></i>
    <i className='topIcon fa-brands fa-square-instagram'></i>
    </div>
    
    <div className="topCenter">
      <img className='topImg'
        src={logo} alt="Logo"
      />
    </div>
    <div className="topRight">
      <ul className="topList">
        <li className='topListItem'>Home</li>
        <li className='topListItem'>About</li>
        <li className='topListItem'>Projects</li>
        <li className='btn btn-primary'>
          <a href="mailto:jgrineau95@gmail.com">Email Me</a>
          </li>
      </ul>
    </div>

    <div className='hamburger'>
      <span className='bar'></span>
      <span className='bar'></span>
      <span className='bar'></span>
    </div>
      </div>
      
  )
};

export default Navbar;