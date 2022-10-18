import React from "react";
import { createMessageTextActionCreator, sendMessageAction } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

  let state = props.store.getState().messagePage

  let sendMessage = () => {
    props.store.dispatch(sendMessageAction())
  }

  let onMessageChange = (text) => {
    props.store.dispatch(createMessageTextActionCreator(text));
  }

    return <Dialogs sendMessageAction={sendMessage}
                    createMessageTextAction={onMessageChange} 
                    messagePage={state} />
};

export default DialogsContainer;
