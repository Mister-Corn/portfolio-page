import React, { Component } from "react";
import PropTypes from "prop-types";
// Styles
import cardStyles from "./projectCard.module.css";

const ProjectCard = ({ image, title, description }) => {
  const { projectCard } = cardStyles;
  return (
    <div className={projectCard}>
      <img src={image} alt={`${title} Preview`} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

ProjectCard.defaultProps = {
  image: "",
  title: "Test",
  description: "Test"
};

export default ProjectCard;
