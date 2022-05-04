import * as React from 'react';

export default function UsersTable(props) { 
  
  return (
    
    <tr>
        <td>{props.index}</td>
        <td>{props.data.fullName}</td>
        <td>{props.data.collegeId ? props.data.collegeId['collegeName'] : null}</td>
        <td>{props.data.createdAt}</td>
    </tr>
    
  );
}
