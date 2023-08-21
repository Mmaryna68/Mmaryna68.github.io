import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contacts = () => {
  return (
    <a href="mailto:maryov688@egmail.com" className="footer__contact">
      <FontAwesomeIcon icon={faEnvelope} />
      <span>Contact</span>
    </a>
  );
};
export default Contacts;
