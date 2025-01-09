import React from 'react';
import style from '../styles/Home.module.css';

const Home = () => {
  return (
    <section id="home" className={style.home}>
      <h1>Hi, I'm <span className={style.name}>Karina</span></h1>
      <h2 data-text="Frontend Developer" className={style.frontdev}>Frontend Developer</h2>
      <p>I'm a passionate Frontend Developer skilled in React.js, HTML, CSS, and JavaScript.</p>
    </section>

  );
};

export default Home;
