//About.jsx
import React from "react";
import avatarImage from "../../images/avatar_about.png";
import bottomImage from "../../images/about.png";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.aboutContainer}>
      <div className={styles.avatarContainer}>
        <img className={styles.avatar} src={avatarImage} alt="Avatar" />
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>MARYNA OVCHARENKO</h2>
          <p className={styles.subtitle}>Frontend Developer</p>
        </div>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          Hi! I am Maryna, and I am a Frontend developer. I am passionate about
          coding and developing digital things. In my free time, I enjoy
          painting, creating short videos, blogging, and practicing yoga.
        </p>
        <img className={styles.bottomImage} src={bottomImage} alt="Bottom" />
      </div>
    </section>
  );
};

export default About;
