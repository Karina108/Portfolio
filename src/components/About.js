import React from 'react';
import logo from "../assets/About/Karina_img.jpg";
import style from "../styles/About.module.css";

const About = () => {
  return (
    <section id="about" className={style.about}>
      <h2>About Me</h2>
      <div className={style.box}>
        <div className={style.content}>
          <img className={style.imgSrc} src={logo} alt="no" />
        </div>
      </div>
      <p className={style.aboutpara}>
        I’m a B.Tech graduate in Computer Science with practical experience in web development. I enjoy solving problems and creating user-friendly applications.
      </p>
    </section>
  );
};

export default About;