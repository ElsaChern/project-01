import React from 'react';
import { NavLink } from 'react-router-dom';
import stylesNav from './Navbar.module.css'

const Navbar = () => {
    return <nav className={stylesNav.nav}>
        <div className={stylesNav.item}>
            <NavLink to='/profile'>Profile</NavLink>
        </div>
        <div className={stylesNav.item}>
            <NavLink to='/Users'>Users</NavLink>
        </div>
        <div className={stylesNav.item}>
            <NavLink to='/dialogs'>Messages</NavLink>
        </div>
        <div className={stylesNav.item}>
            <NavLink to='/news'>News</NavLink>
       </div>
        <div className={stylesNav.item}>
            <NavLink to='/music'>Music</NavLink>
     </div>
        <div className={stylesNav.item}>
            <NavLink to='/settings'>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;