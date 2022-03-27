import React from 'react';
import NotificationCard from './notificationCard';
import classes from './notifications.module.css';
import Bar from '../Bar/bar';

const Notifications = () => {
    return(
        <div className={classes.MainContainer}>
            <div className={classes.Heading}>Notifications</div>
            {/* <NotificationCard/> */}
            <Bar/>  
        </div>
    );
}

export default Notifications;