import React from 'react';
import classes from './volunteers.module.css';
import VListCard from './vlistCard';
import VUserCard from './vuserCard'
import AddForm from './AddForm';

const Volunteers = (props) => {
    return(
        <div className={classes.MainContainer}>
            <div className={classes.Heading}>Volunteers</div>

            <div className={classes.Buttons}>
            <button className={classes.Button}><span>Volunteers</span></button>
            <button className={classes.Button}><span>Add Volunteers</span></button>
            </div>
            

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

            
            {/* <div className={classes.Details}>

                    <div className={classes.UserCards}>
                        <VUserCard/>
                    </div>

                    <div className={classes.Listcards}>
                    <VListCard/>
                    <VListCard/>
                    <VListCard/>
                    <VListCard/>
                    <VListCard/>
                    <VListCard/>
                    <VListCard/>
                    <div>
            </div>

            </div>

            </div> */}

            <div className={classes.AddForm}>
                <AddForm/>
            </div>
            
        </div>
    );
}

export default Volunteers;