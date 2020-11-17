import React from "react";
import ContentPhoto from "./ContentPhoto/ContentPhoto";
import InfoUser from "./InfoUser/InfoUser";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <ContentPhoto />
      <InfoUser />
      <MyPosts postsData={props.profilePage.postsData}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}/>
    </div>
  );
};

export default Profile;
