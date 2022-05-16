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
import { GetAdminsData } from "../../../SERVICES/service"
import { GetUSersData } from "../../../SERVICES/service";

const DashBoard = () => {

    const [admins, setAdmins] = useState([{}]);
    const [users, setUsers] = useState([{}]);
    const [fiveUsers,setFiveUsers] = useState([{}])
    const [fiveAdmins,setFiveAdmins] = useState([{}])

    React.useEffect(() => {
        GetUSersData()
            .then((data) => {
                if(Object.keys(data.data.users).length>=5)
                {
                    setFiveUsers(Array.prototype.slice.call(data.data.users, 5))

                }
                else{
                    setFiveUsers(data.data.users)
                }
            })
            .catch((error) => console.error(error))
    }, [])


    React.useEffect(() => {
        GetAdminsData()
            .then((data) => {
                if(Object.keys(data.data.data).length>=5)
                {
                    setFiveAdmins(Array.prototype.slice.call(data.data.data, 5))
                }
                else{
                    setFiveAdmins(data.data.data)
                }

            })
            .catch((error) => console.error(error))
    }, [])


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
                            
                            {fiveUsers.map((userObj, index) => (
                                <UsersTable
                                    index={index+1}
                                    data={userObj}
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

                            {fiveAdmins.map((adminObj, index) => (
                                <VoluTable
                                    index={index+1}
                                    data={adminObj}
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