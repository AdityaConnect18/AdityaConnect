import React from 'react';
import classes from './courses.module.css';
import { GetCollegesData, GetCoursesData } from '../../../SERVICES/service';
import Bar1 from './Bar/bar1';
import Bar2 from './Bar/bar2';
import Bar3 from './Bar/bar3';
import ClockLoader from "react-spinners/ClockLoader";
import { css } from "@emotion/react";
import { useState } from "react";

const Courses = () => {

    const [colleges, setColleges] = useState([{}]);
    const [courses, setCourses] = useState([{}]);
    const [selectColleges, setSelectColleges] = useState([{}]);
    const [selectDept, setSelectDept] = useState([{}]);
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#FD752C");

    React.useEffect(() => {
        try {
            getColleges();
            getCourses();
        } catch (error) {
            console.log(error)
        }
    }, [])

    const override = css`
    display: block;
    margin: auto 0;
    top: 220px;
    left: 45%;
    `;

    const getColleges = () => {
        GetCollegesData()
            .then((data) => {
                setLoading(!loading)
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
        <div>
            {
            (loading)? <ClockLoader   css={override} color={color} loading={loading} size={100}  />
            :
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
            }
        </div>
    );
}

export default Courses;