import React from 'react';
import NotificationCard from './notificationCard';
import classes from './notifications.module.css';

const Notifications = () => {
    return(
        <div className={classes.MainContainer}>
            <div className={classes.Heading}>Notifications</div>
            <NotificationCard/>
        </div>
    );
}

export default Notifications;