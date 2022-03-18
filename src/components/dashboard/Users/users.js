import React from 'react';
import classes from './users.module.css';
import ListCard from './listCard';
import UserCard from './userCard'

const Users = (props) => {
    return(
        <div className={classes.Users}>
            <div className={classes.Heading}>Users</div>

            <div className={classes.Filters}>
            <div className={classes.Filter}>
            <form >
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
            <form >
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
            <form >
            <label for="Category">Filter By</label>
                <select name="Category">
                    <option value="all">All</option>
                    <option value="aec">Aditya Engineering College</option>
                    <option value="acet">Aditya College of Engineering & Technology</option>
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
                    <UserCard/>
                </div>
                <div className={classes.Listcards}>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <div>
            </div>
        </div>
            </div>
        </div>
    );
}

export default Users;