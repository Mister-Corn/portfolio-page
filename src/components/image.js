import React, { Component, useState } from "react";
import PropTypes from "prop-types";
// Components
import { Transition, Visibility, Loader } from "semantic-ui-react";
import splash from "../images/splash-img.jpg";
// Styles
import imageStyles from "./image.module.css";

const Image = props => {
  const { className, src, alt } = props;
  const [visible, setVisible] = useState(false);
  const handleImageLoaded = () => setVisible(true);

  return (
    <img
      className={`${imageStyles.image} ${
        visible ? imageStyles.visible : ""
      } ${className}`}
      src={splash}
      alt={alt}
      onLoad={handleImageLoaded}
    />
  );
};

export default Image;
