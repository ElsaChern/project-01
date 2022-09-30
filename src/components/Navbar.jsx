import React from 'react';
import stylesNav from './Navbar.module.css'

const Navbar = () => {
    return <nav className={stylesNav.nav}>
        <div className={stylesNav.item}>
            <a>Profile</a>
        </div>
        <div className={stylesNav.item}>
            <a>Messages</a>
        </div>
        <div className={stylesNav.item}>
            <a>News</a>
        </div>
        <div className={stylesNav.item}>
            <a>Music</a>
        </div>
        <div className={stylesNav.item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;