import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styleDial from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let newMessageElement = React.createRef();
  let state = props.messagePage;

  let sendMessage = () => {
    props.sendMessageAction()
  }

  let updateMessageText = () => {
    let text = newMessageElement.current.value;
    props.onMessageChange(text);
  }
    
    let penFriendElement = state.dialogsData.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
    let messagesElements = state.messageData.map( message => <Message message={message.message} key={message.id} />)

    return (
    <div className={styleDial.dialogs}>
      <div className={styleDial.dialogsItems}>
        { penFriendElement }
      </div>
      <div className={styleDial.messages}>
        { messagesElements }
        <div>
        <textarea rows={4} cols={80} placeholder="Enter you message" ref={newMessageElement} onChange={updateMessageText} value={props.newMessageText}></textarea>
      </div>
      <button onClick={sendMessage}>Send </button>
      </div>
    </div>
  );
};

export default Dialogs;
