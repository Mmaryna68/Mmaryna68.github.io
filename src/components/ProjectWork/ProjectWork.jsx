import React from "react";
import Project from "../Project/Project";
import studyImage from "../../images/study_english.png";
import recipesImage from "../../images/healthy_recipes.png";
import savedImage from "../../images/saved.png";
import consultingImage from "../../images/consulting.png";
import styles from "./ProjectWork.module.css";

const ProjectsSection = () => {
  const projects = [
    {
      imgSrc: studyImage,
      title: "Language learning app LINGOLOOM",
      stack: "React.js, React Router, HTML5, CSS3, Node.js, GitHub, Git",
      description:
        "Аpplication designed to help users learn and practice new words in a foreign language. My goal was to create a user-friendly application that makes language learning fun and accessible.",
      sourceCodeLink: "https://github.com/Mmaryna68/StudyLanguages",
      previewLink: "#preview1",
    },
    {
      imgSrc: recipesImage,
      title: "SmartDietTrack",
      stack: "HTML5, SCSS, SASS, JavaScript, API, GitHub",
      description:
        "Application for getting information about key nutrients in foods, calculating daily calorie intake, and finding healthy, balanced recipes.",
      sourceCodeLink: "https://github.com/Mmaryna68/SmartDietTrack",
      previewLink: "https://3girls-team.github.io/SmartDietTrack/",
    },
    {
      imgSrc: savedImage,
      title: "Bookmarks Saved",
      stack: "Bootstrap 5, Grid, Flex, HTML5, CSS3, GitHub, Git",
      description:
        "Implemented the website design according to the layout requirements. Made the site responsive for both desktop and mobile versions. Included user interaction elements. Design of the site are user-friendly and interactive.",
      sourceCodeLink: "https://github.com/Mmaryna68/Group_Project",
      previewLink: "https://mmaryna68.github.io/Group_Project/",
    },
    {
      imgSrc: consultingImage,
      title: "Business consulting services ",
      stack: "HTML5, CSS3, SCSS, SASS, Bootstrap 5, GitHub, Git",
      description:
        "Developed a single-page portfolio website for a consulting business, offering services such as business plans, financial models, and business processes. The client provided desired color schemes and a rough layout structure, according to which the team developed the layout and subsequently implemented the website layout in line with the design from the layout.",
      sourceCodeLink: "https://github.com/Mmaryna68/Project",
      previewLink: "https://oksana2211.github.io/Project/",
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.projectsTitle}>PROJECT WORK</h2>
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

export default ProjectsSection;
