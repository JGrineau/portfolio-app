import React from 'react'
import './about.css'
import logo from '../../assets/logo_red.png'
import {BsFillPlayFill} from 'react-icons/bs'




const About = () => {
  return (
    <div className='aboutContainer'>
      
      <div className='text-zone'>
        <h1>About Me</h1>
      
      <p> I'm a very ambitious front-end web developer looing for a role in establiushed IT company with the opportunity to work with the latesttechnologies on challenging and diverse projects.</p>
      <p> I'm a very ambitious front-end web developer looing for a role in establiushed IT company with the opportunity to work with the latesttechnologies on challenging and diverse projects.</p>
      <p> Be fearless in the pursuit of what sets your sole on fire ~ Unknown</p>

      <div className='tech'>
        <p>Here are a few technologies I have recently been working with:</p>
              <ul>
                <li><BsFillPlayFill /> JavaScript</li>
                <li><BsFillPlayFill /> JavaScript</li>
                <li><BsFillPlayFill /> JavaScript</li>
                <li><BsFillPlayFill /> JavaScript</li>
                <li><BsFillPlayFill /> JavaScript</li>
                <li><BsFillPlayFill /> JavaScript</li>
              </ul>
            </div>
      </div>

      

      <section className='imageSection'>
      <img className='logo__about'
                src={logo} alt="Logo" 
            />
            </section>

             
            
            
            
      </div>
  
    
  )
}

export default About