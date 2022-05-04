import * as React from 'react';
export default function VoluTable(props) {
  
  return (
    
    <tr>
        <td>{props.index}</td>
        <td>{props.data.adminName}</td>
        
    </tr>
   
  );
}
