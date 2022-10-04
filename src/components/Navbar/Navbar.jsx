import React from 'react';
import stylesNav from './Navbar.module.css'

const Navbar = () => {
    return <nav className={stylesNav.nav}>
        <div className={stylesNav.item}>
            <a href='/profile'>Profile</a>
        </div>
        <div className={stylesNav.item}>
            <a href='/dialogs'>Messages</a>
        </div>
        <div className={stylesNav.item}>
            <a href='/news'>News</a>
        </div>
        <div className={stylesNav.item}>
            <a href='/music'>Music</a>
        </div>
        <div className={stylesNav.item}>
            <a href='/settings'>Settings</a>
        </div>
    </nav>
}

export default Navbar;