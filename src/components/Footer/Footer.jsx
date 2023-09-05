import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTelegram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Contacts from "../Contacts/Contacts";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <span className={styles.footer__text}>© Maryna Ovcharenko</span>
      </div>
      <div>
        <nav className={styles.footer__social}>
          <a
            href="#linkedin-link"
            target="_blank"
            className={styles.footer__socialItem}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="#telegram-link"
            target="_blank"
            className={styles.footer__socialItem}
          >
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a
            href="#github-link"
            target="_blank"
            className={styles.footer__socialItem}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </nav>
      </div>
      <div>
        <Contacts />
      </div>
    </footer>
  );
};

export default Footer;
