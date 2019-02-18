import React from "react";
// Components
import { Link } from "gatsby";
// Assets
import logo from "../images/icon.svg";
// Styles
import headerStyles from "./header.module.css";

const Header = () => (
  <header className={headerStyles.header}>
    <img src={logo} alt="Mister-Corn!" />
    <div classname={headerStyles.linkGroup}>
      <Link to="/">/</Link>
      <Link to="/about/">Me</Link>
      <Link to="/projects/">Projects</Link>
    </div>
    <span>Ronald Libago</span>
  </header>
);

export default Header;
