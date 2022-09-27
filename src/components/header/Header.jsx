import React from 'react'
import './header.css'
import CTA from './CTA'


const Header = () => {
  return (
    <section>
      <div className="hero">
        <h5>Hello I'm</h5>
        <h1>JP Grineau</h1>
        <h5 className="title">Software Developer</h5>
        <CTA />
        
        <a href="#contact" className="scroll__down">Scroll Down</a>
        
      </div>
    </section>
  )
}

export default Header