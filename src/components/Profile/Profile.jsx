import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styleProf from './Profile.module.css'

const Profile = () => {
    return <div className={styleProf.content}>
    <div>
      <img src='https://images.unsplash.com/photo-1620553967189-8c0eddd81c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1753&q=80' height={200}px width={1000} />
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />
  </div>
}

export default Profile;