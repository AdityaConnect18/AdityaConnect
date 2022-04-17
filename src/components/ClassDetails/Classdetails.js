import react from 'react';
import classes from './Classdetails.module.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {FaGraduationCap} from 'react-icons/fa';
import {FaCalendarAlt} from 'react-icons/fa';
import {IoTimeSharp} from 'react-icons/io5';
import {CgTimelapse} from 'react-icons/cg';



const Classdetail= (props)=>{
    return(
        <div className={classes.Content}>
            <div className={classes.About}>
                <p className={classes.Presentclass}>Present Class</p>
                <p className={classes.Classname}>Computer Networks</p>
                <p className={classes.Subjectcode}>R165098</p>
            </div>
            <Row>
                <Col xs={2} className={classes.Icons}>
                    <div className={classes.Icon}><FaGraduationCap className={classes.Icon1}/></div>
                </Col>
                <Col xs={10}>
                    <p className={classes.Title}>Stuart Little</p>
                    <p className={classes.Subtitle}>Faculty Name</p>
                </Col>
            </Row>
            <Row>
                <Col xs={2} className={classes.Icons}>
                    <div className={classes.Icon}><FaCalendarAlt className={classes.Icon1}/></div>
                </Col>
                <Col xs={10}>
                    <p className={classes.Title}>11 July, 2021</p>
                    <p className={classes.Subtitle}>Today</p>
                </Col>
            </Row>
            <Row>
                <Col xs={2} className={classes.Icons}>
                    <div className={classes.Icon}><IoTimeSharp className={classes.Icon1}/></div>
                </Col>
                <Col xs={10}>
                    <p className={classes.Title}>11:10-12:00 PM</p>
                    <p className={classes.Subtitle}>Timings</p>
                </Col>
            </Row>
            <Row>
                <Col xs={2} className={classes.Icons}>
                    <div className={classes.Icon}><CgTimelapse className={classes.Icon1}/></div>
                </Col>
                <Col xs={10}>
                    <p className={classes.Title}>50 Min</p>
                    <p className={classes.Subtitle}>Duration</p>
                </Col>
            </Row>
            <Row>
                <div className={classes.Lastdiv}>
                    <Button className={classes.Attendancebtn}>Mark as Present</Button>
                </div>
            </Row>
        </div>
    )
}

export default Classdetail;