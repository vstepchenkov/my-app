import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElement = props.postsData.map((post) => (
    <Post message={post.message} like={post.likeCount} />
  ));

  return (
    <div>
      <div>My Posts</div>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      {postsElement}
    </div>
  );
};

export default MyPosts;
