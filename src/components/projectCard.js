import React, { Component } from "react";
import PropTypes from "prop-types";
// Components
import Image from "./image";
// Styles
import cardStyles from "./projectCard.module.css";
// Icons
import { FaDesktop, FaGithubSquare } from "react-icons/fa";
const ProjectCard = ({ id, image, title, link, code, stack, description }) => {
  const { linkGroup, projectCard, textBox, stackList } = cardStyles;

  // TODO: Make the below work
  // const createLists = stack => {
  //   const elements = [];
  //   for (const [i, item] of stack.entries()) {
  //     const unorderedList = [];
  //     if (i % 3 === 0 && i !== 0) {
  //       elements.push(<ul>{unorderedList.map(li => li)}</ul>);
  //     }
  //     unorderedList.push(<li>{item}</li>);
  //   }
  //   console.log(elements);
  //   return elements;
  // };

  return (
    <div key={id} className={projectCard}>
      <Image src={image} alt={`${title} Preview`} />
      <div className={textBox}>
        <h1>
          {title}
          <span className={linkGroup}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <FaDesktop />
            </a>
            <a href={code} target="_blank" rel="noopener noreferrer">
              <FaGithubSquare />
            </a>
          </span>
        </h1>
        <p>{description}</p>
      </div>
      <div className={stackList}>
        <ul>
          {stack.map((item, i) => (
            <li key={`${title}-${i}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  code: PropTypes.string,
  stack: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string
};

ProjectCard.defaultProps = {
  id: 0,
  image: "",
  title: "Test",
  link: "",
  code: "",
  stack: [],
  description: "Test"
};

export default ProjectCard;
