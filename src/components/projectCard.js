import React, { Component } from "react";
import PropTypes from "prop-types";
// Styles
import cardStyles from "./projectCard.module.css";

const ProjectCard = ({ image, title, link, code, stack, description }) => {
  const { projectCard, textBox } = cardStyles;
  return (
    <div className={projectCard}>
      <img src={image} alt={`${title} Preview`} />
      <div className={textBox}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={stack}>
        <ul>
          {stack.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  code: PropTypes.string,
  stack: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string
};

ProjectCard.defaultProps = {
  image: "",
  title: "Test",
  link: "",
  code: "",
  stack: [],
  description: "Test"
};

export default ProjectCard;
