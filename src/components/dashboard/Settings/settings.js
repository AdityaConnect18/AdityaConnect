import React from 'react';
import classes from './settings.module.css';
import {CgProfile} from 'react-icons/cg';
import {FaIdBadge} from 'react-icons/fa';
import {FaGraduationCap} from 'react-icons/fa';
import {FaUniversity} from 'react-icons/fa';
import {FaFortAwesome} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {MdWifiCalling3} from 'react-icons/md';
import {MdModeEditOutline} from 'react-icons/md';
import {GoKey} from 'react-icons/go';
import {ImBin2} from 'react-icons/im';
import Button from 'react-bootstrap/Button';

const Settings = () => {
    return(
        <div className={classes.MainContainer}>
            <div className={classes.Heading}>Account Settings</div>

            <div className={classes.Userbox}>

                <div className={classes.Mainbox}>
                    <CgProfile className={classes.MainIcon}/>
                    <a className={classes.Maintitle}>KALYAN ANTHARAJU</a>
                </div>
                
                <p className={classes.Sidetitle}>General Info</p>
                <hr className={classes.Line} />
                <div className={classes.General}>
                    <div className={classes.Menubtns}>
                        <div className={classes.Sidetabs}>
                            <FaIdBadge className={classes.Sideicons}/>
                            <a>12345</a>
                        </div>

                        <div className={classes.Sidetabs}>
                        <FaGraduationCap className={classes.Sideicons}/>
                        <a>Information Technology</a>
                        </div>

                        <div className={classes.Sidetabs}>
                        <FaUniversity className={classes.Sideicons}/>
                        <a>Aditya Engineering College</a>
                        </div>

                        <div className={classes.Sidetabs}>
                        <FaFortAwesome className={classes.Sideicons}/>
                        <a>Engineering</a>
                        </div>
                    </div>

                </div>

                <p className={classes.Sidetitle}>Contact Details</p>
                <hr className={classes.Line} />
                <div className={classes.Contact}>
                <div className={classes.Menubtns}>
                    <div className={classes.Sidetabs}>
                    <MdEmail className={classes.Sideicons}/>
                    <a>kalyan.antharaju@aec.edu.in</a>
                    </div>

                    <div className={classes.Sidetabs}>
                    <MdWifiCalling3 className={classes.Sideicons}/>
                    <a>9703464137</a>
                    </div>
                </div>
                </div>
                <div className={classes.BelowButton}>
                    <Button className={classes.Edit}><MdModeEditOutline className={classes.Buttonicon1}/>Edit</Button>    
                    <Button className={classes.Update}><GoKey className={classes.Buttonicon2}/>Update Password</Button>
                   
                </div>
            </div>
        </div>
    );
}

export default Settings;