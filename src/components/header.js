import React from "react";
// Components
import { Link } from "gatsby";
// Assets
import logo from "../images/icon.svg";
// Styles
import headerStyles from "./header.module.css";
// Icons
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";

const Header = () => (
  <header className={headerStyles.header}>
    <img src={logo} alt="Mister-Corn!" />
    <div className={headerStyles.inner}>
      <div className={headerStyles.linkGroup}>
        <Link to="/">/me</Link>
        <a href="#projects">/projects</a>
      </div>
      <div className={headerStyles.social}>
        <a href="https://www.github.com/mister-corn" target="_blank">
          <FaGithubAlt />
        </a>
        <a href="https://www.linkedin.com/in/ronald-libago" target="_blank">
          <FaLinkedin />
        </a>
        <span>Ronald Libago</span>
      </div>
    </div>
  </header>
);

export default Header;
