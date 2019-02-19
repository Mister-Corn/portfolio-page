import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
// Styles
import imageStyles from "./image.module.css";

const Image = props => {
  const { className, src, alt } = props;
  const [visible, setVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  const handleImageLoaded = () => {
    console.log("handleImageLoaded fired");
    setVisible(true);
  };
  console.log("img visible state:", visible);

  useEffect(() => {
    setTimeout(() => setImgSrc(src), 0);
  }, [src]);

  console.log("imgSrc:", imgSrc);
  return (
    // TODO: Fix state not being updated
    <img
      className={`${imageStyles.image} ${
        visible ? imageStyles.visible : imageStyles.invisible
      } ${className || ""}`}
      src={imgSrc}
      alt={alt}
      onLoad={handleImageLoaded}
    />
  );
};

export default Image;
