import React from "react";
// Components
import Layout from "../components/layout";
// Pages
import About from "./about";
import Projects from "./projects";
import SEO from "../components/seo";

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
