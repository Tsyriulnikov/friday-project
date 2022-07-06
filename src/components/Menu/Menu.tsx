import {Link} from "react-router-dom";
import React from "react";
import styleMenu from './Menu.module.css'
export const Menu=()=> {
return(
    <div className={styleMenu.mainBlock}>
        <nav className={styleMenu.navigateBlock}>
            <div className={styleMenu.link}>
                <Link to='home'>Home</Link>
            </div>
            <div className={styleMenu.link}>
                <Link to='login'>Login</Link>
            </div>
            <div className={styleMenu.link}>
                <Link to='register'>Register</Link>
            </div>
            <div className={styleMenu.link}>
                <Link to='profile'>Profile</Link>
            </div>
            <div className={styleMenu.link}>
                <Link to='/404'>Error 404</Link>
            </div>
            <div className={styleMenu.link}>
                <Link to='forgot_pass'>Forgot pass</Link>
            </div>
            <div className={styleMenu.link}>
                <Link to='new_pass'>New pass</Link>
            </div>
            <div className={styleMenu.link}>
                <Link to='demo_page'>Demo page</Link>
            </div>
        </nav>
        <div>ver 0.4</div>
    </div>
)}