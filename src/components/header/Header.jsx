import React from 'react'
import './header.css'
import background from '../../assets/slow-dots.mp4'
import CTA from './CTA'
// import Background from '../background/Background'



const Header = () => {
  return (
      <div id='home' className="main">
        
        <video className="video" src={background} playsinline autoPlay loop muted />
        {/* <Background /> */}
        
        
        <div className="hero">
          <h1>JP Grineau</h1>
          <h5>Software Developer</h5>
          <CTA />
        </div>
        
    
      </div>
  )
}

export default Header