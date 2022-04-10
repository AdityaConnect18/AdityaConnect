import React from "react";
import classes from "./users.module.css";
import ListCard from "./listCard";
import UserCard from "./userCard";
import { useState } from "react";
import { GetUSersData } from "../../../SERVICES/service";

const Users = (props) => {

  const [users, setUsers] = useState([
    {
      name: "Akhil",
      idcard: "18A91A1222",
      branch: "Information Technology",
      college: "Aditya Engineering College",
      course: "Engineering",
      email: "18a91a1222@aec.edu.in",
      number: "9876543210",
      date: "21-02-2022 07:09 PM",
    },
    {
      name: "Sai",
      idcard: "18A91A1223",
      branch: "Information Technology",
      college: "Aditya College of Engineering",
      course: "Engineering",
      email: "18a91a1222@aec.edu.in",
      number: "9876543210",
      date: "21-02-2022 07:09 PM",
    },
    {
      name: "Manoj",
      idcard: "18A91A1224",
      branch: "Computer Science",
      college: "Aditya College of Engineering & Technology",
      course: "Engineering",
      email: "18a91a1222@aec.edu.in",
      number: "9876543210",
      date: "21-02-2022 07:09 PM",
    },
  ]);

  const [singleUser, setSingleUser] = useState(users[0])

  React.useEffect(() => {

    GetUSersData()
      .then(data => {
        console.log(data.data.users)
        console.log(data.data.users[0].collegeId)
        setUsers(data.data.users)
        setSingleUser(data.data.users[0])
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className={classes.Users}>
      <div className={classes.Heading}>Users</div>

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
          <UserCard
            data={singleUser}
          />
        </div>
        {users.length > 1 ? <div className={classes.Listcards}>
          {users.map((userObj) => (
            <div key={userObj._id} onClick={() => setSingleUser(userObj)}>
              <ListCard
                id={userObj.rollNumber}
                name={userObj.fullName}
                college={userObj.collegeId ? userObj.collegeId['collegeName'] : null}
              // date={userObj.date}
              />
            </div>
          ))}
        </div> : null}


      </div>

    </div>
  );
};

export default Users;
