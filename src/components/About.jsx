//About.jsx
import React from "react";
import avatarImage from "../images/avatar_about.png";

const About = () => {
  return (
    <section id="about">
      <h2>About me</h2>
      <div>
        <img src={avatarImage} alt="Avatar" />
        <p>
          Hi! I am Maryna, and I am Frontend developer, I passionate about
          coding and developing digital things. In my free time I enjoy
          painting, creating short video, blogging and yoga.
        </p>
      </div>
    </section>
  );
};

export default About;
