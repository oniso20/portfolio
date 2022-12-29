import React, { useState } from "react";
import { Link } from "react-router-dom";

// images and icons
import blackLogo from "../../assets/images/Blacktext-logo@4x.png";
import whiteLogo from "../../assets/images/Whitetext-logo@4x.png";

// component
import DarkModeToggle from "../DarkModeToggle";

// styles
import "./NavBar.css";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Define a function that will toggle the value of "darkMode" between true and false
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Add or remove the "dark-mode" class from the body element based on the value of "darkMode"
  document.body.classList.toggle("dark-mode", darkMode);

  return (
    <nav className="nav-bar">
      <div className="left-nav">
        <Link to="/">
          <div className="logo-circle">
            <img src={blackLogo} alt="Onis Logo" />
          </div>
        </Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="right-nav">
        <DarkModeToggle toggle={toggleDarkMode} />
        <div></div>
      </div>
    </nav>
  );
};

export default NavBar;
