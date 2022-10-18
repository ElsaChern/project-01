// import dialogsReducer from "./dialogs-reducer";
// import profileReducer from "./profile-reducer";

// let store = {
//   _state: {
//     profilePage: {
//       postsData: [
//         { id: "1", message: "The weather is sunny today!", likes: "23" },
//         { id: "2", message: "How are you?", likes: "12" },
//         { id: "3", message: "OK", likes: "7" },
//       ],

//       newPostText: "",
//     },

//     messagePage: {
//       messageData: [
//         { id: "1", message: "Hi" },
//         { id: "2", message: "Hello" },
//         { id: "3", message: "How are you?" },
//         { id: "4", message: "OK" },
//       ],

//       newMessageText: "",

//       dialogsData: [
//         { id: "1", name: "Max" },
//         { id: "2", name: "Маша" },
//         { id: "3", name: "Misha" },
//         { id: "4", name: "Ira" },
//       ],
//     },
//   },
//   _callSubscriber() {
//     console.log("G");
//   },

//   getState() {
//     return this._state;
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },

//   dispatch(action) {

//     this._state.profilePage = profileReducer(this._state.profilePage, action)
//     this._state.messagePage = dialogsReducer(this._state.messagePage, action)
    
//     this._callSubscriber(this._state);
//   },  
// };




// export default store;
