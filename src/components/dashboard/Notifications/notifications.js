import React from 'react';
import classes from './notifications.module.css';
import Bar from '../Bar/bar';

const Notifications = () => {
    return(
        <div className={classes.MainContainer}>
            <div className={classes.Heading}>Notifications</div>
            <Bar/>  
        </div>
    );
}

export default Notifications;