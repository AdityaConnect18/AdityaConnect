import React from 'react';
import classes from './messages.module.css';
import MessageCard from './messageCard';
const Messages = () => {
    return(
        <div className={classes.MainContainer}>
            <div className={classes.Heading}>Messages</div>

            <MessageCard/>
            <MessageCard/>
            <MessageCard/>
            <MessageCard/>

        </div>
    );
}

export default Messages;