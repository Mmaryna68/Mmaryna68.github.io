import React from "react";

const Project = ({
  imgSrc,
  title,
  description,
  stack,
  sourceCodeLink,
  previewLink,
}) => {
  return (
    <div className="project">
      <a href={imgSrc} data-fslightbox>
        <img src={imgSrc} alt={title} />
      </a>
      <div className="project-details">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <p className="project-stack">
          <span>Stack:</span> {stack}
        </p>
        <div className="project-links">
          <a href={sourceCodeLink}>Source Code</a>
          <span>|</span>
          <a href={previewLink}>Preview</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
