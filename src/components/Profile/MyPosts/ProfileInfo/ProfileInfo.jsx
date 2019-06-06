import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  debugger;
  if (!props.profile){
    return <Preloader/>
  }

  return (
    <div >
      <div className={s.content}>
        <img src='http://www.photoplato.com/photoplato/23751-free-large-desktop-wallpaper.png' />
      </div>
      <div >
        <div >
        <img alt='' src={props.profile.photos.large}/>
        <div className={s.profile}>
        <div>
        My name: {props.profile.fullName}
        </div>
        <div>
        About me: {props.profile.aboutMe}
        </div>
        <div>
          Contacts me: {props.profile.contacts.facebook}
        </div>
        <div>
          Find Job: {props.profile.lookingForAJobDescription}
        </div>
        </div>
        </div>
        avatar+discription
      </div>
      </div>
      );
  }
export default ProfileInfo;