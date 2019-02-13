import { Link } from "gatsby";
import React from "react";
import logo from "../images/noun_Unicorn_29749-S.png";

const Header = () => (
  <header>
    <img src={logo} alt="Mister-Corn!" />
    <Link to="/">Home</Link>
    <Link to="/">About</Link>
    <Link to="/">Projects</Link>
  </header>
);

export default Header;
