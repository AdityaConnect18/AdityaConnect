import React from "react";
import classes from "./volunteers.module.css";
import VListCard from "./vlistCard";
import VUserCard from "./vuserCard";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
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


  const navigate = useNavigate();
  const { state } = useLocation();
  const [userIndex, setUserIndex] = useState(0)

  const testing = (user, index) => {
    setSingleUser(user)
    setUserIndex(index)
  }

  const deleteUser = () => {
    console.log(userIndex)
    admins.splice(userIndex, 1)
    setSingleUser(admins[0])
  }

  const editUser = () => {
    navigate('/volunteers/add', { state: { user: singleUser, user_index: userIndex } });
  }

  const updateUser = (state) => {
    console.log(state)
    if (state == null) {

    }
    else {
      let temp_state = [...admins];
      let temp_element = state.user;
      temp_state[state.user_index] = temp_element;
      setadmins(temp_state)
    }

  }

  useEffect(() => {
    updateUser(state)
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
            del={deleteUser}
            edit={editUser}
          />
        </div>

        <div className={classes.Listcards}>
          {admins.map((userObj, index) => (
            <div onClick={(e) => testing(userObj, index)} >
              <VListCard
                timeStamp={userObj.createdAt}
                college={userObj.collegeId ? userObj.collegeId['collegeName'] : null}
                admin={userObj}
              />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Volunteers;
