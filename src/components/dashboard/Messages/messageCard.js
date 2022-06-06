import React from "react";
import classes from "./messages.module.css";

const MessageCard = (props) => {
  if (props.timeStamp !== undefined) {
    var time =
      props.timeStamp.slice(0, 10) + " " + props.timeStamp.slice(11, 19);
  }
  return (
    <div className={classes.MessageBox}>
      <div className={classes.MessageContent}>
        <p className={classes.LeftAlign}>
          From: <i>{props.postedBy}</i> <span>({props.email})</span>
        </p>
        <p className={classes.RightAlign}>{time}</p>
      </div>
      <hr className={classes.Line} />
      <div className={classes.Message}>{props.msg}</div>
    </div>
  );
};

export default MessageCard;
