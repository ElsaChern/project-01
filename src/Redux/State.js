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
  getState() {
    return this._state;
  },
  renderEntireTree() {
    console.log("G");
  },
  addPost() {
    let newPost = {
      id: "5",
      message: this._state.profilePage.newPostText,
      likes: "0",
    };
    this._state.profilePage.postsData.push(newPost);
    this._state .profilePage.newPostText = "";
    this._renderEntireTree(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._renderEntireTree(this._state);
  },
  sendMessage() {
    let newMessage = {
      id: "5",
      message: this._state.messagePage.newMessageText,
    };
    this._state.messagePage.messageData.push(newMessage);
    this._state.messagePage.newMessageText = "";
    this._renderEntireTree(this._state);
  },
  createMessageText(newMessage) {
    this._state.messagePage.newMessageText = newMessage;
    this._renderEntireTree(this._state);
  },
  subscribe(observer) {
    this._renderEntireTree = observer;
  },
};

window.store = store;

export default store;

 