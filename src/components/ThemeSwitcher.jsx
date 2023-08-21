import React, { useState, useEffect } from "react";
import "../style/App.css";
import lightStyles from "../style/LightTheme.module.css";
import darkStyles from "../style/DarkTheme.module.css";

const ThemeSwitcher = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDarkTheme(savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    localStorage.setItem("theme", isDarkTheme ? "light" : "dark");
  };

  const themeStyles = isDarkTheme ? darkStyles : lightStyles;

  return (
    <div className={`theme-switcher ${themeStyles.body}`}>
      <button onClick={toggleTheme}>
        {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
