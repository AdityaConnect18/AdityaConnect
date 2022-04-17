import React from "react";
import classes from "./volunteers.module.css";
import VListCard from "./vlistCard";
import VUserCard from "./vuserCard";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { GetAdminsData } from "../../../SERVICES/service"

const Volunteers = (props) => {
  const [admins, setadmins] = useState([{}]);
  const [singleUser, setSingleUser] = useState([{}])

  React.useEffect(() => {
    GetAdminsData()
      .then((data) => {
        console.log(data.data.data);
        setadmins(data.data.data);
        setSingleUser(data.data.data[0])
      })
      .catch((error) => console.error(error))
  }, [])



  return (
    <div className={classes.MainContainer}>
      <div className={classes.Heading}>Volunteers</div>

      <div className={classes.Buttons}>
        <NavLink exact to="/volunteers" className={classes.Button}>
          <span>Volunteers</span>
        </NavLink>
        <NavLink exact to="/volunteers/add" className={classes.Button}>
          <span>Add Volunteers</span>
        </NavLink>
      </div>

      <div className={classes.Details}>
        <div className={classes.UserCards}>
          <VUserCard
            data={singleUser}
          />
        </div>

        <div className={classes.Listcards}>
          {admins.map((userObj) => (
            <div onClick={() => setSingleUser(userObj)}>
              <VListCard
                id={userObj.empId}
                name={userObj.adminName}
                college={userObj.college}
                date={userObj.date}
                // timeStamp={userObj.createdAt}
              />
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Volunteers;
