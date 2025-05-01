import React, {useEffect} from 'react'
import './about.css'
import Logo from '../logo/Logo';
import {BsFillPlayFill} from 'react-icons/bs'
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import TypingEffect from '../typingEffect/TypingEffect';
import AOS from 'aos';
import 'aos/dist/aos.css';




const About = () => {
  useEffect(()=>{
    AOS.init({duration: 1000});
  }, []);
  return (

    <div className='page'>
    <div id='about' className='aboutContainer'>
      
      <div className='text__zone' data-aos="fade-right">
        <h1>About Me</h1>
      
      <p> I'm a very ambitious software developer looking for a role in established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.</p>
      <br></br>
      <p> I am passionate about using my skills to create visually appealing and functional websites that meet the needs of both users and clients. I am constantly learning and staying up to date with the latest development trends and technologies to ensure that my work is of the highest quality.</p>
      <br></br>
      <p> Be fearless in the pursuit of what sets your sole on fire ~ Unknown</p>

      <div className="about__cards" data-aos="fade-left">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3 years of software development</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>Many Completed Projects</small>
              <br/>
              <small>2 big ongoing Projects</small>
            </article>
          </div>

           <div className='tech' data-aos="fade-right">
              <p>Here are a few technologies I have recently been working with:</p>
                <ul>
                  <li><BsFillPlayFill />    JavaScript</li>
                  <li><BsFillPlayFill />    HTML</li>
                  <li><BsFillPlayFill />    CSS</li>
                  <li><BsFillPlayFill />    React</li>
                  <li><BsFillPlayFill />    Java</li>
                  <li><BsFillPlayFill />    PHP</li>
                  <li><BsFillPlayFill />    Node.js</li>
                  <li><BsFillPlayFill />    SQL</li>
               </ul>

               <section className='imageSection' data-aos="fade-left">
            <Logo 
              type="img"
              logoSize="logo--large">
            </Logo>
      </section>
      
            </div>
          
            
      </div>
      
      

      {/* <section className='imageSection' data-aos="fade-left">
            <Logo 
              type="img"
              logoSize="logo--large">
            </Logo>
      </section> */}

             
            
            
            
      </div >
    <TypingEffect />
      
      </div>
    
  )
}

export default About