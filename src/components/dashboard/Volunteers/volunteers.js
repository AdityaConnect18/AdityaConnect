import React from "react";
import classes from "./volunteers.module.css";
import VListCard from "./vlistCard";
import VUserCard from "./vuserCard";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetAdminsData, DeleteVolunteer } from "../../../SERVICES/service";
import ClockLoader from "react-spinners/ClockLoader";
import { css } from "@emotion/react";

const Volunteers = (props) => {
  const [admins, setadmins] = useState([{}]);
  const [singleUser, setSingleUser] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#FD752C");

  const override = css`
    display: block;
    margin: auto 0;
    top: 170px;
    left: 45%;
  `;

  React.useEffect(() => {
    GetAdminsData()
      .then((data) => {
        setLoading(!loading);
        setadmins(data.data.data);
        setSingleUser(data.data.data[0]);
      })
      .catch((error) => console.error(error));
  }, []);

  const navigate = useNavigate();
  const { state } = useLocation();
  const [userIndex, setUserIndex] = useState(0);

  const updateUserData = (user, index) => {
    setSingleUser(user);
    setUserIndex(index);
  };

  const deleteUser = () => {
    if (admins.length === 1) {
      alert("Alteast one volunteer is mandatory");
      return;
    }
    let deletePrompt = prompt("Please enter DELETE to remove the Volunteer");
    if (deletePrompt == "DELETE") {
      DeleteVolunteer(admins[userIndex]._id)
        .then((res) => {
          alert("Volunteer Deleted Successfully");
        })
        .catch((err) => {
          console.log(err);
        });
      admins.splice(userIndex, 1);
      if (userIndex !== 0) {
        setSingleUser(admins[userIndex - 1]);
      } else {
        setSingleUser(admins[0]);
      }
    } else {
      alert("Unable to remove Volunteer");
    }
  };

  const editUser = () => {
    navigate("/volunteers/add", {
      state: {
        user: singleUser,
        operation: "editdetails",
        user_index: userIndex,
      },
    });
  };

  const updatePassword = () => {
    navigate("/volunteers/add", {
      state: { user: singleUser, operation: "updatePassword" },
    });
  };

  const updateUser = (state) => {
    if (state == null) {
    } else {
      let temp_state = [...admins];
      let temp_element = state.user;
      temp_state[state.user_index] = temp_element;
      setadmins(temp_state);
    }
  };

  useEffect(() => {
    updateUser(state);
  }, []);

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
      {loading ? (
        <ClockLoader
          css={override}
          color={color}
          loading={loading}
          size={100}
        />
      ) : (
        <div className={classes.Details}>
          <div className={classes.UserCards}>
            <VUserCard
              data={singleUser}
              del={deleteUser}
              edit={editUser}
              password={updatePassword}
            />
          </div>

          <div className={classes.Listcards}>
            {admins.map((userObj, index) => (
              <div onClick={(e) => updateUserData(userObj, index)}>
                <VListCard
                  timeStamp={userObj.createdAt}
                  college={
                    userObj.collegeId ? userObj.collegeId["collegeName"] : null
                  }
                  admin={userObj}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Volunteers;
