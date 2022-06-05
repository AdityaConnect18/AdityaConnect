import React from "react";
import classes from "./notifications.module.css";
import Bar from "../Bar/bar";

const Notifications = () => {
  return (
    <div className={classes.MainContainer}>
      <div className={classes.Heading}>Notifications</div>
      <div className={classes.Content}>
        <Bar />
      </div>

      <center>
        <h1>Comming Soon</h1>
      </center>
    </div>
  );
};

export default Notifications;
