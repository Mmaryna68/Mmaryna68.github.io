import React from "react";
import Project from "./Project";
//import project1Image from "../images/project1.png";
//import project2Image from "../images/project2.png";
//import project3Image from "../images/project3.png";

const PetProjects = () => {
  const projects = [
    {
      //imgSrc: project1Image,
      title: "Project 1",
      description: "Description of Project 1",
      stack: "React.js, HTML5, CSS3",
      sourceCodeLink: "#source1",
      previewLink: "#preview1",
    },
    {
      //imgSrc: project2Image,
      title: "Project 2",
      description: "Description of Project 2",
      stack: "HTML5, CSS3, JavaScript",
      sourceCodeLink: "#source2",
      previewLink: "#preview2",
    },
    {
      //imgSrc: project3Image,
      title: "Project 3",
      description: "Description of Project 3",
      stack: "React.js, HTML5, CSS3",
      sourceCodeLink: "#source3",
      previewLink: "#preview3",
    },
  ];
  return (
    <section id="pet-projects">
      <h2>PET projects</h2>
      <p>Если вас интересут мои проекты, вы можете найти их здесь: </p>
      {projects.map((project, index) => (
        <Project
          key={index}
          imgSrc={project.imgSrc}
          title={project.title}
          description={project.description}
          stack={project.stack}
          sourceCodeLink={project.sourceCodeLink}
          previewLink={project.previewLink}
        />
      ))}
    </section>
  );
};

export default PetProjects;
