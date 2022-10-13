let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: "1", message: "The weather is sunny today!", likes: "23" },
        { id: "2", message: "How are you?", likes: "12" },
        { id: "3", message: "OK", likes: "7" },
      ],

      newPostText: "Hello",
    },

    messagePage: {
      messageData: [
        { id: "1", message: "Hi" },
        { id: "2", message: "Hello" },
        { id: "3", message: "How are you?" },
        { id: "4", message: "OK" },
      ],

      newMessageText: "Как дела?",

      dialogsData: [
        { id: "1", name: "Max" },
        { id: "2", name: "Маша" },
        { id: "3", name: "Misha" },
        { id: "4", name: "Ira" },
      ],
    },
  },
  _callSubscriber() {
    console.log("G");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: "5",
        message: this._state.profilePage.newPostText,
        likes: "0",
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "SEND-MESSAGE") {
      let newMessage = {
        id: "5",
        message: this._state.messagePage.newMessageText,
      };
      this._state.messagePage.messageData.push(newMessage);
      this._state.messagePage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "CREATE-MESSAGE-TEXT") {
      this._state.messagePage.newMessageText = action.newMessage;
      this._callSubscriber(this._state);
    }
  },
};
export default store;
