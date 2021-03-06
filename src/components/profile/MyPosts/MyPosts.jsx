import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profleReducer";

const MyPosts = (props) => {
  let postsElement = props.postsData.map((post) => (
    <Post message={post.message} like={post.likeCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    //props.addPost();
    props.dispatch(addPostActionCreator())
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    //props.updateNewPostText(text);
    props.dispatch(updateNewPostTextActionCreator(text))
  }

  return (
    <div>
      <div>My Posts</div>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        <div className={classes.but}><button onClick={ addPost }>Add post</button></div>
      </div>
      {postsElement}
    </div>
  );
};

export default MyPosts;
