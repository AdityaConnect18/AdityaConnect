import * as React from "react";

export default function UsersTable(props) {
  if (props.data.createdAt !== undefined) {
    var time =
      props.data.createdAt.slice(0, 10) +
      "  " +
      props.data.createdAt.slice(11, 16);
  }

  return (
    <tr key={props.index}>
      <td>{props.index}</td>
      <td>{props.data.fullName}</td>
      <td>
        {props.data.collegeId ? props.data.collegeId["collegeName"] : null}
      </td>
      <td>{time}</td>
    </tr>
  );
}
