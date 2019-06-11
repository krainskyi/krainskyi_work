import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';


let Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map(p => {
                return (
                    <span className={props.currentPage === p && styles.selectedPage}
                        onClick={(e) => { props.onPageChanged(p); }}
                    >{p}</span>
                )
            })}
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img alt='' src={u.photos.small != null ? u.photos.small : userPhoto}
                                className={styles.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some (id=> id===u.id)} onClick={() => {
                                props.toogleFollowingInProgress(true, u.id);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "5431a17e-d94a-4289-b1e4-9fc730fb19a4"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(u.id);
                                        }
                                        props.toogleFollowingInProgress(false, u.id);
                                    });

                            }}>UnFollow</button>
                            : <button disabled={props.followingInProgress.some (id=> id===u.id)} onClick={() => {
                                props.toogleFollowingInProgress(true, u.id);

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "5431a17e-d94a-4289-b1e4-9fc730fb19a4"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id);
                                        }
                                        props.toogleFollowingInProgress(false, u.id);
                                    });
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
            }
        </div>
    );
}
export default Users;