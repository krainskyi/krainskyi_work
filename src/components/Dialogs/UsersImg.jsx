import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const Users = (props) => {
    return (
        <div className={s.users}>
                <div>  {/*конкатенация строк */}
               <NavLink to={'/dialogs/' + props.name}><img src='https://st2.depositphotos.com/2703645/7676/v/950/depositphotos_76762205-stock-illustration-male-avatar-icon.jpg' /></NavLink>
                <a >
                    <NavLink to={'/dialogs/' + props.name}>
                    <div className={s.usersname}>{props.name}</div>
                    </NavLink>
                </a>
            </div>
        </div>
    );
}
export default Users;
