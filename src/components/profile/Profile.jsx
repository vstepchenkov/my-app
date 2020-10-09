import React from "react";
import ContentPhoto from "./ContentPhoto/ContentPhoto";
import InfoUser from "./InfoUser/InfoUser";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <ContentPhoto />
      <InfoUser />
      <MyPosts />
    </div>
  );
};

export default Profile;
