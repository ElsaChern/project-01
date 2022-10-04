import React from "react";
import styleProf from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={styleProf.posts}>
      My posts
      <div>
        <textarea rows={3} cols={50}></textarea>
      </div>
      <button>New post</button>
      <Post message= "The weather is sunny today!" likes="23"/>
      <Post message= 'How are you?' likes="12"/>
      <Post message= 'This is my first post' likes="7" />
    </div>
  );
};

export default MyPosts;
