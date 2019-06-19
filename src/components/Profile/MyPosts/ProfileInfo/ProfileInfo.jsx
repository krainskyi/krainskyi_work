import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader/Preloader';
import userPhoto from '../../../../assets/images/user.png';
import frontPhoto from '../../../../assets/images/frontPhoto.png';

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div >
      <div className={s.content}>

        <img alt ='' src={frontPhoto} />
      </div>
      <div >
        <div >
          <div className={s.profilePhoto}>
          <img alt='' src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}   />
          </div>
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
      </div>
    </div>
  );
}
export default ProfileInfo;