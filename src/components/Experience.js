import React from "react";
import style from "../styles/Experience.module.css";
import { INTERNSHIP } from "../constant"; 

const experience = {
  role: "Software Engineer Intern (Frontend Developer)",
  company: "Sensation Software Solution Pvt Ltd, Mohali",
  duration: "January 2024 - June 2024",
  description: `
    During my tenure at Sensation Software Solution Pvt Ltd, I honed my frontend development skills by working on both the admin panel and user-side designs of a Digital Menu Web App. 
    I utilized React.js, HTML, CSS, and JavaScript to deliver visually appealing and functional interfaces. 
    My responsibilities included translating concepts from figma designes, handwritten sketches and mental blueprints into production-ready code, collaborating with a team to meet stringent deadlines, and adapting to frequent design revisions. 
    This experience enhanced my ability to troubleshoot, optimize performance, and innovate in a dynamic work environment.
  `,
  certificate: INTERNSHIP, 
};

const Experience = () => {
  return (
    <section id="experience" className={style.experience}>
      <h2>Experience</h2>
      <div className={style.card}>
        <div className={style.cardContent}>
          <h3>{experience.role}</h3>
          <h4>{experience.company}</h4>
          <p className={style.duration}>{experience.duration}</p>
          <p>{experience.description}</p>
          <a
            href={experience.certificate}
            target="_blank"
            rel="noopener noreferrer"
            className={style.viewCertificate}
          >
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
