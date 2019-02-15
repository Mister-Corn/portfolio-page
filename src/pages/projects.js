import React from "react";
// Components
import LayOut from "../components/layout";
import ProjectCard from "../components/projectCard";
// Assets
import lodgel from "../images/lodgel.jpg";
import pairMe from "../images/pairme.png";

const projectsList = [
  {
    image: lodgel,
    title: "Lodgel",
    description: ""
  },
  {
    image: pairMe,
    title: "PairMe",
    description: ""
  }
];

const Projects = () => {
  return (
    <LayOut>
      <div className="projectsList">
        {projectsList.map(props => (
          <ProjectCard {...props} />
        ))}
      </div>
    </LayOut>
  );
};

export default Projects;
