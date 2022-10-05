import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styleDial from "./Dialogs.module.css";
import Message from "./Message/Message";


const Dialogs = (props) => {
    
    let dialogsData = [
        {id:"1", name:"Max"},
        {id:"2", name:"Masha"},
        {id:"3", name:"Misha"},
        {id:"4", name:"Ira"}
    ]

    let messageData = [
        {id:"1", message:"Hi"},
        {id:"2", message:"Hello"},
        {id:"3", message:"How are you?"},
        {id:"4", message:"OK"}
    ]
    
    let dialogElement = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = messageData.map( message => <Message message={message.message} />)

    return (
    <div className={styleDial.dialogs}>
      <div className={styleDial.dialogsItems}>
        { dialogElement }
      </div>
      <div className={styleDial.messages}>
        { messagesElements }
      </div>
    </div>
  );
};

export default Dialogs;
