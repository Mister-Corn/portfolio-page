import React, { Component } from "react";
import PropTypes from "prop-types";
// Components
import Image from "./image";
// Styles
import cardStyles from "./projectCard.module.css";

const ProjectCard = ({ image, title, link, code, stack, description }) => {
  const { projectCard, textBox, stackList } = cardStyles;

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
    <div className={projectCard}>
      <Image src={image} alt={`${title} Preview`} />
      <div className={textBox}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={stackList}>
        <ul>
          {stack.map(item => (
            <li>{item}</li>
          ))}
        </ul>
        {/* {createLists(stack).map(ele => ele)} */}
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
