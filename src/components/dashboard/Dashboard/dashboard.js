import React from 'react';
import classes from './dashboard.module.css';
import UsersTable from './usersTable'
import {ImUsers} from 'react-icons/im';
import {FaNewspaper} from 'react-icons/fa';
import {AiFillMessage} from 'react-icons/ai';
import {RiNotificationFill} from 'react-icons/ri';
import VoluTable from './voluTable';



const DashBoard = () => {
    

    return(
        <div className={classes.Dashboard}>
        <div className={classes.Heading}>Overview of Aditya Connect</div>
        <div className={classes.Cards}>
            <div className={classes.Box}>
                <div className={classes.Box1 }>
                    <ImUsers className={classes.Icon}/>
                </div>
                <div className={classes.Content}>
                <p>8040</p>
                <p>Total Users</p>
                </div>
            </div>
            <div className={classes.Box}>
                <div className={classes.Box2}>
                    <FaNewspaper className={classes.Icon}/>
                </div>
                <div className={classes.Content}>
                <p>1145</p>
                <p>News Published</p>
                </div>
            </div>

            <div className={classes.Box}>
                <div className={classes.Box3}>
                    <AiFillMessage className={classes.Icon}/>
                </div>
                <div className={classes.Content}>
                <p>107</p>
                <p>New Messages</p>
                </div>
            </div>

            <div className={classes.Box}>
                <div className={classes.Box4}>
                  <RiNotificationFill className={classes.Icon}/>
                </div>
                <div className={classes.Content}>
                <p>40</p>
                <p>Notifications</p>
                </div>
            </div>
            </div>
            <div>  
                <UsersTable/>
                <VoluTable/>
           </div>
        </div>
    );
}

export default DashBoard;