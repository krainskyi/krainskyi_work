import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Users from './../Dialogs/UsersImg';


const Navbar = (props) => {
  let onlineData =
    props.user.map(u => <Users name={u.name} id={u.id = 1} />);

  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to='/profile'>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/users'>Users</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs'>Message </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news'>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music'>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/settings'>Settings</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/online'>Online</NavLink>
      </div>
      <div>
        {onlineData}
      </div>

    </nav>
  );
}
export default Navbar;