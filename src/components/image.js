import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// Styles
import imageStyles from "./image.module.css";

const Image = props => {
  const { className, src, alt } = props;
  const [visible, setVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  const handleImageLoaded = () => setVisible(true);
  useEffect(() => {
    /* Reference: https://bugs.chromium.org/p/chromium/issues/detail?id=7731

    Issue: Initial loads of the page display normal behavior of images. 
    However, subsequent refreshes would lead to intermittent loading/not
    loading of images.

    Apparent cause: If an image is already loaded, onLoad will not fire.
    Therefore, if the image is already loaded upon refresh, the image will 
    remain invisible.

    Resolution: Institute a setTimeout that will delay adding the src to the 
    img tag. Thus, when the component mounts, src will be `null`, then shortly
    after, it will be the actual image. This will force a reload.
    */
    setTimeout(() => setImgSrc(src), 0);
  }, [src]);

  return (
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

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string
};

Image.defaultProps = {
  className: "",
  src: "",
  alt: "No image"
};
export default Image;
