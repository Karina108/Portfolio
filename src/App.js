import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from "./components/Education"

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Experience/>
      <Education/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;