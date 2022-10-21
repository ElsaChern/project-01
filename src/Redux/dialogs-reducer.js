let initialState = {
    messageData: [
        { id: "1", message: "Hi" },
        { id: "2", message: "Hello" },
        { id: "3", message: "How are you?" },
        { id: "4", message: "OK" },
      ],

      newMessageText: "Hey",

      dialogsData: [
        { id: "1", name: "Max" },
        { id: "2", name: "Маша" },
        { id: "3", name: "Misha" },
        { id: "4", name: "Ira" },
      ]
}

const dialogsReducer = (state = initialState, action) => {
 
    switch(action.type) {
        case "SEND-MESSAGE":
          let newMessageText = state.newMessageText;

          return {
            ...state,
            newMessageText: '',
            messageData: [...state.messageData, {id: "5",message: newMessageText,}]
          };
 
        case "CREATE-MESSAGE-TEXT":
            return  {
            ...state,
            newMessageText: action.newMessage
          };
  
        default:
            return state;
    }
}

export const sendMessageAction = () => {
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