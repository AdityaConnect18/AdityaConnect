import React from 'react';
import classes from './courses.module.css';
import { GetCollegesData, GetCoursesData } from '../../../SERVICES/service';
import Bar1 from './Bar/bar1';
import Bar2 from './Bar/bar2';
import Bar3 from './Bar/bar3';

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
            <div className={classes.CoursesBox}>
                <Bar2 data={selectColleges} setSelectDept={setSelectDept} />
            </div>
        );
    }

    const ThirdTable = () => {
        return (
            <Bar3 data={selectDept} />
        )
    }

    return (
        <div className={classes.MainContainer}>
            <div className={classes.Heading}>Courses Offered</div>
            
            <Bar1 data={courses} filterColleges={filterColleges}  />
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