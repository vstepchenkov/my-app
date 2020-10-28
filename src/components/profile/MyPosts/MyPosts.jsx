import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElement = props.postsData.map((post) => (
    <Post message={post.message} like={post.likeCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  return (
    <div>
      <div>My Posts</div>
      <div>
        <textarea ref={newPostElement}></textarea>
        <div className={classes.but}><button onClick={ addPost }>Add post</button></div>
      </div>
      {postsElement}
    </div>
  );
};

export default MyPosts;
