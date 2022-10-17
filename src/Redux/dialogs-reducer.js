const dialogsReducer = (state, action) => {

    switch(action.type) {
        case "SEND-MESSAGE":
            let newMessage = {
                id: "5",
                message: state.newMessageText,
              };
              state.newMessageText = "";
              state.messageData.push(newMessage);
              return state;
        case "CREATE-MESSAGE-TEXT":
            state .newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => {
    return {
      type: "SEND-MESSAGE"
    }  
  }
  
  export const createMessageTextActionCreator = (text) => {
    return {
      type: "CREATE-MESSAGE-TEXT", newMessage: text 
    }  
  }

export default dialogsReducer;