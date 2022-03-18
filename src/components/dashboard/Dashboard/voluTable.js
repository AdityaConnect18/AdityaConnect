import * as React from 'react';
import classes from './voluTable.module.css';

export default function VoluTable(props) {
  var usersData = <tr><td>{props.sno}</td><td>{props.name}</td><td>{props.college}</td><td>{props.date}</td></tr>
  
  return (
    <div>
    <table className={classes.table2}>
    <caption>Recent Volunteers</caption>
    <tr>
        <th>#</th>
        <th>Name</th>
        
    </tr>
    <tr>
        <td>1</td>
        <td>Praveen Maroju</td>
        
    </tr>
    <tr>
        <td>2</td>
        <td>Charan Kurru</td>
       
    </tr>
    </table>
    </div>
  );
}
