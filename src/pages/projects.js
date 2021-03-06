import React from "react";
// Components
import ProjectCard from "../components/projectCard";
// Assets
import lodgel from "../images/lodgel.jpg";
import pairMe from "../images/pairme.jpg";
// Styles
import projectStyles from "./project.module.css";

const projectsList = [
  {
    image: lodgel,
    title: "Lodgel",
    link: "https://cleanerpos.netlify.com/",
    code: "https://github.com/Lambda-School-Labs/labs9-cleaner-pos",
    stack: [
      "React",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Jest",
      "Firebase",
      "Stripe API"
    ],
    description:
      "Lodgel is a short-term rental property app. It allows you to assign and manage turnover assistants, set-up and monitor checklists, and accept and receive payments from guests straight into your own Stripe account!"
  },
  {
    image: pairMe,
    title: "PairMe",
    link: "https://pairme.netlify.com/",
    code:
      "https://github.com/NandoTheessen/Pair-Me-LS-Winter-Hakathon-Submission",
    stack: ["React", "Redux", "Express", "PostgreSQL", "Jest", "Slack API"],
    description:
      "PairMe is a web app and Slack bot designed to connect students with teachers, teaching assistants, and other students able to help. Students can request help on a specified topic, while helpers can post their availability and topics they can help with. Both student and helper get a Slack notification if a match is found!"
  }
];

const Projects = () => {
  const { main } = projectStyles;

  return (
    <div id="projects" className={main}>
      {projectsList.map((props, i) => (
        <ProjectCard key={i} id={i} {...props} />
      ))}
    </div>
  );
};

export default Projects;
