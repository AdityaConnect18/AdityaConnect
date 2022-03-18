import React from 'react';
import classes from './channels.module.css';
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";

const Channels = () => {
    return(
        <div className={classes.MainContainer}>
            <div className={classes.Heading}>Messaging Channels & Categories</div>

            <div className={classes.CoursesBox}>
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
                    <td><MdModeEditOutline/> </td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Engineering</td>
                    <td><MdModeEditOutline/> </td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Pharmcy</td>
                    <td><MdModeEditOutline/> </td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Management & MCA</td>
                    <td><MdModeEditOutline/> </td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Diploma</td>
                    <td><MdModeEditOutline/> </td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Aditya Engineering College (Engineering)</td>
                    <td><MdModeEditOutline/> </td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Aditya College of Engineering & Technology (Engineering)</td>
                    <td><MdModeEditOutline/> </td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Aditya College of Engineering (Engineering)</td>
                    <td><MdModeEditOutline/> </td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Aditya Pharmacy College (Pharmacy)</td>
                    <td><MdModeEditOutline/> </td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>	Aditya College of Pharmacy (Pharmacy)</td>
                    <td><MdModeEditOutline/> </td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Aditya Engineering College (Management & MCA)</td>
                    <td><MdModeEditOutline/> </td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Aditya College of Engineering & Technology (Management & MCA)</td>
                    <td><MdModeEditOutline/> </td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Aditya College of Engineering (Management & MCA)</td>
                    <td><MdModeEditOutline/> </td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Aditya Institute of P.G. Studies (Management & MCA)</td>
                    <td><MdModeEditOutline/> </td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Aditya Global Business School (Management & MCA)</td>
                    <td><MdModeEditOutline/> </td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Aditya Engineering College (Diploma)</td>
                    <td><MdModeEditOutline/> </td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>Aditya College of Engineering & Technology (Diploma)</td>
                    <td><MdModeEditOutline/> </td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>Aditya College of Engineering (Diploma)</td>
                    <td><MdModeEditOutline/> </td>
                    <td><MdDelete/></td>
                </tr>
            
            </table>
        </div>
        <div className={classes.CoursesBox}>
                <table className={classes.table}>
                <caption>Categories</caption>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Campus News</td>
                    <td><MdModeEditOutline/> </td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Office Circulars</td>
                    <td><MdModeEditOutline/> </td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Examinations</td>
                    <td><MdModeEditOutline/> </td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Placements</td>
                    <td><MdModeEditOutline/> </td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Sports</td>
                    <td><MdModeEditOutline/> </td>
                    <td><MdDelete/></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Fests</td>
                    <td><MdModeEditOutline/> </td>
                    <td><MdDelete/></td>
                </tr>
                
            
            </table>
        </div>
        </div>
    );
}

export default Channels;