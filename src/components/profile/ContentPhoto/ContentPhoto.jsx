import React from "react";
import classes from "./ContentPhoto.module.css";

const ContentPhoto = () => {
  return (
    <div>
      <img
        className={classes.contentPhoto}
        src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
        alt="img"
      />
    </div>
  );
};

export default ContentPhoto;
