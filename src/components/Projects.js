import React, { useState, useRef } from "react";
import style from "../styles/Projects.module.css";
import img1 from "../assets/Projects/SikshalayProject.png";
import img2 from "../assets/Projects/TemperatureConverterProject.png";
import img3 from "../assets/Projects/portfolioProject.png";
import { IoLogoGithub } from "react-icons/io";
import { SikshalayProjectLink,TemperatureProjectLink,portfolioProjectLink } from "../constant";

const projectData = [
  {
    img: img1,
    title: "Sikshalay",
    description: "It enables seamless interaction between students, teachers, and parents.",
    link: SikshalayProjectLink,
  },
  {
    img: img2,
    title: "Temperature Converter",
    description: "This web application converts the temperature unit.",
    link: TemperatureProjectLink,
  },
  {
    img: img3,
    title: "Portfolio",
    description: "A personal portfolio showcasing my projects and skills, hosted for free.",
    link: portfolioProjectLink, 
  },
 
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projectRef = useRef(null);

  const handleToggle = () => {
    setShowAll((prevState) => !prevState);
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const visibleProjects = showAll ? projectData : projectData.slice(0, 3);

  return (
    <section id="projects" className={style.projects} ref={projectRef}>
      <h2>My Projects</h2>
      <div className={style.container}>
        <div className={style.workList}>
          {visibleProjects.map((project, index) => (
            <div key={index} className={style.work}>
              <img src={project.img} alt="Project" />
              <div className={style.layer}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <IoLogoGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
        {projectData.length > 3 && (
          <button
            className={style.btn}
            onClick={handleToggle}
          >
            {showAll ? "Show Less" : "See More"}
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;