import React, { useState, useEffect } from "react";
import classes from "./AddForm.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  GetCollegesData,
  GetCoursesData,
  InsertAdminData,
  GetRoles,
} from "../../../SERVICES/service";

const AddForm = (props) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  let user = undefined;
  let op = undefined;
  if (state && state.user) {
    user = state.user;
    op = state.operation;
  }

  const [allValues, setAllValues] = useState({
    _id: user?._id,
    mobileNumber: user?.mobileNumber,
    adminName: user?.adminName,
    email: user?.email,
    designation: user?.designation,
    password: "",
    cpassword: "",
    empId: user?.empId,
    courseId: user?.courseId._id,
    collegeId: user?.collegeId._id,
    DeptId: user?.DeptId._id,
    roleId: user?.roleId,
  });

  const initState = {
    mobileNumber: "",
    adminName: "",
    email: "",
    designation: "",
    password: "",
    cpassword: "",
    empId: "",
    courseId: "",
    collegeId: "",
    DeptId: "",
  };

  const [colleges, setColleges] = React.useState([{}]);
  const [courses, setCourses] = React.useState([{}]);
  const [filteredColleges, setFilteredColleges] = React.useState([{}]);
  const [depts, setDepts] = React.useState([]);
  const [roles, setRoles] = React.useState([]);

  useEffect(() => {
    getColleges();
    getCourses();
    getRoles();
  }, []);

  const getColleges = () => {
    GetCollegesData()
      .then((data) => {
        setColleges(data.data.colleges);
        let Engineering_colleges = data.data.colleges.filter(
          (college) => college.courseId.courseName === "Engineering"
        );
        setFilteredColleges(Engineering_colleges);
        setDepts(Engineering_colleges[0].departments);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCourses = () => {
    GetCoursesData()
      .then((data) => {
        setCourses(data.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getRoles = () => {
    GetRoles()
      .then((data) => {
        setRoles(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filterColleges = (course_Id) => {
    setAllValues({ ...allValues, courseId: course_Id });
    let cols = colleges.filter((college) => college.courseId._id === course_Id);
    setFilteredColleges(cols);
  };

  const filterDepartment = (college_Id) => {
    setAllValues({ ...allValues, collegeId: college_Id });
    setDepts(
      colleges.filter((college) => college._id === college_Id)[0].departments
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(allValues);
    if (allValues.adminName.trim().length === 0) {
      alert("Please enter valid Name");
    } else if (allValues.empId.trim().length === 0) {
      alert("Please enter valid ID");
    } else if (allValues.mobileNumber.trim().length === 0) {
      alert("Please enter valid Mobile Number");
    } else if (allValues.designation.trim().length === 0) {
      alert("Please enter valid Designation");
    } else if (allValues.password.trim().length === 0) {
      alert("Please enter valid Password");
    } else if (allValues.password != allValues.cpassword) {
      alert("Password you entered is not matching");
    } else if (
      allValues.mobileNumber.match(/^\d+/) &&
      parseInt(allValues.mobileNumber) <= 6000000000
    ) {
      alert("Invalid Mobile Number");
    } else if (
      allValues.DeptId === "" ||
      allValues.collegeId === "" ||
      allValues.courseId === "" ||
      allValues.roleId === "" ||
      allValues.DeptId === "sample" ||
      allValues.collegeId === "sample" ||
      allValues.courseId === "sample" ||
      allValues.roleId === "sample" ||
      allValues.DeptId === undefined ||
      allValues.collegeId === undefined ||
      allValues.courseId === undefined ||
      allValues.roleId === undefined
    ) {
      alert("Select Role, Course, College, Department");
    } else {
      InsertAdminData(allValues)
        .then((response) => {
          navigate("/volunteers");
          console.log(response);
        })
        .catch((err) => console.log(err));
      setAllValues({ ...initState });
    }
  };

  return (
    <div className={classes.MainContainer}>
      <div className={classes.Heading}>Volunteers</div>

      <div className={classes.Buttons}>
        <NavLink to="/volunteers" className={classes.Button}>
          <span>Volunteers</span>
        </NavLink>
        <NavLink to="/volunteers/add" className={classes.Button}>
          <span>Add Volunteers</span>
        </NavLink>
      </div>
      {op === "editdetails" ? (
        <div className={classes.FormContainer}>
          <form onSubmit={handleSubmit}>
            <label for="Category">Name</label>
            <input
              value={allValues.adminName}
              type="text"
              name="adminName"
              maxlength="50"
              required
              onChange={(e) =>
                setAllValues({ ...allValues, [e.target.name]: e.target.value })
              }
            />
            <label for="Category">Email</label>
            <input
              value={allValues.email}
              type="email"
              name="email"
              required
              onChange={(e) =>
                setAllValues({ ...allValues, [e.target.name]: e.target.value })
              }
            />
            <label for="Category">ID</label>
            <input
              value={allValues.empId}
              type="text"
              minlength="3"
              maxlength="10"
              name="empId"
              required
              onChange={(e) =>
                setAllValues({ ...allValues, [e.target.name]: e.target.value })
              }
            />
            <label for="Category">Mobile</label>
            <input
              value={allValues.mobileNumber}
              type="text"
              minlength="10"
              maxlength="10"
              name="mobileNumber"
              onChange={(e) =>
                setAllValues({ ...allValues, [e.target.name]: e.target.value })
              }
            />
            <label for="Category">Designation</label>
            <input
              value={allValues.designation}
              type="text"
              name="designation"
              maxlength="50"
              required
              onChange={(e) =>
                setAllValues({ ...allValues, [e.target.name]: e.target.value })
              }
            />
            <label for="Category">Select role</label>
            <select
              value={allValues.roleId}
              name="roleId"
              required
              onChange={(e) =>
                setAllValues({ ...allValues, [e.target.name]: e.target.value })
              }
            >
              <option value="sample">--Select role--</option>
              {roles.map((role) => (
                <option value={role._id}>{role.roleName}</option>
              ))}
            </select>

            <label for="Category">Select Course</label>
            <form>
              <select
                value={allValues.courseId}
                name="course"
                required
                onChange={(e) => filterColleges(e.target.value)}
              >
                <option value="sample">--Select your Course--</option>
                {courses.map((course) => (
                  <option key={course.id} value={course._id}>
                    {course.courseName}
                  </option>
                ))}
              </select>
            </form>

            <label for="Category">Select College</label>
            <select
              value={allValues.collegeId}
              name="college"
              required
              onChange={(e) => filterDepartment(e.target.value)}
            >
              <option value="sample">--Select your college--</option>
              {filteredColleges.map((college) => (
                <option value={college._id}>{college.collegeName}</option>
              ))}
            </select>

            <label for="Category">Select Department</label>
            <select
              value={allValues.DeptId}
              name="DeptId"
              required
              onChange={(e) =>
                setAllValues({ ...allValues, [e.target.name]: e.target.value })
              }
            >
              <option value="sample">--Select your Department--</option>
              {depts.map((dept) => (
                <option value={dept._id}>{dept.deptName}</option>
              ))}
            </select>
            <input type="submit" value="Submit" />
          </form>
        </div>
      ) : op === "updatePassword" ? (
        <div className={classes.FormContainer}>
          <form onSubmit={handleSubmit}>
            <label for="Category">Password</label>
            <input
              value={allValues.password}
              minlength="6"
              maxlength="100"
              type="password"
              name="password"
              required
              onChange={(e) =>
                setAllValues({ ...allValues, [e.target.name]: e.target.value })
              }
            />
            <label for="Category">Confirm Password</label>
            <input
              value={allValues.cpassword}
              minlength="6"
              maxlength="100"
              type="password"
              name="cpassword"
              required
              onChange={(e) =>
                setAllValues({ ...allValues, [e.target.name]: e.target.value })
              }
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      ) : (
        <div className={classes.FormContainer}>
          <form onSubmit={handleSubmit}>
            <label for="Category">Name</label>
            <input
              value={allValues.adminName}
              type="text"
              name="adminName"
              maxlength="50"
              required
              onChange={(e) =>
                setAllValues({ ...allValues, [e.target.name]: e.target.value })
              }
            />
            <label for="Category">Email</label>
            <input
              value={allValues.email}
              type="email"
              name="email"
              required
              onChange={(e) =>
                setAllValues({ ...allValues, [e.target.name]: e.target.value })
              }
            />
            <label for="Category">ID</label>
            <input
              value={allValues.empId}
              type="text"
              maxlength="10"
              minlength="3"
              name="empId"
              required
              onChange={(e) =>
                setAllValues({ ...allValues, [e.target.name]: e.target.value })
              }
            />
            <label for="Category">Mobile</label>
            <input
              value={allValues.mobileNumber}
              type="text"
              minlength="10"
              maxlength="10"
              name="mobileNumber"
              onChange={(e) =>
                setAllValues({ ...allValues, [e.target.name]: e.target.value })
              }
            />
            <label for="Category">Designation</label>
            <input
              value={allValues.designation}
              type="text"
              maxlength="50"
              name="designation"
              required
              onChange={(e) =>
                setAllValues({ ...allValues, [e.target.name]: e.target.value })
              }
            />
            <label for="Category">Password</label>
            <input
              value={allValues.password}
              minlength="6"
              maxlength="100"
              type="password"
              name="password"
              required
              onChange={(e) =>
                setAllValues({ ...allValues, [e.target.name]: e.target.value })
              }
            />
            <label for="Category">Confirm Password</label>
            <input
              value={allValues.cpassword}
              minlength="6"
              maxlength="100"
              type="password"
              name="cpassword"
              required
              onChange={(e) =>
                setAllValues({ ...allValues, [e.target.name]: e.target.value })
              }
            />

            <label for="Category">Select role</label>
            <select
              value={allValues.roleId}
              name="roleId"
              required
              onChange={(e) =>
                setAllValues({ ...allValues, [e.target.name]: e.target.value })
              }
            >
              <option value="sample">--Select role--</option>
              {roles.map((role) => (
                <option value={role._id}>{role.roleName}</option>
              ))}
            </select>

            <label for="Category">Select Course</label>
            <form>
              <select
                value={allValues.courseId}
                name="course"
                required
                onChange={(e) => filterColleges(e.target.value)}
              >
                <option value="sample">--Select your Course--</option>
                {courses.map((course) => (
                  <option key={course.id} value={course._id}>
                    {course.courseName}
                  </option>
                ))}
              </select>
            </form>

            <label for="Category">Select College</label>
            <select
              value={allValues.collegeId}
              name="college"
              required
              onChange={(e) => filterDepartment(e.target.value)}
            >
              <option value="sample">--Select your college--</option>
              {filteredColleges.map((college) => (
                <option value={college._id}>{college.collegeName}</option>
              ))}
            </select>

            <label for="Category">Select Department</label>
            <select
              value={allValues.DeptId}
              name="DeptId"
              required
              onChange={(e) =>
                setAllValues({ ...allValues, [e.target.name]: e.target.value })
              }
            >
              <option value="sample">--Select your Department--</option>
              {depts.map((dept) => (
                <option value={dept._id}>{dept.deptName}</option>
              ))}
            </select>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
    </div>
  );
};

export default AddForm;
