import React from "react";
import classes from "./listCard.module.css";

const ListCard = (props) => {
  return (
    <div className={classes.Listbox}>
      <p className={classes.Title}>{props.name}</p>
      <div className={classes.Belowcontent}>
        <p className={classes.College}>{props.college}</p>
        <p className={classes.Date}>{props.timeStamp.slice(0, 10)}</p>
      </div>
    </div>
  );
};

export default ListCard;
