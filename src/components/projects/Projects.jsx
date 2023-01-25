import React from 'react';
import Pic from '../../assets/Coming Soon.jpg'
import SignUp from '../../assets/Sign up.jpg'
import Button from '../button/Button';


import './projects.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Form Validation',
      img: SignUp,
      description:
        'Sign up Form that validates users input',
      technologies: 'React | JS | HTML/CSS',
      link: 'https://signupformvalidation.netlify.app/',
      github: 'https://github.com/JGrineau/Form-Validation',
    },
    {
      id: 2,
      title: 'FakeStore',
      img: Pic,
      description:
        'FakeStore app that provides information about available products and their details',
      technologies: 'React | Redux',
      link: 'https://github.com/JGrineau',
      github: 'https://github.com/JGrineau',
    },
    {
      id: 3,
      title: 'To-Do-App',
      img: Pic,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'JavaScript | Webpack',
      link: 'https://github.com/JGrineau',
      github: 'https://github.com/JGrineau',
    },
    {
      id: 4,
      title: 'Shelter',
      img: Pic,
      description:
        'Fully responsive interactive website built based on Figma design',
      technologies: 'JavaScript | CSS',
      link: 'https://github.com/JGrineau',
      github: 'https://github.com/JGrineau',
    },
    {
      id: 5,
      title: 'World News',
      img: Pic,
      description:
        'Fully responsive interactive website built based on Adobe XD design',
      technologies: 'JavaScript | CSS',
      link: 'https://github.com/JGrineau',
      github: 'https://github.com/JGrineau',
    },
    {
      id: 6,
      title: 'Math Resource',
      img: Pic,
      description:
        'Real-world group project which is still in progress and will provide educational platform for future young developers',
      technologies: 'JavaScript | Scss | Python',
      link: 'https://github.com/JGrineau',
      github: 'https://github.com/JGrineau',
    },
  ];

  return (
    <div id='projects' className='portfolio'>
      <h2>Projects</h2>

      <div className="width__container">
      <div className="portfolio__container">
        
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              {/* <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a> */}
              <a href={pro.github}
                target="_blank" rel="noreferrer">
                <Button
                type="button"
                buttonStyle="btn--primary"
                buttonSize="btn--medium"
                >GITHUB</Button>
              </a>
              {/* <a
                href={pro.link}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Visit Website
              </a> */}
              <a href={pro.github}
                target="_blank" rel="noreferrer">
                <Button
                type="button"
                buttonStyle="btn--secondary"
                buttonSize="btn--medium"
                >WEBSITE</Button>
              </a>
            </div>
          </article>
        ))}
        </div>
        </div>
      
    </div>
  );
};

export default Portfolio;
