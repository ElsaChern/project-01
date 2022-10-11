import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styleProf from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.state.postsData}
               newPostText={props.state.newPostText}
               addPost={props.addPost}
               updateNewPostText={props.updateNewPostText}/>
    </div>
  );
};

export default Profile;
