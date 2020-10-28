import React from "react";
import classes from "./DialogMessage.module.css";



const DialogMessage = (props) => {
  return (
    <div>
      <div className={classes.dialogs__message}>{props.message}</div>
    </div>  
  );
};

export default DialogMessage;
