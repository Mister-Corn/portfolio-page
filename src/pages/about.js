import React from "react";
// Components
import Image from "../components/image";
// Styles
import aboutStyles from "./about.module.css";
// Assets
import selfieImg from "../images/avatar.jpg";
import resumePdf from "../images/resume.pdf";
// Icons
import { FaFileAlt } from "react-icons/fa";

const About = () => {
  const { about, iconDiv, main, namebox, resume, selfie } = aboutStyles;
  return (
    <div id="about" className={main}>
      <Image
        className={`${selfie} bordered`}
        src={selfieImg}
        alt="Ronald Libago"
      />
      <div className={`${namebox} bordered`}>
        <h1>Ronald Libago</h1>
        <p>Full Stack Web Developer</p>
        <p>JavaScript Adventurer</p>
        <p>Karaoke Fiend</p>
      </div>
      <div className={`${about} bordered`}>
        <h1>Who am I?</h1>
        <p>
          I am a full-stack developer wishing to deepen personal understanding
          and find success through collaboration.
        </p>
        <ul>
          <li>
            I am passionate about learning and enjoy discovering new things.
          </li>
          <li>
            I am enthusiastic and endeavor to bring positivity and
            light-heartedness to help people collaborate and come together.
          </li>
          <li>
            I am skilled in JavaScript and in a variety of JavaScript tooling,
            such as React, Redux, and Express. My exposure to Python and C
            grants me a framework to learn and incorporate new technologies
            effectively.
          </li>
        </ul>
      </div>
      <div className={`${resume} bordered`}>
        <h1>Résumé</h1>
        <div className={iconDiv}>
          <a href={resumePdf} target="_blank" rel="noopener noreferrer">
            <FaFileAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
