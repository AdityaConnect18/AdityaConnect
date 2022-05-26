import React from "react";
import classes from "./newsfeed.module.css";
import { NavLink } from "react-router-dom";
import { useState} from "react";
import AdminCard from "./adminCard";
import {FindAdminById} from "../../../SERVICES/service"

const Settings = () => {
  const [adminData, setAdminData] = useState({});
  function parseJwt(token) {
    if (token) {
      return JSON.parse(atob(token.split('.')[1]));
    }
  }

  React.useEffect(() => {
    let token = localStorage.getItem("payLoad")
    let userDetails = parseJwt(token)
    
    FindAdminById(userDetails._id)
      .then((data) => {
        setAdminData(data.data.data[0]);
      })
      .catch((error) => console.error(error))
  }, [])
  

  return(
    <div className={classes.NewsFeed}>
      <div className={classes.Heading}>My Profile</div>
      <div className={classes.Buttons}>
        <NavLink exact to="/settings" className={classes.Button}>
          <span>MyProfile</span>
        </NavLink>
        <NavLink exact to="/settings/myposts" className={classes.Button}>
          <span>MyPosts</span>
        </NavLink>
      </div>
    <AdminCard data={adminData}    />
    </div>
  );
}

export default Settings;
