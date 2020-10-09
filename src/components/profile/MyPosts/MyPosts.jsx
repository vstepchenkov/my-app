import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

let postsData = [
  { id: 1, message: "Hi. It's me.", likeCount: 15 },
  { id: 2, message: "Where are you.", likeCount: 20 },
  { id: 3, message: "Call me plz.", likeCount: 7 },
  { id: 4, message: "Sorry.", likeCount: 1 },
];

let postsElement = postsData.map((post) => (
  <Post message={post.message} like={post.likeCount} />
));

const MyPosts = () => {
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
