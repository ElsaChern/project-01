import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

// const MyPostsContainer = () => {

//   return ( 
//     <StoreContext.Consumer> 
//       { (store) => {
//       let state = store.getState();
//       let addPost = () => {
//         store.dispatch(addPostActionCreator())
//       }    
//       let onPostChange = (text) => {
//         let action = updateNewPostActionCreator(text)
//         store.dispatch(action);
//       }
//         return <MyPosts addPost={addPost} 
//             updateNewPostActionCreator={onPostChange} 
//             postsData={state.profilePage.postsData} 
//               newPostText={state.profilePage.newPostText} />
//     }
//   }
//     </StoreContext.Consumer>  
//   )
// };


const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      updateNewPostText: (text) => {
          let action = updateNewPostActionCreator(text);
          dispatch(action);
      },
      addPost: () => {
          dispatch(addPostActionCreator());
      }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;


