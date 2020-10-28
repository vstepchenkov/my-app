import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        src="https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg"
        alt="ava"
      />
      <span>{props.message}</span>
      <div>
        <span>{props.like}</span> Like
      </div>
    </div>
  );
};

export default Post;
