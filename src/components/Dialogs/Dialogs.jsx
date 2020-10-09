import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const DialogItem = (props) => {
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
const DialogMessage = (props) => {
  return <div className={classes.dialogs__message}>{props.message}</div>;
};

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
  <DialogItem name={dialog.name} id={dialog.id} />
));

let messageElement = messageData.map((message) => (
  <DialogMessage message={message.message} id={message.id} />
));

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>{dialogsElement}</div>
      <div className={classes.dialogs__messages}>{messageElement}</div>
    </div>
  );
};

export default Dialogs;
