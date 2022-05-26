import React from "react";
import classes from "./newsfeed.module.css";
import { MdOutlineEditNote } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { GetCollegesData, GetCategoriesData } from '../../../SERVICES/service';

// const userData = [
//   { name: "Engineering", value: "eng" },
//   { name: "Pharmacy" },
//   { name: "Diploma" },
//   { name: "Management & MCA" },
//   { name: "Aditya Engineering College (Engineering)" },
//   { name: "Aditya College of Engineering & Technology (Engineering)" },
//   { name: "Aditya College of Engineering (Engineering)" },
//   { name: "Aditya Engineering College (Diploma)" },
//   { name: "Aditya College of Engineering & Technology (Diploma)" },
//   { name: "Aditya College of Engineering (Diploma)" },
//   { name: "Aditya Engineering College (Management & MCA)" },
//   { name: "Aditya College of Engineering & Technology (Management & MCA)" },
//   { name: "Aditya Global Business School (Management & MCA)" },
//   { name: "Aditya Institute of P.G. Studies (Management & MCA)" },
//   { name: "Aditya Pharmacy College (Pharmacy)" },
//   { name: "Aditya College of Pharmacy (Pharmacy)" },
// ];


const NewsFeed = () => {

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

// console.log(colleges)
//  const [users, setUsers] = useState([]);

//   useEffect(() => {
//     setUsers(userData);
//   }, []);

  // const handleChange = (e) => {
  //   const { name, checked } = e.target;
  //   if (name === "allSelect") {
  //     let tempUser = users.map((user) => {
  //       return { ...user, isChecked: checked };
  //     });
  //     setUsers(tempUser);
  //   } else {
  //     let tempUser = users.map((user) =>
  //       user.name === name ? { ...user, isChecked: checked } : user
  //     );
  //     setUsers(tempUser);
  //   }
  // };

  const handleCheck = (e) => {

  }


  const [allValues, setAllValues] = useState({
    title: '',
    message: '',
    category:'',
    channels: [],
    selectedFile: null
  });

  const initState = {
      title: '',
      message: '',
      channels: '',
      category:'',
      selectedFile: null
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(allValues)
    // console.log(users)
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
          <label for="category">Select Category</label>
          <select name="category" onChange={e => setAllValues({ ...allValues, [e.target.name]: e.target.value })} required >
            <option value="sample">--Select Category--</option>
            {categories.length > 1 ? categories.map(category => (
              <option value={category._id}>{category.categoryName}</option>
               )) : null}
          </select>

          <label for="channels">Select News Channels</label> &emsp;
          <input
           type="checkbox"
           name="allSelect"
          //  checked={!users.some((user) => user?.isChecked !== true)}
          //  onChange={handleChange}
          />
          &ensp;
          <label for="all">All</label> &ensp;
          <MdOutlineEditNote />

          <div className={classes.Main}>
            <div>
                {colleges.map((college) => (
                  <div className={classes.Element} >
                    <input
                      type="checkbox"
                      name="channels"
                      value={college._id}
                      // checked={user?.isChecked || false}
                      // onChange={handleChange}
                    />
                    <label>{college.collegeName}    ({college.courseId?.courseName})</label>
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
