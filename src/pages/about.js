import React from "react";
// Components
import LayOut from "../components/layout";
// Styles
import aboutStyles from "./about.module.css";
// Assets
import selfieImg from "../images/col-img.jpg";
const About = () => {
  const { about, main, namebox, resume, selfie } = aboutStyles;
  return (
    <LayOut>
      <div className={main}>
        <div className={namebox}>
          <h1>Ronald Libago</h1>
          <p>
            Full Stack
            <br />
            Web Developer
          </p>
        </div>
        <img className={selfie} src={selfieImg} alt="Ronald Libago" />
        <div className={about}>
          <h1>Who am I?</h1>
          <p>
            I am a full-stack developer wishing to deepen personal understanding
            and find success through collaboration. I am passionate about
            learning and excellence. Endeavors to promote cohesiveness and
            teamwork. I am able to subdivide big tasks into smaller manageable
            actions and to develop models to tackle troubleshooting.
          </p>
        </div>
        <div className={resume}>
          <h1>Résumé</h1>
          <i className="far fa-file-pdf file-icon" />
        </div>
      </div>
    </LayOut>
  );
};

export default About;
