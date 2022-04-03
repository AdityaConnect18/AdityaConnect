import React from 'react';
import classes from './dashboard.module.css';
import UsersTable from './usersTable'
import { ImUsers } from 'react-icons/im';
import { FaNewspaper } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';
import { RiNotificationFill } from 'react-icons/ri';
import VoluTable from './voluTable';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';



const DashBoard = () => {

    const [users, setUsers] = useState([
        {
            name: "Akhil",
            idcard: "18A91A1222",
            branch: "Information Technology",
            college: "Aditya Engineering College",
            course: "Engineering",
            email: "18a91a1222@aec.edu.in",
            number: "9876543210",
            date: "21-02-2022 07:09 PM",
        },
        {
            name: "Sai",
            idcard: "18A91A1223",
            branch: "Information Technology",
            college: "Aditya College of Engineering",
            course: "Engineering",
            email: "18a91a1222@aec.edu.in",
            number: "9876543210",
            date: "21-02-2022 07:09 PM",
        },
        {
            name: "Manoj",
            idcard: "18A91A1224",
            branch: "Computer Science",
            college: "Aditya College of Engineering & Technology",
            course: "Engineering",
            email: "18a91a1222@aec.edu.in",
            number: "9876543210",
            date: "21-02-2022 07:09 PM",
        },
    ]);


    return (
        <div className={classes.Dashboard}>
            <div className={classes.Heading}>Overview of Aditya Connect</div>
            <div className={classes.Cards}>
                <div className={classes.Box}>
                    <div className={classes.Box1}>
                        <ImUsers className={classes.Icon} />
                    </div>
                    <div className={classes.Content}>
                        <p>8040</p>
                        <p>Total Users</p>
                    </div>
                </div>
                <div className={classes.Box}>
                    <div className={classes.Box2}>
                        <FaNewspaper className={classes.Icon} />
                    </div>
                    <div className={classes.Content}>
                        <p>1145</p>
                        <p>News Published</p>
                    </div>
                </div>

                <div className={classes.Box}>
                    <div className={classes.Box3}>
                        <AiFillMessage className={classes.Icon} />
                    </div>
                    <div className={classes.Content}>
                        <p>107</p>
                        <p>New Messages</p>
                    </div>
                </div>

                <div className={classes.Box}>
                    <div className={classes.Box4}>
                        <RiNotificationFill className={classes.Icon} />
                    </div>
                    <div className={classes.Content}>
                        <p>40</p>
                        <p>Notifications</p>
                    </div>
                </div>
            </div>
            <div className={classes.TwoBoxes}>
                <div className={classes.LeftBox}>
                    <div>
                        <table className={classes.table1}>
                            <caption>Recent Users</caption>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>College</th>
                                <th>Date</th>
                            </tr>
                            {users.map((user, index) => (
                                <UsersTable
                                    index={index}
                                    data={user}
                                />
                            ))}
                        </table>
                        <div className={classes.View}><NavLink className={classes.ViewConent} exact to="/users">ViewAll</NavLink></div>

                    </div>
                </div>
                <div className={classes.RightBox}>
                    <div>
                        <table className={classes.table2}>
                            <caption>Recent Volunteers</caption>
                            <tr>
                                <th>#</th>
                                <th>Name</th>

                            </tr>

                            {users.map((user, index) => (
                                <VoluTable
                                    index={index}
                                    data={user}
                                />
                            ))}
                        </table>
                        <div className={classes.View}><NavLink className={classes.ViewConent} exact to="/volunteers">ViewAll</NavLink></div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DashBoard;