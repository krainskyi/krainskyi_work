import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom'


const Header = (props) => {
    return (
        <header className={s.header}>
            <a href='/profile'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjGvOZoivcDpZ-byAdPFGMOdvv90FkM55qw8Pf4fGe7LhU2c7j' />
            </a>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
              : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    );
}
export default Header;