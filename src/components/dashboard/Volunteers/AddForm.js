import React from 'react';
import classes from './AddForm.module.css';
import { NavLink } from 'react-router-dom';


const AddForm = (props) => {
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
                <form >

                    <label for="Category">Name</label>
                    <input type="text" name="name" />
                    <label for="Category">Email</label>
                    <input type="email" name="email" />
                    <label for="Category">Password</label>
                    <input type="password" name="password" />
                    <label for="Category">Confirm Password</label>
                    <input type="password" name="cpassword" />
                    <label for="Category">ID</label>
                    <input type="text" name="id" />
                    <label for="Category">Mobile</label>
                    <input type="number" name="number" />

                    <label for="Category">Select Category</label>
                    <select name="course">
                        <option value="all">All</option>
                        <option value="engineering">Engineering</option>
                        <option value="pharmacy">Pharmacy</option>
                        <option value="mca">Management & MCA</option>
                        <option value="diploma">Diploma</option>
                    </select>

                    <label for="Category">Select College</label>
                    <select name="college">
                        <option value="aec">Aditya Engineering College</option>
                        <option value="acet">Aditya College of Engineering & Technology</option>
                        <option value="acoe">Aditya College of Engineering</option>
                    </select>

                    <label for="Category">Select Branch</label>
                    <select name="branch">
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





                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default AddForm;