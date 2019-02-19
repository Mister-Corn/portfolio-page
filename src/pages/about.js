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
    <div className={main}>
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
          <li>Passionate about learning and excellence.</li>
          <li>Endeavors to promote cohesiveness and teamwork.</li>
          <li>
            Able to subdivide big tasks into smaller manageable actions and to
            develop models to tackle troubleshooting.
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
