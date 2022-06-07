import React, { Component } from 'react'
import classes from "./users.module.css";
import ListCard from "./listCard";
import UserCard from "./userCard";
import { GetUSersData, GetCollegesData, GetCoursesData } from "../../../SERVICES/service";
// import { DeleteUser } from "../../../SERVICES/service";

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
            roleSelect: 'all',
            courseSelect: 'all',
            collegeSelect: 'all'
        }
    }

    

    componentDidMount() {
        this.getColleges();
        this.getCourses();
        this.getUsers();
    }

    getColleges = () => {
        GetCollegesData()
            .then((data) => {
                this.setState({
                    colleges: data.data.colleges,
                    filteredColleges: data.data.colleges
                })
            })
    };

    getCourses = () => {
        GetCoursesData()
            .then((data) => {
                this.setState({
                    courses: data.data.result
                })
            })
    };

    getUsers = () => {
        GetUSersData()
            .then(data => {
                this.setState({
                    users: data.data.users,
                    filteredUsers: data.data.users,
                    singleUser: data.data.users[0]
                })
            })
            .catch(err => console.error(err))
    }

    filterData = () => {
        let { roleSelect, courseSelect, collegeSelect, users } = this.state;
        let usersfiltered = users
            .filter(user => roleSelect === 'all' ? user.roleId?.roleName.length > 1 : user.roleId?.roleName === roleSelect)
            .filter(user => courseSelect === 'all' ? user.courseId?._id.length > 1 : user.courseId?._id === courseSelect)
            .filter(user => collegeSelect === 'all' ? user.collegeId?._id.length > 1 : user.collegeId?._id === collegeSelect)
        this.setState({ filteredUsers: usersfiltered })
    }

    changeHandleRoleSelect = (role) => {
        this.setState({ roleSelect: role }, () => {
            //console.log(this.state.roleSelect)
            // call filterData
            this.filterData();
        })
    }

    changeHandleCourseSelect = (course) => {
        let { colleges } = this.state;
        //console.log(colleges)
        this.setState({ courseSelect: course }, () => {
            //console.log(this.state.courseSelect)
            let cols = colleges.filter(college => course === 'all' ? college.courseId._id.length > 1 : college.courseId._id === course)
            this.setState({ filteredColleges: cols })
            // call filterData
            this.filterData();
        })
    }

    changeHandleCollegeSelect = (college) => {
        this.setState({ collegeSelect: college }, () => {
            //console.log(this.state.collegeSelect)
            this.filterData();
        })
    }

    displayData = (user) => {
        this.setState({ singleUser: user })
    }

    //deleteUser = (id) => {
        //console.log(id)
        // DeleteUser(id)
        //     .then((user) => { console.log(user) })
        //     .catch((error) => { console.log(error) })
    //}
    

    render() {
        let { filteredUsers, singleUser, filteredColleges, courses } = this.state;
        return (
            <div className={classes.Users}>
                <div className={classes.Heading}>Users</div>

                <div className={classes.Filters}>
                    <div className={classes.Filter}>
                        <form>
                            <label for="Category">Filter By Role</label>
                            <select name="role" onChange={e => this.changeHandleRoleSelect(e.target.value)}>
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
                            <select name="course" onChange={e => this.changeHandleCourseSelect(e.target.value)}>
                                <option value="all">All</option>
                                {courses.length > 1 ? courses.map((course, index) => (
                                    <option key={index} value={course._id}>{course.courseName}</option>
                                )) : null}
                            </select>
                        </form>
                    </div>
                    <div className={classes.Filter}>
                        <form>
                            <label for="Category">Filter By</label>
                            <select name="Category" onChange={e => this.changeHandleCollegeSelect(e.target.value)}>
                                <option value="all">All</option>
                                {filteredColleges.length > 1 ? filteredColleges.map((college, index) => (
                                    <option key={index} value={college._id}>{college.collegeName}</option>
                                )) : null}
                            </select>
                        </form>
                    </div>
                    {console.log(filteredUsers.length)}
                </div>

                <div className={classes.Details}>
                    <div className={classes.UserCards}>
                        <UserCard
                            data={singleUser}
                            del={this.deleteUser}
                        />
                    </div>
                    {filteredUsers.length > 1 ? <div className={classes.Listcards}>
                        {filteredUsers.map((userObj) => (
                            <div key={userObj._id} onClick={() => this.displayData(userObj)}>
                                <ListCard
                                    id={userObj.rollNumber}
                                    name={userObj.fullName}
                                    college={userObj.collegeId ? userObj.collegeId['collegeName'] : null}
                                    timeStamp={userObj.createdAt}
                                // date={userObj.date}
                                />
                            </div>
                        ))}
                    </div> : null}


                </div>

            </div>
        );
    }
}