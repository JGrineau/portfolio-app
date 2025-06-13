import React, { useEffect } from "react";
import Pic from "../../assets/Coming Soon.jpg";
import Vigenere from "../../assets/vigenere.png";
import deserts from "../../assets/deserts.png"
import CalcPic from "../../assets/calculator.jpg";
import visualTimers from "../../assets/Visual Timers LOGO 1.png";
import Todo from "../../assets/todo.png";
import Form from "../../assets/Form.png";
import Button from "../button/Button";
import PokemonPic from  "../../assets/pokemon.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./projects.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const majorProjects = [
    {
      id: 1,
      title: "Visual Timers",
      img: visualTimers, 
      description: "A growing collection of fully coded, custom-made visual countdown timers. Built without templates or pixel art — all vanilla JS.",
      technologies: "Next.js | TypeScript | Tailwind CSS | React | Firebase",
      link: "https://visualtimers.net/", 
      github: "https://github.com/JGrineau/visual-timers",
    },
    {
      id: 2,
      title: "Pokemon API",
      img: PokemonPic,
      description: "Pokemon API",
      technologies: "ReactJS | CSS ",
      link: "https://pokemonjpg.netlify.app/",
      github: "https://github.com/JGrineau/pokemon-api",
    },
  ];

  const smallerProjects = [
    {
      id: 1,
      title: "Product list with cart",
      img: deserts,
      description: "Fully responsive desert list with a cart",
      technologies: "JS | HTML | CSS",
      YouTube: "https://www.youtube.com/@visual-timers",
      link: "https://product-list-cart-main.netlify.app/",
      github: "https://github.com/JGrineau/product-list-cart-main",
    },
    {
      id: 2,
      title: "TODO App",
      img: Todo,
      description: "Todo application for checklists",
      technologies: "ReactJS | CSS ",
      link: "https://todo-app-jp-grineau.netlify.app/",
      github: "https://github.com/JGrineau/todo-app",
    },
    {
      id: 3,
      title: "Vigenère Cipher",
      img: Vigenere,
      description:
        "Vigenère cipher app made to decrypt and encrypt messages with a key",
      technologies: "React | JS | CSS |",
      link: "https://vigenerecipherapp.netlify.app/",
      github: "https://github.com/JGrineau/vigenere-cipher",
    },
    {
      id: 4,
      title: "Form Validation",
      img: Form,
      description: "Sign up Form that validates users input",
      technologies: "React | JS | HTML | CSS",
      link: "https://signupformvalidation.netlify.app/",
      github: "https://github.com/JGrineau/Form-Validation",
    },
    {
      id: 5,
      title: "Calculator App",
      img: CalcPic,
      description: "Calculator app that mimics the Apple calculator",
      technologies: "JavaScript | CSS | HTML",
      link: "https://calculatorappjg.netlify.app/",
      github: "https://github.com/JGrineau/Calculator-App",
    },
    {
      id: 6,
      title: "Social Media App",
      img: Pic,
      description: "Social Media App with user friendly interface",
      technologies: "ReactJS | CSS",
      link: "https://social-media-app-jp.netlify.app/",
      github: "https://github.com/JGrineau/social-media-app",
    },
    {
      id: 7,
      title: "E-commerce Site",
      img: Pic,
      description: "Real-world E-commerce website",
      technologies: "JavaScript | Scss | Python",
      link: "https://comingsoonjpg.netlify.app/",
      github: "https://github.com/JGrineau/coming-soon",
    },
  ];

  const ProjectCard = ({ project }) => (
    <article className="portfolio__item" key={project.id} data-aos="fade-left">
      <div className="portfolio__item-image">
        <img src={project.img} alt={project.title} />
      </div>
      <div className="portfolio__item-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p>{project.technologies}</p>
      </div>
      <div className="portfolio__item-cta">
        <a href={project.github} target="_blank" rel="noreferrer">
          <Button
            type="button"
            buttonStyle="btn--primary"
            buttonSize="btn--medium"
          >
            GITHUB
          </Button>
        </a>
        <a href={project.link} target="_blank" rel="noreferrer">
          <Button
            type="button"
            buttonStyle="btn--secondary"
            buttonSize="btn--medium"
          >
            WEBSITE
          </Button>
        </a>
      </div>
    </article>
  );

  return (
    <div id="projects" className="portfolio">
      <h2>Projects</h2>

      <div className="width__container">
            {/* major projects */}
        <div className="project-section">
          <h3 className="project-category">Major Projects</h3>
          <div className="portfolio__container">
            {majorProjects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </div>
        {/* smaller projects */}
        <div className="project-section">
          <h3 className="project-category">Smaller Projects</h3>
          <div className="portfolio__container">
            {smallerProjects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;