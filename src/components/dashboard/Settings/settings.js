import React from "react";
import classes from "./newsfeed.module.css";
import { NavLink } from "react-router-dom";
import { useState} from "react";
import AdminCard from "./adminCard";
import {FindAdminById} from "../../../SERVICES/service"
import ClockLoader from "react-spinners/ClockLoader";
import { css } from "@emotion/react";

const Settings = () => {

  const [adminData, setAdminData] = useState({});
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#FD752C");
  const override = css`
    display: block;
    margin: auto 0;
    top: 220px;
    left: 45%;
    `;

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
        setLoading(!loading)
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
      {
            (loading)? <ClockLoader css={override} color={color} loading={loading} size={100}  />
            :  
            <AdminCard data={adminData}  />
      }
    </div>
  );
}

export default Settings;
