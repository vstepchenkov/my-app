import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        src="https://assets.teenvogue.com/photos/5d7bfe81abe11a0009d60c2a/16:9/w_2560%2Cc_limit/ava-lede.jpg"
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
