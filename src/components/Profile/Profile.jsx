import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = (props) => {
debugger;
  return (
    <div >
      <ProfileInfo />
      <MyPosts state={props.state}
        dispatch={props.dispatch}
        newPostText ={props.state.newPostText}  />
    </div>

  );
}
export default Profile;