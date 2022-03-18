import * as React from 'react';
import classes from './usersTable.module.css';

export default function UsersTable(props) {
  var usersData = <tr><td>{props.sno}</td><td>{props.name}</td><td>{props.college}</td><td>{props.date}</td></tr>
  
  return (
    <div> 
    <table className={classes.table1}>
    <caption>Recent Users</caption>
    <tr>
        <th>#</th>
        <th>Name</th>
        <th>College</th>
        <th>Date</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Praveen Maroju</td>
        <td>Aditya Engineering College</td>
        <td>05-05-2022</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Charan Kurru</td>
        <td>Aditya Engineering College</td>
        <td>05-05-2021</td>
    </tr>
    </table>
    </div>
  );
}
