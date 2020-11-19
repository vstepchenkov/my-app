import React from "react";
import classes from "./Dialogs.module.css";
import DialogUser from "./DialogUser/DialogUser";
import DialogMessage from "./DialogMessage/DialogMessage";
import { updateNewMessageText } from "../../redux/dialogsReducer";

const Dialogs = (props) => {
  let dialogsElement = props.state.dialogsData.map((dialog) => (
    <DialogUser name={dialog.name} id={dialog.id} />
  ));

  let messageElement = props.state.messageData.map((message) => (
    <DialogMessage message={message.message} id={message.id} />
  ));

  let newPostElement = React.createRef();

  let onChangeMessageText = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewMessageText(text))
  }

  let sendMessage = () => {
    //let text = newPostElement.current.value;
    //props.sendMessage(text);
    //newPostElement.current.value = '';
    props.dispatch({ type: "SEND-MESSAGE" })

  };

  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogs__items}>{dialogsElement}</div>
        <div className={`${classes.dialogs__messages}`}>
          <div>{messageElement}</div>
          <div className={classes.text}>
            <textarea ref={newPostElement} className={classes.text__area}
              value={props.newMessageText} onChange={onChangeMessageText}></textarea>
            <div><button onClick={ sendMessage }>Send message</button></div>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Dialogs;
