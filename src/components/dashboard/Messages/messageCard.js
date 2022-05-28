import React from 'react';
import classes from './messages.module.css';

const MessageCard = (props) => {
    if (props.timeStamp !== undefined) {
        var time = props.timeStamp.slice(0, 10)
    }
    return (
        <div className={classes.MessageBox}>
            {/* <div className={classes.Title}>Title</div> */}
            <hr className={classes.Line} />
            <div className={classes.MessageContent}>
                <p>From: <i>{props.postedBy}</i> <span>({props.email})</span></p>
                <p className={classes.Date}>{time}</p>
            </div>
            <div className={classes.Message}>
                {props.msg}
            </div>
        </div>
    );
}

export default MessageCard;