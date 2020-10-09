import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogUser.module.css";

const DialogUser = (props) => {
  return (
    <div className={`${classes.dialogs__item}`}>
      <NavLink
        to={"/dialogs/" + props.id}
        activeClassName={`${classes.dialogs__active}`}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogUser;
