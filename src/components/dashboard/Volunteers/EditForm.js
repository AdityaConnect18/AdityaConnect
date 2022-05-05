import React, { useState, useEffect } from 'react';
import classes from './AddForm.module.css';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';


const AddForm = (props) => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [updateUser, setUpdateUser] = useState(state.user)

    const update = () => {
        // console.log(updateUser)
        navigate('/volunteers', { state: { user: updateUser, user_index: state.user_index } });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(updateUser)
        // setUpdateUser({ ...updateUser, [e.target.name]: e.target.value })
    }
    return (
        <div className={classes.MainContainer}>
            <div className={classes.Heading}>Volunteers</div>

            <div className={classes.Buttons}>
                <NavLink
                    exact
                    to="/volunteers"
                    className={classes.Button}>
                    <span>Volunteers</span>
                </NavLink>
                <NavLink
                    exact
                    to="/volunteers/add"
                    className={classes.Button}>
                    <span>Add Volunteers</span>
                </NavLink>
            </div>

            <div className={classes.FormContainer}>


                <form onSubmit={handleSubmit}>

                    <label for="Category">Name</label>
                    <input value={updateUser.adminName} type="text" name="adminName" required onChange={e => setUpdateUser({ ...updateUser, [e.target.name]: e.target.value })} />
                    <label for="Category">Email</label>
                    <input value={updateUser.email} type="email" name="email" required onChange={e => setUpdateUser({ ...updateUser, [e.target.name]: e.target.value })} />
                    <label for="Category">Password</label>
                    <input value={updateUser.password} minlength="6" maxlength="10" type="password" name="password" required onChange={e => setUpdateUser({ ...updateUser, [e.target.name]: e.target.value })} />
                    <label for="Category">Confirm Password</label>
                    <input value={updateUser.cpassword} minlength="6" maxlength="10" type="password" name="cpassword" required onChange={e => setUpdateUser({ ...updateUser, [e.target.name]: e.target.value })} />
                    <label for="Category">ID</label>
                    <input value={updateUser.empId} type="text" maxlength="8" name="empId" required onChange={e => setUpdateUser({ ...updateUser, [e.target.name]: e.target.value })} />
                    <label for="Category">Mobile</label>
                    <input value={updateUser.mobileNumber} type="text" minlength="10" maxlength="10" name="mobileNumber" onChange={e => setUpdateUser({ ...updateUser, [e.target.name]: e.target.value })} />

                    {/* <label for="Category">Select Course</label>
                    <form>
                        <select value={updateUser.courseId} name="course" required onChange={(e) => filterColleges(e.target.value)}>
                            <option value="sample">--Select your Course--</option>
                            {courses.map(course => (
                                <option key={course.id} value={course._id}>{course.courseName}</option>
                            ))}

                        </select>
                    </form>

                    <label for="Category">Select College</label>
                    <select value={updateUser.collegeId} name="college" required onChange={(e) => filterDepartment(e.target.value)}>
                        <option value="sample">--Select your college--</option>
                        {filteredColleges.map(college => (
                            <option value={college._id}>{college.collegeName}</option>
                        ))}
                    </select>

                    <label for="Category">Select Department</label>
                    <select value={updateUser.DeptId} name="DeptId" required onChange={e => setupdateUser({ ...updateUser, [e.target.name]: e.target.value })} >
                        <option value="sample">--Select your Department--</option>
                        {depts.map(dept => (
                            <option value={dept._id}>{dept.deptName}</option>
                        ))}
                    </select> */}
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default AddForm;