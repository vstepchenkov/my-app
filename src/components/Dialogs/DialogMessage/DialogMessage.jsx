import React from "react";
import classes from "./DialogMessage.module.css";

const DialogMessage = (props) => {
  return <div className={classes.dialogs__message}>{props.message}</div>;
};

export default DialogMessage;
