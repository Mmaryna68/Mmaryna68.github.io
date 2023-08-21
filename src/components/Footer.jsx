import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";
import Contacts from "./Contacts";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <span>© Maryna Ovcharenko</span>
      </div>
      <div>
        <nav className="footer__social">
          <a
            href="#linkedin-link"
            target="_blank"
            className="footer__social-item"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="#telegram-link"
            target="_blank"
            className="footer__social-item"
          >
            <FontAwesomeIcon icon={faTelegram} />
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
