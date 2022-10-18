import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../Redux/profile-reducer";
import styleProf from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let newPostElement = React.createRef();
  let postsElements = props.postsData.map ( post => <Post message={post.message} likes={post.likes} /> )

  let addPost = () => {
    props.addPost()
  } 

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostActionCreator(text);
  }  

  return (
    <div className={styleProf.posts}>
      My posts
      <div>
        <textarea rows={3} cols={50}  placeholder="Enter text here" ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
      </div>
      <button onClick={addPost}>Add post</button>
      { postsElements } 
    </div>
  );
};

export default MyPosts;
