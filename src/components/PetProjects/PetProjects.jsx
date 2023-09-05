import React from "react";
import Project from "../Project/Project";
import dashboardImage from "../../images/dashboard.png";
import modalwindowImage from "../../images/modalwindow.png";
import deliveryImage from "../../images/delivery.png";
import styles from "./PetProjects.module.css";

const PetProjects = () => {
  const projects = [
    {
      imgSrc: dashboardImage,
      title: "Task Management Dashboard",
      stack:
        "HTML5, CSS3, Webpack, Nodejs, Moment, Lodash, Сhart.js, Git, GitHub",
      description:
        "This project is an interactive dashboard for managing tasks. It visualizes task data through charts and provides a user-friendly interface for viewing and managing tasks. ",
      sourceCodeLink: "https://github.com/Mmaryna68/dashboard_npm.git",
      previewLink: "https://mmaryna68.github.io/dashboard_npm/",
    },
    {
      imgSrc: modalwindowImage,
      title: "Modal windows",
      stack: "HTML5, CSS3, JavaScript, Git, GitHub",
      description:
        "This project is a simple web page that demonstrates the usage of modal windows with a form submission feature. Modal windows are a common UI element used to display additional information, collect user input, or present messages without navigating away from the current page. This project aims to showcase the implementation of modal windows for various purposes, such as collecting user information or displaying additional content.",
      sourceCodeLink: "https://github.com/Mmaryna68/modal_pet",
      previewLink: "#preview2",
    },
    {
      imgSrc: deliveryImage,
      title: "Must-Be-Coffee",
      stack: "JavaScript, HTML5, CSS3, Git, GitHub",
      description:
        "This project was inspired by the growing demand for online food ordering systems, especially during the COVID-19 pandemic. The aim was to create a solution that benefits both customers and restaurant owners by streamlining the ordering and delivery process.",
      sourceCodeLink: "https://github.com/Mmaryna68/Must-Be-Coffe_pet",
      previewLink: "#preview3",
    },
  ];
  return (
    <section id="pet-projects" className={styles.petProjects}>
      <h2 className={styles.petProjectsTitle}>PET projects</h2>
      {projects.map((project, index) => (
        <Project
          key={index}
          imgSrc={project.imgSrc}
          title={project.title}
          stack={project.stack}
          description={project.description}
          sourceCodeLink={project.sourceCodeLink}
          previewLink={project.previewLink}
        />
      ))}
    </section>
  );
};

export default PetProjects;
