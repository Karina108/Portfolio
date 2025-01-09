import React from 'react';
import style from '../styles/Skills.module.css';
import skill1 from '../assets/Skills/Clang.png';
import skill2 from '../assets/Skills/Cpp.png';
import skill3 from '../assets/Skills/python.png';
import skill4 from '../assets/Skills/js.png';
import skill5 from '../assets/Skills/html.png';
import skill6 from '../assets/Skills/css.png';
import skill7 from '../assets/Skills/react.png';
import skill8 from '../assets/Skills/MySQL.png';
import skill9 from '../assets/Skills/gitHub.png';
import skill10 from '../assets/Skills/vsd.png';

const SkillItem = ({ src, alt, name }) => (
  <div className={style.skillItem}>
    <img src={src} alt={alt} />
    <p>{name}</p>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className={style.skills}>
      <h2>Skills</h2>
      <p className={style.description}>
        I love to learn new things and experiment with new technologies. These are some of the major
        languages, technologies, tools, and platforms I have worked with:
      </p>

      <div className={style.category}>
        <h3>Web Development Technologies</h3>
        <div className={style.progList}>
          <SkillItem src={skill5} alt="HTML" name="HTML" />
          <SkillItem src={skill6} alt="CSS" name="CSS" />
          <SkillItem src={skill4} alt="JavaScript" name="JavaScript" />
          <SkillItem src={skill7} alt="React" name="React" />
        </div>
      </div>

      <div className={style.category}>
        <h3>Programming Languages</h3>
        <div className={style.progList}>
          <SkillItem src={skill1} alt="C Language" name="C" />
          <SkillItem src={skill2} alt="C++ Language" name="C++" />
          <SkillItem src={skill3} alt="Python" name="Python" />
        </div>
      </div>

      <div className={style.category}>
        <h3>Tools & Databases</h3>
        <div className={style.progList}>
          <SkillItem src={skill9} alt="GitHub" name="GitHub" />
          <SkillItem src={skill10} alt="VS Code" name="Visual Studio Code" />
          <SkillItem src={skill8} alt="MySQL" name="MySQL" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
