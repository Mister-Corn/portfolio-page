import React from "react";
// Components
import LayOut from "../components/layout";
import Image from "../components/image";
// Styles
import aboutStyles from "./about.module.css";
// Assets
import selfieImg from "../images/col-img.jpg";
import resumePdf from "../images/resume.pdf";
// Icons
import { FaFileAlt } from "react-icons/fa";

const About = () => {
  const { about, iconDiv, main, namebox, resume, selfie } = aboutStyles;
  return (
    <div className={main}>
      <div className={namebox}>
        <h1>Ronald Libago</h1>
        <br />
        <br />
        <p>Full Stack Web Developer</p>
        <p>JavaScript Adventurer</p>
        <p>Karaoke Fiend</p>
      </div>
      <Image className={selfie} src={selfieImg} alt="Ronald Libago" />
      <div className={about}>
        <h1>Who am I?</h1>
        <p>
          I am a full-stack developer wishing to deepen personal understanding
          and find success through collaboration. I am passionate about learning
          and excellence. Endeavors to promote cohesiveness and teamwork. I am
          able to subdivide big tasks into smaller manageable actions and to
          develop models to tackle troubleshooting.
        </p>
      </div>
      <div className={resume}>
        <h1>Résumé</h1>
        <div className={iconDiv}>
          <a href={resumePdf} target="_blank">
            <FaFileAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
