import * as React from 'react';
import classes from './usersTable.module.css';

export default function UsersTable(props) { 
  return (
    
    <tr>
        <td>{props.index}</td>
        <td>{props.data.name}</td>
        <td>{props.data.college}</td>
        <td>{props.data.date}</td>
    </tr>
    
  );
}
