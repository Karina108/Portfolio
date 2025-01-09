import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // current year dynamically

  return (
    <footer className={styles.footer}>
      <p>
        &copy; {currentYear} Karina. All rights reserved. 
        <span> Made with ❤️ in React.</span>
      </p>
    </footer>
  );
};

export default Footer;
