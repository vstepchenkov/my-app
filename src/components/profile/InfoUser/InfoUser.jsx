import React from "react";
import classes from "./InfoUser.module.css";

const InfoUser = () => {
  return (
    <div className={classes.aboutUser}>
      <div>
        <img
          className={classes.avatarPhoto}
          src="https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg"
          alt="ava"
        />
      </div>
      <div className={classes.dataUser}>
        <div>Name Surname</div>
        <div>Age: 22</div>
        <div>Gender: male</div>
        <div>Country: England</div>
        <div>City: Liverpool</div>
      </div>
    </div>
  );
};

export default InfoUser;
