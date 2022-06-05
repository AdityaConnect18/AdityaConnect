import React from 'react';
import classes from './dashboard.module.css';
import UsersTable from './usersTable'
import { ImUsers } from 'react-icons/im';
import { FaNewspaper } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';
// import { RiNotificationFill } from 'react-icons/ri';
import { RiAdminFill } from 'react-icons/ri';
import VoluTable from './voluTable';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GetUSersData, GetAdminsData, GetMessages, GetPosts } from "../../../SERVICES/service";
import ClockLoader from "react-spinners/ClockLoader";
import { css } from "@emotion/react";


const DashBoard = () => {

    const [adminsCount, setAdminsCount] = useState();
    const [usersCount, setUsersCount] = useState();
    const [messagesCount, setMessagesCount] = useState();
    const [postsDataCount, setPostsDataCount] = useState();
    const [fiveUsers, setFiveUsers] = useState([{}])
    const [fiveAdmins, setFiveAdmins] = useState([{}])
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#FD752C");

    const override = css`
    display: block;
    margin: auto 0;
    top: 220px;
    left: 45%;
    `;

    React.useEffect(() => {
        GetPosts()
            .then((data) => {
                setPostsDataCount(Object.keys(data.data.data).length);
            })
            .catch((error) => console.error(error))
    }, [])


    React.useEffect(() => {
        GetMessages()
            .then((data) => {
                setMessagesCount(Object.keys(data.data.data).length);
            })
            .catch((error) => console.error(error))
    }, [])

    React.useEffect(() => {
        GetUSersData()
            .then((data) => {
                setLoading(!loading)
                setUsersCount(Object.keys(data.data.users).length)
                if (Object.keys(data.data.users).length >= 5) {

                    setFiveUsers(data.data.users.slice(0, 5))
                }
                else {
                    setFiveUsers(data.data.users)
                }
            })
            .catch((error) => console.error(error))
    }, [])

    React.useEffect(() => {
        GetAdminsData()
            .then((data) => {
                setAdminsCount(Object.keys(data.data.data).length)
                if (Object.keys(data.data.data).length >= 5) {
                    setFiveAdmins(data.data.data.slice(0, 5))
                }
                else {
                    console.log(data.data.data)
                    setFiveAdmins(data.data.data)
                }

            })
            .catch((error) => console.error(error))
    }, [])


    return (
        <div>
        {
            (loading)? <ClockLoader css={override} color={color} loading={loading} size={100}  />
            :
        <div className={classes.Dashboard}>
            <div className={classes.Heading}>Overview of Aditya Connect</div>
            <div className={classes.Cards}>
                <div className={classes.Box}>
                    <div className={classes.Box1}>
                        <ImUsers className={classes.Icon} />
                    </div>
                    <div className={classes.Content}>
                        <p>{usersCount}</p>
                        <p>Total Users</p>
                    </div>
                </div>
                <div className={classes.Box}>
                    <div className={classes.Box2}>
                        <FaNewspaper className={classes.Icon} />
                    </div>
                    <div className={classes.Content}>
                        <p>{postsDataCount}</p>
                        <p>News Published</p>
                    </div>
                </div>

                <div className={classes.Box}>
                    <div className={classes.Box3}>
                        <AiFillMessage className={classes.Icon} />
                    </div>
                    <div className={classes.Content}>
                        <p>{messagesCount}</p>
                        <p>New Messages</p>
                    </div>
                </div>

                <div className={classes.Box}>
                    <div className={classes.Box4}>
                        <RiAdminFill className={classes.Icon} />
                    </div>
                    <div className={classes.Content}>
                        <p>{adminsCount}</p>
                        <p>Total Admins</p>
                    </div>
                </div>
            </div>
            <div className={classes.TwoBoxes}>
                <div className={classes.LeftBox}>
                    <div>
                        <table className={classes.table1}>
                            <caption>Recent Users</caption>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>College</th>
                                    <th>Date</th>
                                </tr>
                            </thead>

                            <tbody>
                                {fiveUsers.map((userObj, index) => (
                                    <UsersTable
                                        key={index}
                                        index={index + 1}
                                        data={userObj}
                                    />
                                ))}
                            </tbody>
                        </table>
                        <div className={classes.View}><NavLink className={classes.ViewConent} to="/users">ViewAll</NavLink></div>

                    </div>
                </div>
                <div className={classes.RightBox}>
                    <div>
                        <table className={classes.table2}>
                            <caption>Recent Volunteers</caption>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>

                                </tr>
                            </thead>

                            <tbody>
                                {fiveAdmins.map((adminObj, index) => (
                                    <VoluTable
                                        key={index}
                                        index={index + 1}
                                        data={adminObj}
                                    />
                                ))}
                            </tbody>

                        </table>
                        <div className={classes.View}><NavLink className={classes.ViewConent} to="/volunteers">ViewAll</NavLink></div>
                    </div>
                </div>
            </div>

        </div>
        }
        </div>
    );
}

export default DashBoard;