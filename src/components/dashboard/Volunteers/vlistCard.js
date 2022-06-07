import React from "react";
import classes from "./listCard.module.css";

const VListCard = (props) => {
  if (props.timeStamp !== undefined) {
    var time = props.timeStamp.slice(0, 10);
  }
  return (
    <div className={classes.Listbox} key={props.id}>
      <p className={classes.Title}>{props.admin.adminName}</p>
      <div className={classes.Belowcontent}>
        <p className={classes.College}>{props.college}</p>
        <p className={classes.Date}>{time}</p>
      </div>
    </div>
  );
};

export default VListCard;
