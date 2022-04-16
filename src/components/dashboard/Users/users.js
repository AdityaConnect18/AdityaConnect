import React from "react";
import classes from "./users.module.css";
import ListCard from "./listCard";
import UserCard from "./userCard";
import { useState } from "react";
import { GetUSersData, GetCollegesData, GetCoursesData } from "../../../SERVICES/service";

const Users = (props) => {

  const [users, setUsers] = useState([{}]);

  const [singleUser, setSingleUser] = useState(users[0])
  const [colleges, setColleges] = React.useState([{}]);
  const [courses, setCourses] = React.useState([{}]);
  const [filteredColleges, setfilteredColleges] = React.useState([{}]);
  const [filteredUsers, setFilteredUsers] = React.useState([{}]);
  const [selectCourseValue, setSelectCourseValue] = React.useState("all");
  const [selectCollegeValue, setSelectCollegeValue] = React.useState("all");
  const [selectRoleValue, setSelectRoleValue] = React.useState("all");
  // var selectedRoleValue;
  // var selectCollegeValue;
  // var selectCourseValue;


  React.useEffect(() => {

    GetUSersData()
      .then(data => {
        console.log(data.data.users)
        console.log(data.data.users[0].collegeId)
        setUsers(data.data.users)
        setFilteredUsers(data.data.users);
        setSingleUser(data.data.users[0])
      })
      .catch(err => console.error(err))

    try {
      getColleges();
      getCourses();
    } catch (error) {
      console.log(error)
    }
  }, [])

  const getColleges = () => {
    GetCollegesData()
      .then((data) => {
        console.log(data)
        setColleges(data.data.colleges)
        setfilteredColleges(data.data.colleges);
      })
  };

  const getCourses = async () => {
    GetCoursesData()
      .then((data) => {
        setCourses(data.data.result);
      })
  };

  const changeHandleRoleSelect = (role) => {
    console.log(role)
    setSelectRoleValue(role);
    console.log(selectRoleValue)
    filterUserDataMain();
  }

  const filterUserDataMain = () => {
    console.log("role" + "==> " + selectRoleValue)
    var usersfiltered = users
      .filter(user => selectRoleValue === 'all' ? user.roleId.roleName.length > 1 : user.roleId.roleName === selectRoleValue)
      .filter(user => selectCourseValue === 'all' ? user.courseId._id.length > 1 : user.courseId._id === selectCourseValue)
      .filter(user => selectCollegeValue === 'all' ? user.collegeId._id.length > 1 : user.collegeId._id === selectCollegeValue)

    console.log(usersfiltered)
    setFilteredUsers(usersfiltered);
  }


  const changeHandleCourseSelect = (course_id) => {

    console.log(course_id)
    var fc = colleges.filter(college => college.courseId._id === course_id);
    setfilteredColleges(fc);
    setSelectCourseValue(course_id);
    filterUserDataMain();

  }

  const changeHandleCollegeSelect = (college_id) => {
    setSelectCollegeValue(college_id);
    filterUserDataMain();
  }


  return (
    <div className={classes.Users}>
      <div className={classes.Heading}>Users</div>

      <div className={classes.Filters}>
        <div className={classes.Filter}>
          <form>
            <label for="Category">Filter By Role</label>
            <select name="role" onChange={e => changeHandleRoleSelect(e.target.value)}>
              <option value="all">All</option>
              <option value="Student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="guest">Guest</option>
            </select>
          </form>
        </div>
        <div className={classes.Filter}>
          <form>
            <label for="Category">Filter By Course</label>
            <select name="course" onChange={e => changeHandleCourseSelect(e.target.value)}>
              <option value="all">All</option>
              {courses.length > 1 ? courses.map(course => (
                <option value={course._id}>{course.courseName}</option>
              )) : null}
            </select>
          </form>
        </div>
        <div className={classes.Filter}>
          <form>
            <label for="Category">Filter By</label>
            <select name="Category" onChange={e => changeHandleCollegeSelect(e.target.value)}>
              <option value="all">All</option>
              {filteredColleges.length > 1 ? filteredColleges.map(college => (
                <option value={college._id}>{college.collegeName}</option>
              )) : null}
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
        {filteredUsers.length > 1 ? <div className={classes.Listcards}>
          {filteredUsers.map((userObj) => (
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
