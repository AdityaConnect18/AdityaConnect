import React from 'react';
import classes from './listCard.module.css';


const VListCard = (props) => {
    return(
            <div className={classes.Listbox}>
                <p className={classes.Title}>Akhil Grandhi</p>
                <div className={classes.Belowcontent}>
                <p className={classes.College}>Aditya Engineering College</p>
                <p className={classes.Date}>21-02-2022 07:09 PM</p>
                </div>
            </div>
    );
}

export default VListCard;