import React from "react";
import styleProf from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: "ADD-POST" })
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
  }

  let postsElements = props.postsData.map ( post => <Post message={post.message} likes={post.likes} /> )

  return (
    <div className={styleProf.posts}>
      My posts
      <div>
        <textarea rows={3} cols={50} ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
      </div>
      <button onClick={addPost}>Add post</button>
      { postsElements } 
    </div>
  );
};

export default MyPosts;
