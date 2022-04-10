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

      <div className={classes.Filters}>
        <div className={classes.Filter}>
          <form>
            <label for="Category">Filter By Role</label>
            <select name="role">
              <option value="all">All</option>
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="guest">Guest</option>
            </select>
          </form>
        </div>
        <div className={classes.Filter}>
          <form>
            <label for="Category">Filter By Course</label>
            <select name="course">
              <option value="all">All</option>
              <option value="engineering">Engineering</option>
              <option value="pharmacy">Pharmacy</option>
              <option value="mca">Management & MCA</option>
              <option value="diploma">Diploma</option>
            </select>
          </form>
        </div>

        <div className={classes.Filter}>
          <form>
            <label for="Category">Filter By</label>
            <select name="Category">
              <option value="all">All</option>
              <option value="aec">Aditya Engineering College</option>
              <option value="acet">
                Aditya College of Engineering & Technology
              </option>
              <option value="acoe">Aditya College of Engineering</option>
              <option value="apc">Aditya Pharmacy College</option>
              <option value="acop">Aditya College of Pharmacy</option>
              <option value="pg">Aditya Institute of P.G. Studies</option>
              <option value="agbsm">Aditya Global Business School</option>
            </select>
          </form>
        </div>
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
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Volunteers;
