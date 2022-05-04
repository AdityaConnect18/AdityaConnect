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
    const [oneAdmin, setOneAdmin] = useState([{}])
    const [twoAdmin, setTwoAdmin] = useState([{}])
    const [threeAdmin, setThreeAdmin] = useState([{}])
    const [fourAdmin, setFourAdmin] = useState([{}])
    const [fiveAdmin, setFiveAdmin] = useState([{}])

    const [users, setUsers] = useState([{}]);
    const [oneUser, setOneUser] = useState([{}])
    const [twoUser, setTwoUser] = useState([{}])
    const [threeUser, setThreeUser] = useState([{}])
    const [fourUser, setFourUser] = useState([{}])
    const [fiveUser, setFiveUser] = useState([{}])

    React.useEffect(() => {
        GetUSersData()
          .then((data) => {
            //console.log(data.data.users);
            setUsers(data.data.users);
            setOneUser(data.data.users[0])
            setTwoUser(data.data.users[1])
            setThreeUser(data.data.users[2])
            setFourUser(data.data.users[3])
            setFiveUser(data.data.users[4])
          })
          .catch((error) => console.error(error))
      }, [])


      React.useEffect(() => {
        GetAdminsData()
          .then((data) => {
            //console.log(data.data.data);
            setAdmins(data.data.data);
            setOneAdmin(data.data.data[0])
            setTwoAdmin(data.data.data[1])
            setThreeAdmin(data.data.data[2])
            setFourAdmin(data.data.data[3])
            setFiveAdmin(data.data.data[4])
            console.log(oneAdmin)
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
                            
                                <UsersTable
                                    index={"1"}
                                    data={oneUser}
                                />
                                <UsersTable
                                    index={"2"}
                                    data={twoUser}
                                />
                                <UsersTable
                                    index={"3"}
                                    data={threeUser}
                                />
                            
                                <UsersTable
                                    index={"4"}
                                    data={fourUser}
                                />
                                <UsersTable
                                    index={"5"}
                                    data={fiveUser}
                                />
                            
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
                                
                             
                                <VoluTable
                                    index={"1"}
                                    data={oneAdmin}
                                />
                                <VoluTable
                                    index={"2"}
                                    data={twoAdmin}
                                />
                                <VoluTable
                                    index={"3"}
                                    data={threeAdmin}
                                />
                                <VoluTable
                                    index={"4"}
                                    data={fourAdmin}
                                />
                                <VoluTable
                                    index={"5"}
                                    data={fiveAdmin}
                                />
                                
                            
                        </table>
                        <div className={classes.View}><NavLink className={classes.ViewConent} exact to="/volunteers">ViewAll</NavLink></div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DashBoard;