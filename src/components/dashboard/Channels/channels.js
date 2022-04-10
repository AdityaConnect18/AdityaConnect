import React from 'react';
import classes from './channels.module.css';
import { MdDelete } from "react-icons/md";
import { GetCollegesData, GetCategoriesData } from '../../../SERVICES/service';

const Channels = () => {

    const [colleges, setColleges] = React.useState([{}]);
    const [categories, setCategories] = React.useState([{}]);

    React.useEffect(() => {
        try {
            getColleges();
            getCategories();
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

    const getCategories = () => {
        GetCategoriesData()
            .then(data => {
                setCategories(data.data.result)
            })
    }

    const ChannelsTable = () => {
        return (
            <>
                <div className={classes.CoursesBox}>
                    <table className={classes.table}>
                        <tr>
                            <th>#</th>
                            <th>Channels - Colleges</th>
                            <th></th>
                        </tr>
                        {
                            colleges.map((my, index) =>
                                <tr key={my._id} >
                                    <td>{index + 1}</td>
                                    <td>{my.collegeName} ({my.courseId.courseName})</td>
                                    <td><MdDelete /></td>
                                </tr>
                            )

                        }
                    </table>
                </div>
            </>
        )
    }

    const CategoriesTable = () => {
        return (
            <>
                <div className={classes.CoursesBox}>
                    <table className={classes.table}>
                        <tr>
                            <th>#</th>
                            <th>Categories</th>
                            <th></th>
                        </tr>
                        {
                            categories.map((my, index) =>
                                <tr key={my._id} >
                                    <td>{index + 1}</td>
                                    <td>{my.categoryName}</td>
                                    <td><MdDelete /></td>
                                </tr>
                            )

                        }
                    </table>
                </div>
            </>
        )
    }

    return (
        <div className={classes.MainContainer}>
            <div className={classes.Heading}>Messaging Channels & Categories</div>
            {
                colleges.length > 1 ? <ChannelsTable /> : null
            }

            {
                categories.length > 1 ? <CategoriesTable /> : null
            }
        </div>
    );
}

// eslint-disable-next-line no-lone-blocks
{/* <div className={classes.CoursesBox}>
<table className={classes.table}>
    <caption>Channels</caption>
    <tr>
        <th>#</th>
        <th>Name</th>
        <th></th>
        <th></th>
    </tr>
    <tr>
        <td>1</td>
        <td>All</td>
        <td><MdModeEditOutline /> </td>
        <td><MdDelete /></td>
    </tr>
    <tr>
        <td>2</td>
        <td>Engineering</td>
        <td><MdModeEditOutline /> </td>
        <td><MdDelete /></td>
    </tr>
    <tr>
        <td>3</td>
        <td>Pharmcy</td>
        <td><MdModeEditOutline /> </td>
        <td><MdDelete /></td>
    </tr>
    <tr>
        <td>4</td>
        <td>Management & MCA</td>
        <td><MdModeEditOutline /> </td>
        <td><MdDelete /></td>
    </tr>
    <tr>
        <td>5</td>
        <td>Diploma</td>
        <td><MdModeEditOutline /> </td>
        <td><MdDelete /></td>
    </tr>
    <tr>
        <td>6</td>
        <td>Aditya Engineering College (Engineering)</td>
        <td><MdModeEditOutline /> </td>
        <td><MdDelete /></td>
    </tr>
    <tr>
        <td>7</td>
        <td>Aditya College of Engineering & Technology (Engineering)</td>
        <td><MdModeEditOutline /> </td>
        <td><MdDelete /></td>
    </tr>
    <tr>
        <td>8</td>
        <td>Aditya College of Engineering (Engineering)</td>
        <td><MdModeEditOutline /> </td>
        <td><MdDelete /></td>
    </tr>
    <tr>
        <td>9</td>
        <td>Aditya Pharmacy College (Pharmacy)</td>
        <td><MdModeEditOutline /> </td>
        <td><MdDelete /></td>
    </tr>
    <tr>
        <td>10</td>
        <td>	Aditya College of Pharmacy (Pharmacy)</td>
        <td><MdModeEditOutline /> </td>
        <td><MdDelete /></td>
    </tr>
    <tr>
        <td>11</td>
        <td>Aditya Engineering College (Management & MCA)</td>
        <td><MdModeEditOutline /> </td>
        <td><MdDelete /></td>
    </tr>
    <tr>
        <td>12</td>
        <td>Aditya College of Engineering & Technology (Management & MCA)</td>
        <td><MdModeEditOutline /> </td>
        <td><MdDelete /></td>
    </tr>
    <tr>
        <td>13</td>
        <td>Aditya College of Engineering (Management & MCA)</td>
        <td><MdModeEditOutline /> </td>
        <td><MdDelete /></td>
    </tr>
    <tr>
        <td>14</td>
        <td>Aditya Institute of P.G. Studies (Management & MCA)</td>
        <td><MdModeEditOutline /> </td>
        <td><MdDelete /></td>
    </tr>
    <tr>
        <td>15</td>
        <td>Aditya Global Business School (Management & MCA)</td>
        <td><MdModeEditOutline /> </td>
        <td><MdDelete /></td>
    </tr>
    <tr>
        <td>16</td>
        <td>Aditya Engineering College (Diploma)</td>
        <td><MdModeEditOutline /> </td>
        <td><MdDelete /></td>
    </tr>
    <tr>
        <td>17</td>
        <td>Aditya College of Engineering & Technology (Diploma)</td>
        <td><MdModeEditOutline /> </td>
        <td><MdDelete /></td>
    </tr>
    <tr>
        <td>18</td>
        <td>Aditya College of Engineering (Diploma)</td>
        <td><MdModeEditOutline /> </td>
        <td><MdDelete /></td>
    </tr>

</table>
</div> */}

export default Channels;