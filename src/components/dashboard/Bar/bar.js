import * as React from 'react';
import classes from './bar.module.css';
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";

export default function Bar(props) {
    return(
        <div className={classes.MainCon}>
            <div className={classes.Head}>
                <div className={classes.TdHead}>Channels</div> 
            </div>

            <div className={classes.DataTitle}>
                <div className={classes.BoxLeft}>
                    <div className={classes.Td}>#</div>
                    <div className={classes.Td}>Name</div>
                </div>
            </div>

            <div className={classes.Data}>
                <div className={classes.BoxLeft}>
                    <div className={classes.Td}>1</div>
                    <div className={classes.Td}>Aditya Engineering College</div>
                </div>
                <div className={classes.Middle}>
                    <div className={classes.Td}><MdModeEditOutline className={classes.Green}/></div>
                </div>
                <div className={classes.BoxRight}>
                    <div className={classes.Td}><MdDelete className={classes.Red}/></div>
                </div>
            </div>
        </div>
    );
}