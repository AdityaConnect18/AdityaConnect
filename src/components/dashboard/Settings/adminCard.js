import React from 'react';
import classes from './adminCard.module.css';
import { CgProfile } from 'react-icons/cg';
import { FaIdBadge } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import { FaUniversity } from 'react-icons/fa';
import { FaFortAwesome } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { MdWifiCalling3 } from 'react-icons/md';

const AdminCard = (props) => {
    return (

        <div className={classes.Userbox}>
            <div className={classes.Mainbox}>
                <CgProfile className={classes.MainIcon} />
                <a className={classes.Maintitle}>{props.data.adminName}</a>
            </div>

            <p className={classes.Sidetitle}>General Info</p>
            <hr className={classes.Line} />
            <div className={classes.General}>
                <div className={classes.Menubtns}>
                    <div className={classes.Sidetabs}>
                        <FaIdBadge className={classes.Sideicons} />
                        <a>{props.data.empId}</a>
                    </div>

                    {props.data.DeptId ? <div className={classes.Sidetabs}>
                        <FaGraduationCap className={classes.Sideicons} />
                        <a>{props.data.DeptId.deptName}</a>
                    </div> : null}



                    {
                        props.data.collegeId ? <div className={classes.Sidetabs}>
                            <FaUniversity className={classes.Sideicons} />
                            <a>{props.data.collegeId.collegeName}</a>
                        </div> : null

                    }
                    {
                        props.data.courseId ? <div className={classes.Sidetabs}>
                            <FaFortAwesome className={classes.Sideicons} />
                            <a>{props.data.courseId.courseName}</a>
                        </div> : null
                    }
                </div>
            </div>

            <p className={classes.Sidetitle}>Contact Details</p>
            <hr className={classes.Line} />
            <div className={classes.Contact}>
                <div className={classes.Menubtns}>
                    <div className={classes.Sidetabs}>
                        <MdEmail className={classes.Sideicons} />
                        <a>{props.data.email}</a>
                    </div>

                    <div className={classes.Sidetabs}>
                        <MdWifiCalling3 className={classes.Sideicons} />
                        <a>{props.data.mobileNumber}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminCard;
