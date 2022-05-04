import React,{useState, useEffect} from 'react';
import classes from './AddForm.module.css';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';


const AddForm = (props) => {
    const navigate = useNavigate();
    const {state} = useLocation();
    console.log(state)
    const [updateUser,setUpdateUser] = useState(state.user)

    const update = () =>{
        // console.log(updateUser)
        navigate('/volunteers', { state: {user : updateUser, user_index: state.user_index } });
    }

    const handleChange = (e) =>{
        // console.log(e.target.name +"  "+e.target.value)
        setUpdateUser({...updateUser,[e.target.name]:e.target.value})
    }
    return( 
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
            <form >

            <label for="Category">Name</label>
            <input type="text" name="name" onChange={(e)=>handleChange(e)} value={updateUser.adminName}  />
            <label for="Category">Email</label>
            <input type="email" name="email" onChange={(e)=>handleChange(e)} value={updateUser.email}/>
            <label for="Category">ID</label>
            <input type="text" name="idcard" onChange={(e)=>handleChange(e)} value={updateUser.empId}/>
            <label for="Category">Mobile</label>
            <input type="number" name="number" onChange={(e)=>handleChange(e)} value={updateUser.mobileNumber}/>

            <label for="Category">Select Category</label>
                <select name="course" value={updateUser.courseId.courseName} onChange={(e)=>handleChange(e)}>
                    <option value="all">All</option>
                    <option value="engineering">Engineering</option>
                    <option value="pharmacy">Pharmacy</option>  
                    <option value="mca">Management & MCA</option>
                    <option value="diploma">Diploma</option>
                </select>

            <label for="Category">Select College</label>
                <select name="college" value={updateUser.collegeId.collegeName} onChange={(e)=>handleChange(e)}>
                    <option value="aec">Aditya Engineering College</option>
                    <option value="acet">Aditya College of Engineering & Technology</option>
                    <option value="acoe">Aditya College of Engineering</option>
                </select>

             <label for="Category">Select Branch</label>
                <select name="branch" value={updateUser.DeptId.deptName} onChange={(e)=>handleChange(e)}>
                    <option value="civil">Civil Engineering</option>
                    <option value="ece">Electrical and Electronics Engineering</option>
                    <option value="mech">Mechanical Engineering</option>
                    <option value="cse">Computer Science and Engineering</option>
                    <option value="it">Information Technology</option>
                    <option value="pt">Petroleum Technology</option>
                    <option value="agri">Agricultural Engineering</option>
                    <option value="mine">Mining Engineering</option>
                    <option value="mtech">M.Tech</option>
                    <option value="others">Others</option>
                </select>
                
                <input type="button" onClick={(e)=>update(e)} value="Submit"/>
            </form>
            </div>
    </div>
    );
}

export default AddForm;