import React from 'react'

import './header.css'
import background from '../../assets/dots.mp4'
import CTA from './CTA'



const Header = () => {
  return (
      <div id='home' className="main">
        
        <video src={background} autoPlay loop muted />
        
        <div className="hero">
          <h1>JP Grineau</h1>
          <h5>Software Developer</h5>
          <CTA />
        </div>
        
    
      </div>
  )
}

export default Header