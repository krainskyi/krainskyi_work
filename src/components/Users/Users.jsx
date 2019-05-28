import React from 'react';
import styles from './Users.module.css';


const Users = (props) => {
  if (props.users.length===0){

  
  props.setUsers([{
    id: 1,
    photoUrl: 'https://www.filepicker.io/api/file/lA09vwfqSjqrlESIenlm',
    followed: true,
    fullName: 'Yura Krainskyi',
    status: 'I\'m a big boss',
    location: { city: 'Lviv', country: 'Ukraine' }
  },
  {
    id: 2,
    photoUrl: 'https://www.filepicker.io/api/file/lA09vwfqSjqrlESIenlm',
    followed: false,
    fullName: 'Lana Senyk',
    status: 'I\'m a hard work',
    location: { city: 'Lviv', country: 'Ukraine' }
  },
  {
    id: 3,
    photoUrl: 'https://www.filepicker.io/api/file/lA09vwfqSjqrlESIenlm',
    followed: true,
    fullName: 'Maks Ygorec',
    status: 'Have a nice day',
    location: { city: 'Kyiv', country: 'Ukraine' }
  }])
}
  return (
    <div>
      {
        props.users.map(u => <div key={u.id}>
          <span>
            <div><img src={u.photoUrl} className={styles.userPhoto} /></div>
            <div>
              {u.followed
                ? <button onClick={() => { props.unfollow(u.id) }}>UnFollow</button>
                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
            </div>
          </span>
          <span>
            <span>

              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>

          </span>

        </div>)
      }
    </div>

  );
}
export default Users;