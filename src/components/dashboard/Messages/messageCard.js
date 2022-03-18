import React from 'react';
import classes from './messages.module.css';

const MessageCard = () => {
    return(


            <div className={classes.MessageBox}>
                <div className={classes.Title}>Title</div>
                <hr className={classes.Line} />
                <div className={classes.MessageContent}>
                <p>From: <i>Akhil Grandhi</i> <span>(akhilgrandhi123@gmail.com)</span></p>
                <p className={classes.Date}>21-02-2022 07:09 PM</p>
                </div>
                <div className={classes.Message}>
                    Try to imporove UI/UX for better quality 
                </div>                
            </div>
    );
}

export default MessageCard;