import React from "react";
import classes from "./Dialogs.module.css";
import DialogUser from "./DialogUser/DialogUser";
import DialogMessage from "./DialogMessage/DialogMessage";

const Dialogs = (props) => {
  let dialogsElement = props.dialogsData.map((dialog) => (
    <DialogUser name={dialog.name} id={dialog.id} />
  ));

  let messageElement = props.messageData.map((message) => (
    <DialogMessage message={message.message} id={message.id} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>{dialogsElement}</div>
      <div className={`${classes.dialogs__messages}`}>{messageElement}</div>
    </div>
  );
};

export default Dialogs;
