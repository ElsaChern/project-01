import React from "react";
import { createMessageTextActionCreator, sendMessageActionCreator } from "../../Redux/dialogs-reducer";
import DialogItem from "./DialogItem/DialogItem";
import styleDial from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let newMessageElement = React.createRef();

  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator())
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(createMessageTextActionCreator(text));
  }
    
    let penFriendElement = props.state.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = props.state.messageData.map( message => <Message message={message.message} />)

    return (
    <div className={styleDial.dialogs}>
      <div className={styleDial.dialogsItems}>
        { penFriendElement }
      </div>
      <div className={styleDial.messages}>
        { messagesElements }
        <div>
        <textarea rows={4} cols={80} placeholder="Enter you message" ref={newMessageElement} onChange={onMessageChange} value={props.state.newMessageText}></textarea>
      </div>
      <button onClick={sendMessage}>Send </button>
      </div>
    </div>
  );
};

export default Dialogs;
