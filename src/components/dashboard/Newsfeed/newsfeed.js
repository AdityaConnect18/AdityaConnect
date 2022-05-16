import React from "react";
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


  const [allValues, setAllValues] = useState({
    title: '',
    message: '',
    Category:'',
    selectedFile: null
  });

  const initState = {
      title: '',
      message: '',
      Category:'',
      selectedFile: null
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(allValues)
    console.log(users)
    if (allValues.Category === "sample") {  
      alert("Selected Category")
    }
    else{
        // InsertAdminData(allValues)
        //     .then(response => {
        //         navigate('/volunteers')
        //         console.log(response)
        //     })
        //     .catch(err => console.log(err))
        setAllValues({ ...initState })
      }
  }


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
        <form onSubmit={handleSubmit} >
          <label for="Category">Select Category</label>
          <select name="Category" onChange={e => setAllValues({ ...allValues, [e.target.name]: e.target.value })} required >
            <option value="sample">--Select Category--</option>
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
          <input 
            type="text" 
            name="title" 
            placeholder="Enter Title" 
            onChange={e => setAllValues({ ...allValues, [e.target.name]: e.target.value })} 
            required/>
          <label>Message</label>
          <textarea
            id="subject"
            name="message"
            placeholder="Write your message..."
            onChange={e => setAllValues({ ...allValues, [e.target.name]: e.target.value })}
            required
          ></textarea>
          <label for="upload">Upload Your Document</label>
          <input 
            type="file" 
            id="upload" 
            name="selectedFile" 
            onChange={e => setAllValues({ ...allValues, [e.target.name]: e.target.files[0]})} 
            required ></input>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default NewsFeed;
