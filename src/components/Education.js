import React from "react";
import styles from "../styles/Education.module.css";
import ctiemt from "../assets/Education/ctiemt.png";
import meritorious from "../assets/Education/meritorious.png";
import GSSSH from "../assets/Education/GSSSH.png";
import { RiExternalLinkLine } from "react-icons/ri";
import { TENTH_MARKSHEET, TWELTH_MARKSHEET, GRADUATION_MARKSHEET } from "../constant";

const educationData = [
  {
    degree: "B.Tech in Computer Science",
    institution: "CT Institute of Engineering, Management & Technology, Jalandhar",
    duration: "2020 - 2024",
    score: "87.66%",
    description:
      "Graduated with a CGPA of 8.76 out of 10. Active in web development competitions and secured the first position in various events.",
    marksheet: GRADUATION_MARKSHEET,
    logo: ctiemt,
    alignment: "left",
  },
  {
    degree: "Senior Secondary Education",
    institution: "Senior Secondary Residential School for Meritorious Students, Jalandhar",
    duration: "2018 - 2020",
    score: "93.77%",
    description:
      "Achieved 93.77% with a focus on Mathematics and Computer Science.",
    marksheet: TWELTH_MARKSHEET,
    logo: meritorious,
    alignment: "right",
  },
  {
    degree: "High School Education",
    institution: "Govt Senior Secondary School, Heran, Punjab",
    duration: "2016 - 2018",
    score: "83.57%",
    description:
      "Scored 83.57% board with strong performance in core science subjects.",
    marksheet: TENTH_MARKSHEET,
    logo: GSSSH,
    alignment: "left",
  },
];

const Education = () => {
  return (
    <section id="education" className={styles.education}>
      <h2>Education</h2>
      <div className={styles.timeline}>
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`${styles.container} ${
              edu.alignment === "left" ? styles.leftContainer : styles.rightContainer
            }`}
          >
            <img src={edu.logo} alt={`${edu.degree} logo`} />
            <div className={styles.textBox}>
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <div className={styles.marksYear}>
                <a href={edu.marksheet} className={styles.marks} target="_blank" rel="noopener noreferrer">
                Marksheet <RiExternalLinkLine />
                </a>
                <small>{edu.duration}</small>
              </div>
              <p>{edu.description}</p>
              <span
                className={
                  edu.alignment === "left"
                    ? styles.leftContainerArrow
                    : styles.rightContainerArrow
                }
              ></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
