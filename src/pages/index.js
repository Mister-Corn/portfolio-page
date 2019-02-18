import React from "react";
// Components
import Layout from "../components/layout";
// Pages
import About from "./about";
import Projects from "./projects";
import SEO from "../components/seo";
import Image from "../components/image";
// Styles
import indexStyles from "./index.module.css";
// Assets
import selfie from "../images/col-img.jpg";
import splash from "../images/splash-img.jpg";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Ronald Libago"
      keywords={[
        `full-stack`,
        `application`,
        `react`,
        `developer`,
        `lambda school`,
        `javascript`
      ]}
    />
    <About />
    <Projects />
  </Layout>
);

export default IndexPage;
