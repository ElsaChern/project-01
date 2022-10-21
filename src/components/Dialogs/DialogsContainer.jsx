import React from "react";
import { connect } from "react-redux";
import { createMessageTextActionCreator, sendMessageAction } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";


// const DialogsContainer = () => {

//   return ( 
//     <StoreContext.Consumer> 
//       { (store) => {
//       let state = store.getState().messagePage
//       let sendMessage = () => {
//         store.dispatch(sendMessageAction())
//       }    
//       let onMessageChange = (text) => {
//         store.dispatch(createMessageTextActionCreator(text));
//       }
//         return <Dialogs sendMessageAction={sendMessage}
//         createMessageTextAction={onMessageChange} 
//         messagePage={state} />
//     }
//   }
//     </StoreContext.Consumer>  
//   )
// };

let mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage,
    newMessageText: state.messagePage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessageAction: () => {
      dispatch(sendMessageAction());
    },
    onMessageChange: (text) => {
      dispatch(createMessageTextActionCreator(text));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer;
