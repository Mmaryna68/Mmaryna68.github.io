// Header.jsx
import logo from "../../images/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#projects">Work Projects</a>
          </li>
          <li>
            <a href="#pet-projects">Pet Projects</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>
      <div className={styles.languageSwitch}>
        <a href="/">
          <span>EN</span>
        </a>
        <span>|</span>
        <a href="/ru">
          <span>RU</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
