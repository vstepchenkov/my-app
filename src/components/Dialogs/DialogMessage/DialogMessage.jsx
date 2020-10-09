import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogMessage.module.css";

const DialogMessage = (props) => {
  return <div className={classes.dialogs__message}>{props.message}</div>;
};

export default DialogMessage;
