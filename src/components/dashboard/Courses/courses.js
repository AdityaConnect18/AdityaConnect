import React from 'react';
import classes from './courses.module.css';
import { MdDelete } from "react-icons/md";
import { GetCollegesData, GetCourses } from '../../../SERVICES/service';


const Courses = () => {

    const [colleges, setColleges] = React.useState([{}]);
    const [courses, setCourses] = React.useState([{}]);
    const [selectColleges, setSelectColleges] = React.useState([{}]);

    React.useEffect(() => {
        try {
            getColleges();
            getCourses();
        } catch (error) {
            console.log(error)
        }
    }, [])

    const getColleges = () => {
        GetCollegesData()
            .then((data) => {
                setColleges(data.data.colleges)
            })
    }

    const getCourses = async () => {
        GetCourses()
            .then((data) => {
                setCourses(data.data.result);
            })
    }

    const hepressed = (id) => {
        console.log("hello" + id)
    }

    const Secondtable = () => {
        return (
            <h1>charan</h1>
        );
    }

    return (
        <div className={classes.MainContainer}>
            <div className={classes.Heading}>Courses Offered</div>
            {/* {console.log(colleges)} */}
            <div className={classes.CoursesBox}>
                <table className={classes.table}>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th></th>
                    </tr>
                    {
                        courses.map((my, index) =>
                            <tr key={my._id} onClick={() => hepressed(my._id)}>
                                <td>{index + 1}</td>
                                <td>{my.courseName}</td>
                                <td><MdDelete /></td>
                            </tr>
                        )

                    }
                </table>
            </div>
            {
                // console.log(selectColleges.length)
                selectColleges.length > 1 ? <Secondtable /> : null
            }
            {/* <SubList /> */}
        </div>
    );
}

export default Courses;