import * as React from 'react';
import classes from './voluTable.module.css';

export default function VoluTable(props) {
  
  return (
    
    <tr>
        <td>{props.index}</td>
        <td>{props.data.name}</td>
        
    </tr>
   
  );
}
