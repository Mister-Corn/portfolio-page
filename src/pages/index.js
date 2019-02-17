import React from "react";
// Components
import Layout from "../components/layout";
// import SEO from "../components/seo";
import Image from "../components/image";
// Styles
import indexStyles from "./index.module.css";
// Assets
import selfie from "../images/col-img.jpg";
import splash from "../images/splash-img.jpg";

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
    <div className={indexStyles.main}>
      <div className={indexStyles.namebox}>
        <h1>Ronald Libago</h1>
        <p>
          Full Stack
          <br />
          Web Developer
        </p>
      </div>
      <img className={indexStyles.selfie} src={selfie} alt="Ronald Libago" />
      <Image
        className={indexStyles.splash}
        src={splash}
        alt="Dockweiller Beach"
      />
    </div>
  </Layout>
);

export default IndexPage;
