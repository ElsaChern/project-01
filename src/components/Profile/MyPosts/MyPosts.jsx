import React from "react";
import styleProf from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  let postsData = [
    {id:"1", message:"The weather is sunny today!", likes:"23"},
    {id:"2", message:"How are you?", likes:"12"},
    {id:"3", message:"OK", likes:"7"}
  ]

  let postsElements = postsData.map ( post => <Post message={post.message} likes={post.likes} /> )

  return (
    <div className={styleProf.posts}>
      My posts
      <div>
        <textarea rows={3} cols={50}></textarea>
      </div>
      <button>New post</button>
      { postsElements } 
    </div>
  );
};

export default MyPosts;
