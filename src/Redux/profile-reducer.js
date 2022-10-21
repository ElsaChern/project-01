let initialState = {
    postsData: [
        { id: "1", message: "The weather is sunny today!", likes: "23" },
        { id: "2", message: "How are you?", likes: "12" },
        { id: "3", message: "OK", likes: "7" },
      ],
      newPostText: "",
    }


const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case "ADD-POST": {
            let newPost = {
                id: "5",
                message: state.newPostText,
                likes: "0",
              };
              return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
              };  
        }
        case "UPDATE-NEW-POST-TEXT": { 
            return {
              ...state,
              newPostText: action.newText
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
      type: "ADD-POST"
    }
  }
  
  export const updateNewPostActionCreator = (text) => {
    return {
      type: "UPDATE-NEW-POST-TEXT", newText: text
    }
  }

export default profileReducer;