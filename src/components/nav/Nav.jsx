import React from 'react'
import './nav.css'
// import {AiOutlineHome} from 'react-icons/ai'
// import {AiOutlineUser} from 'react-icons/ai'
// import {BsBook} from 'react-icons/bs'
// import {BiMessageDetail} from 'react-icons/bi'
import { useState } from 'react'
// import LOGO from '../../assets/LOGO.png';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <div className='nav'>
    {/* <div className='nav-center'>

      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><BsBook /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail /></a>

    </div>
      
       */}
      </div>
  )
}

export default Nav