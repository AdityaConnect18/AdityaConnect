import React from 'react';
import classes from './courses.module.css';
import { MdDelete } from "react-icons/md";
import { GetCollegesData, GetCoursesData } from '../../../SERVICES/service';


const Courses = () => {

    const [colleges, setColleges] = React.useState([{}]);
    const [courses, setCourses] = React.useState([{}]);
    const [selectColleges, setSelectColleges] = React.useState([{}]);
    const [selectDept, setSelectDept] = React.useState([{}]);

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
                var engineeringColleges = data.data.colleges.filter(college => college.courseId.courseName === "Engineering")
                setSelectColleges(engineeringColleges)
                setSelectDept(engineeringColleges[0].departments)
            })
    }

    const getCourses = async () => {
        GetCoursesData()
            .then((data) => {
                setCourses(data.data.result);
            })
    }

    const filterColleges = (id) => {
        var filteredcolleges = colleges.filter(colleges => colleges.courseId._id === id)
        setSelectColleges(filteredcolleges)
    }

    const Secondtable = () => {
        return (
            // <h1>charan</h1>
            <div className={classes.CoursesBox}>
                <table className={classes.table}>
                    <tr>
                        <th>#</th>
                        <th>Colleges</th>
                        <th></th>
                    </tr>
                    {
                        selectColleges.map((my, index) =>
                            <tr key={my._id} onClick={() => setSelectDept(my.departments)}>
                                <td>{index + 1}</td>
                                <td>{my.collegeName}</td>
                                <td><MdDelete /></td>
                            </tr>
                        )

                    }
                </table>
            </div>
        );
    }

    const ThirdTable = () => {
        return (
            <div className={classes.CoursesBox}>
                <table className={classes.table}>
                    <tr>
                        <th>#</th>
                        <th>departments</th>
                        <th></th>
                    </tr>
                    {
                        selectDept.map((my, index) =>
                            <tr key={my._id}>
                                <td>{index + 1}</td>
                                <td>{my.deptName}</td>
                                <td><MdDelete /></td>
                            </tr>
                        )

                    }
                </table>
            </div>
        )
    }

    return (
        <div className={classes.MainContainer}>
            <div className={classes.Heading}>Courses Offered</div>
            {/* {console.log(colleges)} */}
            <div className={classes.CoursesBox}>
                <table className={classes.table}>
                    <tr>
                        <th>1</th>
                        <th>Courses</th>
                        <th></th>
                    </tr>
                    {
                        courses.map((my, index) =>
                            <tr key={my._id} onClick={() => filterColleges(my._id)}>
                                <td>{index + 1}</td>
                                <td>{my.courseName}</td>
                                <td><MdDelete /></td>
                            </tr>
                        )

                    }
                </table>
            </div>
            {
                selectColleges.length > 1 ? <Secondtable /> : null
            }
            {
                selectDept.length > 1 ? <ThirdTable /> : null
            }
        </div>
    );
}

export default Courses;