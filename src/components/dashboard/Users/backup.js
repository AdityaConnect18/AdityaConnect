import React, { Component } from "react";
import classes from "./users.module.css";
import ListCard from "./listCard";
import UserCard from "./userCard";
import {
  GetUSersData,
  GetCollegesData,
  GetCoursesData,
  DeleteUser,
} from "../../../SERVICES/service";

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      filteredUsers: [],
      singleUser: {},
      courses: [],
      colleges: [],
      filteredColleges: [],
      roleSelect: "all",
      courseSelect: "all",
      collegeSelect: "all",
    };
  }

  componentDidMount() {
    this.getColleges();
    this.getCourses();
    this.getUsers();
  }

  getColleges = () => {
    GetCollegesData().then((data) => {
      this.setState({
        colleges: data.data.colleges,
        filteredColleges: data.data.colleges,
      });
    });
  };

  getCourses = () => {
    GetCoursesData().then((data) => {
      this.setState({
        courses: data.data.result,
      });
    });
  };

  getUsers = () => {
    GetUSersData()
      .then((data) => {
        this.setState({
          users: data.data.users,
          filteredUsers: data.data.users,
          singleUser: data.data.users[0],
        });
        //console.log(this.state.filteredUsers)
      })
      .catch((err) => console.error(err));
  };

  filterData = () => {
    let { roleSelect, courseSelect, collegeSelect, users } = this.state;
    let usersfiltered = users
      .filter((user) =>
        roleSelect === "all"
          ? user.roleId?.roleName.length > 1
          : user.roleId?.roleName === roleSelect
      )
      .filter((user) =>
        courseSelect === "all"
          ? user.courseId?._id.length > 1
          : user.courseId?._id === courseSelect
      )
      .filter((user) =>
        collegeSelect === "all"
          ? user.collegeId?._id.length > 1
          : user.collegeId?._id === collegeSelect
      );
    this.setState({ filteredUsers: usersfiltered });
  };

  changeHandleRoleSelect = (role) => {
    this.setState({ roleSelect: role }, () => {
      // call filterData
      this.filterData();
    });
  };

  changeHandleCourseSelect = (course) => {
    let { colleges } = this.state;
    this.setState({ courseSelect: course }, () => {
      let cols = colleges.filter((college) =>
        course === "all"
          ? college.courseId._id.length > 1
          : college.courseId._id === course
      );
      this.setState({ filteredColleges: cols });
      // call filterData
      this.filterData();
    });
  };

  changeHandleCollegeSelect = (college) => {
    this.setState({ collegeSelect: college }, () => {
      this.filterData();
    });
  };

  displayData = (user) => {
    this.setState({ singleUser: user });
  };

  deleteUser = (id) => {
    console.log(id);
  };

  // deleteUser = (userIndex) => {
  //     if (this.state.filteredUsers.length === 1) {
  //       alert("Alteast one volunteer is mandatory")
  //       return
  //     }
  //     DeleteUser(this.state.filteredUsers[userIndex]._id)
  //       .then((res) => { console.log(res) })
  //       .catch((err) => { console.log(err) })
  //       this.state.filteredUsers.splice(userIndex, 1)
  //     if (userIndex !== 0) {
  //       this.setstate({singleUser: this.state.filteredUsers[userIndex - 1]})
  //     }
  //     else {
  //         this.setstate({singleUser: this.state.filteredUsers[0]})
  //     }
  //   }

  render() {
    let { filteredUsers, singleUser, filteredColleges, courses } = this.state;
    return (
      <div className={classes.Users}>
        <div className={classes.Heading}>Users</div>

        <div className={classes.Filters}>
          <div className={classes.Filter}>
            <form>
              <label for="Category">Filter By Role</label>
              <select
                name="role"
                onChange={(e) => this.changeHandleRoleSelect(e.target.value)}
              >
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
              <select
                name="course"
                onChange={(e) => this.changeHandleCourseSelect(e.target.value)}
              >
                <option value="all">All</option>
                {courses.length > 1
                  ? courses.map((course) => (
                      <option value={course._id}>{course.courseName}</option>
                    ))
                  : null}
              </select>
            </form>
          </div>
          <div className={classes.Filter}>
            <form>
              <label for="Category">Filter By</label>
              <select
                name="Category"
                onChange={(e) => this.changeHandleCollegeSelect(e.target.value)}
              >
                <option value="all">All</option>
                {filteredColleges.length > 1
                  ? filteredColleges.map((college) => (
                      <option value={college._id}>{college.collegeName}</option>
                    ))
                  : null}
              </select>
            </form>
          </div>
        </div>

        <div className={classes.Details}>
          <div className={classes.UserCards}>
            <UserCard data={singleUser} del={this.deleteUser()} />
          </div>
          {filteredUsers.length > 1 ? (
            <div className={classes.Listcards}>
              {filteredUsers.map((userObj) => (
                <div
                  key={userObj._id}
                  onClick={() => this.displayData(userObj)}
                >
                  <ListCard
                    id={userObj.rollNumber}
                    name={userObj.fullName}
                    college={
                      userObj.collegeId
                        ? userObj.collegeId["collegeName"]
                        : null
                    }
                    timeStamp={userObj.createdAt}
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
