import react from 'react';
import classes from './Taskitem.module.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {MdModeEdit} from 'react-icons/md';
import {MdDelete} from 'react-icons/md';


const Taskitem= (props)=>{
    return(
        <Container fluid className={classes.Item}>
            <Row className={classes.Content}>
                <Col xs={7}>
                    <div className={classes.Task}>
                        <div className={classes.Bullet}></div>
                        <p className={classes.Taskname}>{props.taskname}</p>
                    </div>
                </Col>
                <Col xs={{span:'3', offset:'2'}}  className={classes.Controlsec} >
                        <Button className={classes.Editbtn}><MdModeEdit/></Button>
                        <Button className={classes.Deletebtn}><MdDelete/></Button>
                        <form >
                            <input type="checkbox" className={classes.Checkbox}/>
                        </form>
                </Col>
            </Row>
        </Container>
    )
}


export default Taskitem;