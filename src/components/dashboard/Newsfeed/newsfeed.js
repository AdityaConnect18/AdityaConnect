import React from "react";
import PostCard from "./postCard";
import classes from "./newsfeed.module.css";
import { MdOutlineEditNote } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const userData = [
  { name: "Engineering", value: "eng" },
  { name: "Pharmacy" },
  { name: "Diploma" },
  { name: "Management & MCA" },
  { name: "Aditya Engineering College (Engineering)" },
  { name: "Aditya College of Engineering & Technology (Engineering)" },
  { name: "Aditya College of Engineering (Engineering)" },
  { name: "Aditya Engineering College (Diploma)" },
  { name: "Aditya College of Engineering & Technology (Diploma)" },
  { name: "Aditya College of Engineering (Diploma)" },
  { name: "Aditya Engineering College (Management & MCA)" },
  { name: "Aditya College of Engineering & Technology (Management & MCA)" },
  { name: "Aditya Global Business School (Management & MCA)" },
  { name: "Aditya Institute of P.G. Studies (Management & MCA)" },
  { name: "Aditya Pharmacy College (Pharmacy)" },
  { name: "Aditya College of Pharmacy (Pharmacy)" },
];

const NewsFeed = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };


  return (

    <div className={classes.NewsFeed}>
      <div className={classes.Heading}>News Feed</div>
      <div className={classes.Buttons}>
        <NavLink exact to="/news" className={classes.Button}>
          <span>Publish Post</span>
        </NavLink>
        <NavLink exact to="/news/newsfeed" className={classes.Button}>
          <span>NewsFeed</span>
        </NavLink>
      </div>

      <div className={classes.FormContainer}>
        <form>
          <label for="Category">Select Category</label>
          <select name="Category">
            <option value="campusnews">Campus News</option>
            <option value="officecirculars">Office Circulars</option>
            <option value="examinations">Examinations</option>
            <option value="placements">Placements</option>
            <option value="sports">Sports</option>
            <option value="fests">Fests</option>
          </select>

          <label for="Category">Select News Channels</label> &emsp;
          <input
           type="checkbox"
           name="allSelect"
           checked={!users.some((user) => user?.isChecked !== true)}
           onChange={handleChange}
          />
          &ensp;
          <label for="all">All</label> &ensp;
          <MdOutlineEditNote />

          <div className={classes.Main}>
            <div>
                {users.map((user, index) => (
                  <div className={classes.Element} >
                    <input
                      type="checkbox"
                      name={user.name}
                      checked={user?.isChecked || false}
                      onChange={handleChange}
                    />
                    <label>{user.name}</label>
                  </div>
                ))}        
            </div>
          </div>
          <br />
          <label>Title</label>
          <input type="text" name="firstname" placeholder="Enter Title" />
          <label>Message</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
          ></textarea>
          <label for="upload">Upload Your Document</label>
          <input type="file" id="upload" name="upload"></input>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default NewsFeed;
