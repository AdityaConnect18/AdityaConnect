import react,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import {AiFillDashboard} from 'react-icons/ai';
import {BsNewspaper} from 'react-icons/bs';
import {FaUsers} from 'react-icons/fa';
import {MdVolunteerActivism} from 'react-icons/md';
import {FaSchool} from 'react-icons/fa';
import {GrAnnounce} from 'react-icons/gr';
import {RiMessageFill} from 'react-icons/ri';
import {MdNotifications} from 'react-icons/md';
import {AiFillSetting} from 'react-icons/ai';
import {RiLogoutBoxRFill} from 'react-icons/ri';
// import Logo141 from "../../assets/images/Logo141.svg";
import classes from './Menubar.module.css';

const Menubar= (props)=>{

    
    return(
        <div>
            <div className={classes.Sidenav}>
                {/* <img className={classes.Logo} src={Logo141}></img> */}
                <div className={classes.Menubtns}>
                    <div className={classes.Sidetabs}>
                        <AiFillDashboard className={classes.Sideicons}/>
                        <a>DashBoard</a>
                    </div>

                    <div className={classes.Sidetabs}>
                    <BsNewspaper className={classes.Sideicons}/>
                    <a>News Feed</a>
                    </div>

                    <div className={classes.Sidetabs}>
                    <FaUsers className={classes.Sideicons}/>
                    <a>Users</a>
                    </div>

                    <div className={classes.Sidetabs}>
                    <MdVolunteerActivism className={classes.Sideicons}/>
                    <a>Voluters</a>
                    </div>

                    <div className={classes.Sidetabs}>
                    <FaSchool className={classes.Sideicons}/>
                    <a>Courses</a>
                    </div>

                    <div className={classes.Sidetabs}>
                    <GrAnnounce className={classes.Sideicons}/>
                    <a>Channels & Categories</a>
                    </div>

                    <div className={classes.Sidetabs}>
                    <RiMessageFill className={classes.Sideicons}/>
                    <a>Message</a>
                    </div>

                    <div className={classes.Sidetabs}>
                    <MdNotifications className={classes.Sideicons}/>
                    <a>Notifications</a>
                    </div>

                    <div className={classes.Sidetabs}>
                    <AiFillSetting className={classes.Sideicons}/>
                    <a>Account Settings</a>
                    </div>

                    <div className={classes.Sidetabs}>
                    <RiLogoutBoxRFill className={classes.Sideicons}/>
                    <a>Logout</a>
                    </div>
                                    
                    
                    
                    
                    
                    
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Menubar;