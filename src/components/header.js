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
    <Link to="/">/</Link>
    <Link to="/about/">Me</Link>
    <Link to="/projects/">Projects</Link>
  </header>
);

export default Header;
