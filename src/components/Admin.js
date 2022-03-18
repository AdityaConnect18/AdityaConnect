import React from 'react';
import classes from './Admin.module.css';
import Navbar from './dashboard/Navbar/Navbar';
import Menubar from './dashboard/Navbar/Menubar';
import DashBoard from './dashboard/Dashboard/dashboard';
import NewsFeed from './dashboard/Newsfeed/newsfeed';
import Users from './dashboard/Users/users';
import Volunteers from './dashboard/Volunteers/volunteers';
import Courses from './dashboard/Courses/courses';
import Channels from './dashboard/Channels/channels';
import Messages from './dashboard/Messages/messages';
import Notifications from './dashboard/Notifications/notifications';
import Settings from './dashboard/Settings/settings';

const Admin = () => {
    return(
        <div>
            <Navbar/>
            <Menubar/>
            <div className={classes.Right}>
                <DashBoard/>
                {/* <NewsFeed/> */}
                {/* <Users/>  */}
                {/* <Volunteers/> */}
                {/* <Courses/> */}
                {/* <Channels/> */}
                {/* <Messages/> */}
                {/* <Notifications/> */}
                {/* <Settings/> */}
            </div>
            
        </div>
       
    );
}

export default Admin;