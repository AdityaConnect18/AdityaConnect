import React from 'react';
import classes from './courses.module.css';
import { MdDelete } from "react-icons/md";

const SubList = () => {
    return(
        <div>
            <div className={classes.CoursesBox}>
                <table className={classes.table}>
                <caption>Colleges Under Engineering</caption>
                <tr>
                    <td>#</td>
                    <td>Name</td>
                    <td></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Aditya Engineering College</td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Aditya College of Engineering & Technology</td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Aditya College of Engineering</td>
                    <td><MdDelete/></td>
                </tr>
            
                </table>
                </div>
            
        </div>
    );
}

export default SubList;