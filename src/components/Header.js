import React, { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import style from "../styles/Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 100; // Add offset for accuracy

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const id = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setActiveSection(`#${id}`);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={style.header}>
      <h1 className={style.logo}>
        <span>K</span>arina.
      </h1>
      <nav className={`${style.navbar} ${isMenuOpen ? style.active : ""}`}>
        <a
          href="#home"
          className={activeSection === "#home" ? style.active : ""}
        >
          Home
        </a>
        <a
          href="#about"
          className={activeSection === "#about" ? style.active : ""}
        >
          About
        </a>
        <a
          href="#projects"
          className={activeSection === "#projects" ? style.active : ""}
        >
          Projects
        </a>
        <a
          href="#skills"
          className={activeSection === "#skills" ? style.active : ""}
        >
          Skills
        </a>
        <a
          href="#experience"
          className={activeSection === "#experience" ? style.active : ""}
        >
          Experience
        </a>
        <a
          href="#education"
          className={activeSection === "#education" ? style.active : ""}
        >
          Education
        </a>
        <a
          href="#contact"
          className={activeSection === "#contact" ? style.active : ""}
        >
          Contact
        </a>
        <IoMdClose
          className={`${style.menuIcon} ${style.closeIcon}`}
          onClick={handleMenuToggle}
        />
      </nav>
      <IoMdMenu className={style.menuIcon} onClick={handleMenuToggle} />
    </header>
  );
};

export default Header;