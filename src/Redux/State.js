let renderEntireTree = () => {
    console.log("G")
}

let state = {
    profilePage: {

        postsData: [
            {id:"1", message:"The weather is sunny today!", likes:"23"},
            {id:"2", message:"How are you?", likes:"12"},
            {id:"3", message:"OK", likes:"7"}
          ],

        newPostText: "Hello"
    },


    messagePage: {
        messageData: [
            {id:"1", message:"Hi"},
            {id:"2", message:"Hello"},
            {id:"3", message:"How are you?"},
            {id:"4", message:"OK"}
        ],

        newMessageText: "Как дела?",

        dialogsData: [
            {id:"1", name:"Max"},
            {id:"2", name:"Маша"},
            {id:"3", name:"Misha"},
            {id:"4", name:"Ira"},
        ],
    }      
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: "5",
        message: state.profilePage.newPostText,
        likes: "0"
    }
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText=""
    renderEntireTree (state)
}

export const updateNewPostText = (newText) => {    
    state.profilePage.newPostText = newText;
    renderEntireTree (state)
}

export const sendMessage = () => {
    let newMessage = {
        id: "5",
        message: state.messagePage.newMessageText
    }
    state.messagePage.messageData.push(newMessage);
    state.messagePage.newMessageText=""
    renderEntireTree (state)
}

export const createMessageText = (newMessage) => {    
    state.messagePage.newMessageText = newMessage;
    renderEntireTree (state)
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;