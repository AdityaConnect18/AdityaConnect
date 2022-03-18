import react,{useEffect, useState, useRef} from 'react';
import Taskitem from '../TaskItem/Taskitem';
import Row from 'react-bootstrap/Row';
import classes from './Addtasks.module.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const Addtask= ()=>{

    const [tasks,setTasks]= useState([]);
    const [value,setValue]= useState('');
    const [addTaskclicked,setClickHandler]= useState(false);

    const listRef= useRef(null);

    useEffect(()=>{
        if(tasks.length!==0 ){
            listRef.current.focus();
        }
    },[tasks])

    const addTaskHandler= ()=>{
        setClickHandler(true);
    }


    const handleChange= (event)=>{
        event.preventDefault();
        setValue(event.target.value);

    }

    const checkEnterkey= (e)=>{
        e.preventDefault();
        if(e.keyCode=='13'){
            setTasks([value,...tasks]);
            setClickHandler(false);
            setValue('');
        }
    }
    var task=<input className={classes.Entertask}  type="text" value={value} onChange={(event)=>handleChange(event)} onKeyUp={(e)=>checkEnterkey(e)} placeholder="Enter your Task here" />

   

    const taskarr= tasks.map(function(c,i,t){
        return(
            <li className={classes.List} key={i} ref={listRef}>
                <Taskitem taskname={t[i]} />
            </li>
        )
    })

    return(
        <div>
            <Row className={classes.Mb30}>
                        <Col sm={3}>
                            <h4 className={classes.Subtitle1}>Tasks List</h4>
                        </Col>
                        <Col sm={{span:'2',offset:'7'}} className={classes.Link}>
                            <Button className={classes.Addtaskbtn} onClick={()=>addTaskHandler()}>Add Task</Button>
                        </Col>
            </Row>
        <Row>
            <ul className={classes.Items}>

                {addTaskclicked? <li className={classes.List} ref={listRef}>
                    <Taskitem taskname={task} />
                </li> : null}
                {taskarr}
            </ul>
        </Row>
        </div>
        
    )
}


export default Addtask;