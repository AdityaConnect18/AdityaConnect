import React from 'react';
import classes from './courses.module.css';
import { MdDelete } from "react-icons/md";
import SubList from './subList';

const Courses= () => {
    return(
        <div className={classes.MainContainer}>
            <div className={classes.Heading}>Courses Offered</div>

            <div className={classes.CoursesBox}>
                <table className={classes.table}>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th></th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Engineering</td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Diploma</td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Pharmcy</td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Management & MCA</td>
                    <td><MdDelete/></td>
                </tr>
                </table>
                </div>
            <SubList/>
        </div>
    );
}

export default Courses;