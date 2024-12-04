import React, { useEffect } from "react";
import Pic from "../../assets/Coming Soon.jpg";
import Vigenere from "../../assets/vigenere.png";
import deserts from "../../assets/deserts.png"
import CalcPic from "../../assets/calculator.jpg";
import Todo from "../../assets/todo.png";
import Form from "../../assets/Form.png";
import Button from "../button/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import "./projects.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const soloProjects = [
    {
      id: 1,
      title: "Vigenère Cipher",
      img: Vigenere,
      description:
        "Vigenère cipher app made to decrypt and encrypt messages with a key",
      technologies: "React | JS | CSS |",
      link: "https://vigenerecipherapp.netlify.app/",
      github: "https://github.com/JGrineau/vigenere-cipher",
    },
    {
      id: 2,
      title: "Form Validation",
      img: Form,
      description: "Sign up Form that validates users input",
      technologies: "React | JS | HTML | CSS",
      link: "https://signupformvalidation.netlify.app/",
      github: "https://github.com/JGrineau/Form-Validation",
    },
    {
      id: 3,
      title: "Product list with cart",
      img: deserts,
      description: "Fully responsive desert list with a cart",
      technologies: "JS | HTML | CSS",
      link: "https://product-list-cart-main.netlify.app/",
      github: "https://github.com/JGrineau/product-list-cart-main",
    },
    {
      id: 4,
      title: "Calculator App",
      img: CalcPic,
      description: "Calculator app that mimics the Apple calculator",
      technologies: "JavaScript | CSS | HTML",
      link: "https://calculatorappjg.netlify.app/",
      github: "https://github.com/JGrineau/Calculator-App",
    },
    {
      id: 5,
      title: "TODO App",
      img: Todo,
      description: "Todo application for checklists",
      technologies: "ReactJS | CSS ",
      link: "https://todo-app-jp-grineau.netlify.app/",
      github: "https://github.com/JGrineau/todo-app",
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

  return (
    <div id="projects" className="portfolio">
      <h2>Projects</h2>

      <div className="width__container">
        <div className="portfolio__container">
          {soloProjects.map((pro) => (
            <article
              className="portfolio__item"
              key={pro.id}
              data-aos="fade-left"
            >
              <div className="portfolio__item-image">
                <img src={pro.img} alt={pro.title} />
              </div>
              <div className="portfolio__item-content">
                <h3>{pro.title}</h3>
                <p>{pro.description}</p>
                <p>{pro.technologies}</p>
              </div>
              <div className="portfolio__item-cta">
                <a href={pro.github} target="_blank" rel="noreferrer">
                  <Button
                    type="button"
                    buttonStyle="btn--primary"
                    buttonSize="btn--medium"
                  >
                    GITHUB
                  </Button>
                </a>

                <a href={pro.link} target="_blank" rel="noreferrer">
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
