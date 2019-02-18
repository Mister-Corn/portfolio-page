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
      keywords={[`full-stack`, `application`, `react`, `developer`]}
    />
    {/* <div className={indexStyles.main}>
      <div className={indexStyles.namebox}>
        <h1>Ronald Libago</h1>
        <p>
          Full Stack
          <br />
          Web Developer
        </p>
      </div>
      <Image className={indexStyles.selfie} src={selfie} alt="Ronald Libago" />
      <Image
        className={indexStyles.splash}
        src={splash}
        alt="Dockweiller Beach"
      />
    </div> */}
    <About />
    <Projects />
  </Layout>
);

export default IndexPage;
