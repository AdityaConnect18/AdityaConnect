import React, { useState, useEffect } from 'react';
import classes from './AddForm.module.css';
import { NavLink } from 'react-router-dom';
import { GetCollegesData, GetCoursesData, InsertAdminData } from "../../../SERVICES/service";


const AddForm = (props) => {

    const [allValues, setAllValues] = useState({
        mobileNumber: '',
        adminName: '',
        email: '',
        password: '',
        cpassword: '',
        empId: '',
        courseId: '',
        collegeId: '',
        DeptId: '',
    });

    const initState = {
        mobileNumber: '',
        adminName: '',
        email: '',
        password: '',
        cpassword: '',
        empId: '',
        courseId: '',
        collegeId: '',
        DeptId: '',
    }

    const [colleges, setColleges] = React.useState([{}]);
    const [courses, setCourses] = React.useState([{}]);
    const [filteredColleges, setFilteredColleges] = React.useState([{}]);
    const [depts, setDepts] = React.useState([]);


    useEffect(() => {
        getColleges();
        getCourses();
    }, [])

    const getColleges = () => {
        GetCollegesData()
            .then((data) => {
                console.log(data.data.colleges);
                setColleges(data.data.colleges)
                let Engineering_colleges = data.data.colleges.filter(college => college.courseId.courseName === 'Engineering')
                setFilteredColleges(Engineering_colleges)
                setDepts(Engineering_colleges[0].departments)
            })
            .catch((error) => { console.log(error) })
    };

    const getCourses = () => {
        GetCoursesData()
            .then((data) => {
                console.log(data.data.result)
                setCourses(data.data.result)
            })
            .catch((error) => { console.log(error) })
    };

    const filterColleges = (course_Id) => {
        setAllValues({ ...allValues, courseId: course_Id })
        console.log(course_Id)
        let cols = colleges.filter(college => college.courseId._id === course_Id)
        setFilteredColleges(cols)
    }

    const filterDepartment = (college_Id) => {
        console.log(college_Id)
        setAllValues({ ...allValues, collegeId: college_Id })
        setDepts(colleges.filter(college => college._id === college_Id)[0].departments)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(allValues)
        InsertAdminData(allValues)
            .then(response => console.log(response))
            .catch(err => console.log(err))
        setAllValues({ ...initState })

    }

    return (
        <div className={classes.MainContainer}>
            <div className={classes.Heading}>Volunteers</div>

            <div className={classes.Buttons}>
                <NavLink
                    to="/volunteers"
                    className={classes.Button}>
                    <span>Volunteers</span>
                </NavLink>
                <NavLink
                    to="/volunteers/add"
                    className={classes.Button}>
                    <span>Add Volunteers</span>
                </NavLink>
            </div>

            <div className={classes.FormContainer}>
                <form onSubmit={handleSubmit}>

                    <label for="Category">Name</label>
                    <input value={allValues.adminName} type="text" name="adminName" onChange={e => setAllValues({ ...allValues, [e.target.name]: e.target.value })} />
                    <label for="Category">Email</label>
                    <input value={allValues.email} type="email" name="email" onChange={e => setAllValues({ ...allValues, [e.target.name]: e.target.value })} />
                    <label for="Category">Password</label>
                    <input value={allValues.password} type="password" name="password" onChange={e => setAllValues({ ...allValues, [e.target.name]: e.target.value })} />
                    <label for="Category">Confirm Password</label>
                    <input value={allValues.cpassword} type="password" name="cpassword" onChange={e => setAllValues({ ...allValues, [e.target.name]: e.target.value })} />
                    <label for="Category">ID</label>
                    <input value={allValues.empId} type="text" name="empId" onChange={e => setAllValues({ ...allValues, [e.target.name]: e.target.value })} />
                    <label for="Category">Mobile</label>
                    <input value={allValues.mobileNumber} type="number" name="mobileNumber" onChange={e => setAllValues({ ...allValues, [e.target.name]: e.target.value })} />

                    <label for="Category">Select Course</label>
                    <form>
                        <select value={allValues.courseId} name="course" onChange={(e) => filterColleges(e.target.value)}>
                            <option value="sample">--Select your Course--</option>
                            {courses.map(course => (
                                <option key={course.id} value={course._id}>{course.courseName}</option>
                            ))}

                        </select>
                    </form>

                    <label for="Category">Select College</label>
                    <select value={allValues.collegeId} name="college" onChange={(e) => filterDepartment(e.target.value)}>
                        <option value="sample">--Select your college--</option>
                        {filteredColleges.map(college => (
                            <option value={college._id}>{college.collegeName}</option>
                        ))}
                    </select>

                    <label for="Category">Select Department</label>
                    <select value={allValues.DeptId} name="DeptId" onChange={e => setAllValues({ ...allValues, [e.target.name]: e.target.value })} >
                        <option value="sample">--Select your Department--</option>
                        {depts.map(dept => (
                            <option value={dept._id}>{dept.deptName}</option>
                        ))}
                    </select>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default AddForm;