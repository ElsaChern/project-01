import React from "react";
import styleProf from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New post</div>
      <Post message= "The weather is sunny today!" />
      <Post message= 'How are you?' />
      <Post message= 'This is my first post' />
    </div>
  );
};

export default MyPosts;
