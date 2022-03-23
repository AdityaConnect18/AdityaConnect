import * as React from 'react';
import classes from './temp.module.css';

export default function Temp(props) {
    return(
        <div>
            <div className={classes.Head}>
                <div>#</div>
                <div>Name</div>
                <div>College</div>
                <div>Date</div>
            </div>
            <div className={classes.Data}>
                <div className={classes.Td}>1</div>
                <div className={classes.Td}>Akhil</div>
                <div className={classes.Td}>Aditya Engineering College</div>
                <div className={classes.Td}>05-05-2022</div>
            </div>
            <div className={classes.Data}>
                <div className={classes.Td}>2</div>
                <div className={classes.Td}>Sandeep Grandhi</div>
                <div className={classes.Td}>Aditya College of Engineering</div>
                <div className={classes.Td}>05-05-2022</div>
            </div>
            <div className={classes.Data}>
                <div className={classes.Td}>2</div>
                <div className={classes.Td}>Sandeep Grandhi</div>
                <div className={classes.Td}>Aditya College of Engineering & Technology</div>
                <div className={classes.Td}>05-05-2022</div>
            </div>
        </div>
    );
}