import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
// Components
import Header from "./header";
// Styles
import layoutStyles from "./layout.module.css";
import "./global.css";

const Layout = ({ children }) => (
  <div className={layoutStyles.layout}>
    <Header />
    <div className={layoutStyles.content}>{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
