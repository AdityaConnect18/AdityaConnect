import React from "react";
import classes from './Navbar.module.css';
import {MdAccountCircle} from 'react-icons/md';

const Navbar= (props)=>{
    return(
        <div>
            <ul className={classes.Navbar}>
            <li><a className={classes.Active}>Aditya Connect</a></li>
            <li className={classes.Username}><a className={classes.Uname}>
                <span className={classes.Navicon}><MdAccountCircle /></span>User Name</a>
            </li>
        </ul>
        </div>

    )
    
}

export default Navbar;