import React from 'react';
import classes from './listCard.module.css';


const ListCard = (props) => {
    return (
        <div className={classes.Listbox}>
            <p className={classes.Title}>{props.name}</p>
            <div className={classes.Belowcontent}>
                <p className={classes.College}>{props.college}</p>
                <p className={classes.Date}>{props.date}</p>
            </div>
        </div>
    );
}

export default ListCard;