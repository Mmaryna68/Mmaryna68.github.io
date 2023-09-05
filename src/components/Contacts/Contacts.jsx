import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className="contact">
      <a href="mailto:maryov688@egmail.com" className={styles.socialItem}>
        <FontAwesomeIcon icon={faEnvelope} />
        <span>Contact</span>
      </a>
    </div>
  );
};
export default Contacts;
