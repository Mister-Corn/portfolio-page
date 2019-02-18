import React, { Component, useState } from "react";
import PropTypes from "prop-types";
// Styles
import imageStyles from "./image.module.css";

const Image = props => {
  const { className, src, alt } = props;
  const [visible, setVisible] = useState(false);
  const handleImageLoaded = () => {
    console.log("handleImageLoaded fired");
    setVisible(prev => !prev);
  };
  console.log("img visible state:", visible);
  return (
    // TODO: Fix state not being updated
    // <div className={className}>
    <img
      className={`${imageStyles.image} ${
        !visible ? imageStyles.invisible : ""
      } ${className || ""}`}
      src={src}
      alt={alt}
      onLoad={handleImageLoaded}
    />
    // </div>
  );
};

export default Image;
