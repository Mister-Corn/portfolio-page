import { Link } from "gatsby";
import React from "react";
import logo from "../images/noun_Unicorn_29749-S.png";
import headerStyles from "./header.module.css";

const Header = () => (
  <header className={headerStyles.header}>
    <img src={logo} alt="Mister-Corn!" />
    <Link to="/">Home</Link>
    <Link to="/about/">About</Link>
    <Link to="/projects/">Projects</Link>
  </header>
);

export default Header;
