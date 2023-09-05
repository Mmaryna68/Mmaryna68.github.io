// Project.jsx
import styles from "./Project.module.css";

const Project = ({
  imgSrc,
  title,
  stack,
  description,
  sourceCodeLink,
  previewLink,
}) => {
  return (
    <div className={styles.project}>
      <a href={imgSrc} data-fslightbox>
        <img src={imgSrc} alt={title} className={styles.projectImage} />
      </a>
      <div className={styles.projectDetails}>
        <h2 className={styles.projectTitle}>{title}</h2>
        <p className={styles.projectDescription}>{description}</p>
        <p className={styles.projectStack}>
          <span>Stack:</span> {stack}
        </p>
        <div className={styles.projectLinks}>
          <a href={sourceCodeLink}>Source Code</a>
          <span>|</span>
          <a href={previewLink}>Preview</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
