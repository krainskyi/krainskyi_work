import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <a href='/profile'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjGvOZoivcDpZ-byAdPFGMOdvv90FkM55qw8Pf4fGe7LhU2c7j' />
            </a>
        </header>
    );
}
export default Header;