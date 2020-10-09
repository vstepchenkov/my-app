import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";
import DialogUser from "./DialogUser/DialogUser";
import DialogMessage from "./DialogMessage/DialogMessage";

let dialogsData = [
  { id: 1, name: "Sasha" },
  { id: 2, name: "Vita" },
  { id: 3, name: "Oleg" },
  { id: 4, name: "Sveta" },
  { id: 5, name: "Petro" },
  { id: 6, name: "Sasha" },
  { id: 7, name: "Max" },
];

let messageData = [
  { id: 1, message: "Hi. It's me." },
  { id: 2, message: "Where are you." },
  { id: 3, message: "Call me plz." },
  { id: 4, message: "Sorry." },
];

let dialogsElement = dialogsData.map((dialog) => (
  <DialogUser name={dialog.name} id={dialog.id} />
));

let messageElement = messageData.map((message) => (
  <DialogMessage message={message.message} id={message.id} />
));

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>{dialogsElement}</div>
      <div className={`${classes.dialogs__messages}`}>{messageElement}</div>
    </div>
  );
};

export default Dialogs;
