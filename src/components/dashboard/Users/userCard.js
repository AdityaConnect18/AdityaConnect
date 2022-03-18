import React from 'react';
import classes from './userCard.module.css';
import {CgProfile} from 'react-icons/cg';
import {FaIdBadge} from 'react-icons/fa';
import {FaGraduationCap} from 'react-icons/fa';
import {FaUniversity} from 'react-icons/fa';
import {FaFortAwesome} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {MdWifiCalling3} from 'react-icons/md';
import {ImBin2} from 'react-icons/im';
import Button from 'react-bootstrap/Button';




const UserCard = (props) => {
    return(
            <div className={classes.Userbox}>

                <div className={classes.Mainbox}>
                    <CgProfile className={classes.MainIcon}/>
                    <a className={classes.Maintitle}>Akhil Grandhi</a>
                </div>
                
                <p className={classes.Sidetitle}>General Info</p>
                <hr className={classes.Line} />
                <div className={classes.General}>
                    <div className={classes.Menubtns}>
                        <div className={classes.Sidetabs}>
                            <FaIdBadge className={classes.Sideicons}/>
                            <a>18A91A1222</a>
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
                    <a>18a91a1222@aec.edu.in</a>
                    </div>

                    <div className={classes.Sidetabs}>
                    <MdWifiCalling3 className={classes.Sideicons}/>
                    <a>9876543210</a>
                    </div>
                </div>
                </div>

                <Button className={classes.Remove}><ImBin2 className={classes.Removeicon}/>Remove</Button>

            </div>
    );
}

export default UserCard;