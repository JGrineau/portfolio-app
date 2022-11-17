import React from 'react'
import './about.css'
import logo from '../../assets/logo_red.png'
import {BsFillPlayFill} from 'react-icons/bs'
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';




const About = () => {
  return (
    <div className='page'>
    <div id='about' className='aboutContainer'>
      
      <div className='text__zone'>
        <h1>About Me</h1>
      
      <p> I'm a very ambitious front-end web developer looing for a role in establiushed IT company with the opportunity to work with the latesttechnologies on challenging and diverse projects.</p>
      <p> I'm a very ambitious front-end web developer looing for a role in establiushed IT company with the opportunity to work with the latesttechnologies on challenging and diverse projects.</p>
      <p> Be fearless in the pursuit of what sets your sole on fire ~ Unknown</p>

      <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year of web development</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>2 Completed Projects</small>
              <br/>
              <small>4 ongoing Projects</small>
            </article>
          </div>

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
      </div>
    
  )
}

export default About