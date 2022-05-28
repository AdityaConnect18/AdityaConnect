import React from "react";
import classes from "./newsfeed.module.css";
import { MdOutlineEditNote } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { GetCollegesData, GetCategoriesData, GetCoursesData, SubmitPost } from '../../../SERVICES/service';


const NewsFeed = (props) => {
  const navigate = useNavigate();
  let { userDetails } = props;
  const [colleges, setColleges] = React.useState([{}]);
  const [categories, setCategories] = React.useState([{}]);
  const [collegeDict, setCollegeDict] = React.useState({});
  const [courses, setCourses] = React.useState([]);
  const [coursesDict, setCoursesDict] = React.useState({});
  const [allCheck, setAllCheck] = React.useState(false)
  const [file, setFile] = React.useState({});

  const [allValues, setAllValues] = useState({
    postTitle: '',
    postMessage: '',
    categoryId: '',
    channelList: [],
    selectedFile: null,
    postedBy: userDetails?._id
  });

  const initState = {
    postTitle: '',
    postMessage: '',
    categoryId: '',
    channelList: [],
    selectedFile: null,
    postedBy: userDetails?._id
  }

  React.useEffect(() => {
    try {
      getColleges();
      getCategories();
      getCourses();
    } catch (error) {
      console.log(error)
    }
  }, [])

  const getColleges = () => {
    GetCollegesData()
      .then((data) => {
        setColleges(data.data.colleges)
        let dict = {}
        data.data.colleges.forEach(college => {
          dict[college._id] = false;
        })
        setCollegeDict(dict)
      })
  }

  const getCategories = () => {
    GetCategoriesData()
      .then(data => {
        setCategories(data.data.result)
      })
  }

  const getCourses = () => {
    GetCoursesData()
      .then(data => {
        setCourses(data.data.result)
        let dict = {}
        data.data.result.forEach(course => {
          dict[course._id] = false;
        })
        setCoursesDict(dict)
      })
  }


  const handleCheck = (e) => {
    if (collegeDict[e.target.value] === true) {
      setAllCheck(false)
    }
    setCollegeDict({
      ...collegeDict,
      [e.target.value]: !collegeDict[e.target.value]
    })

  }

  const handleCourseCheck = (e) => {
    if (coursesDict[e.target.value] === true) {
      setAllCheck(false)
    }
    setCoursesDict({
      ...coursesDict,
      [e.target.value]: !coursesDict[e.target.value]
    })

    let collegeIdsOfCourse = colleges
      .filter(college => college.courseId?._id === e.target.value)
      .map(college => college._id)
    let trueDict = {}
    collegeIdsOfCourse.forEach(collegeId => {
      trueDict[collegeId] = !collegeDict[collegeId]
    })
    setCollegeDict({
      ...collegeDict,
      ...trueDict
    })
    console.log(coursesDict)

  }

  const handlAllCheck = () => {
    if (allCheck) { // make eveything false
      let falseDict = {}
      let falseDict2 = {}
      Object.keys(coursesDict).forEach(key => {
        falseDict[key] = false
      })
      setCoursesDict({
        ...coursesDict,
        ...falseDict
      })

      Object.keys(collegeDict).forEach(key => {
        falseDict2[key] = false
      })
      setCollegeDict({
        ...collegeDict,
        ...falseDict2
      })
    }
    else { // make everything true
      console.log("in else")
      let trueDict = {}
      let trueDict2 = {}
      Object.keys(coursesDict).forEach(key => {
        trueDict[key] = true
      })
      setCoursesDict({
        ...coursesDict,
        ...trueDict
      })

      Object.keys(collegeDict).forEach(key => {
        trueDict2[key] = true
      })
      setCollegeDict({
        ...collegeDict,
        ...trueDict2
      })
    }
    setAllCheck(prevCheck => !prevCheck)
  }

  const handleFileSubmit = (e) => {
    setFile(e.target.files[0])
    console.log(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let channelIds = [];
    Object.keys(collegeDict).forEach(collegeId => {
      if (collegeDict[collegeId] === true) {
        channelIds.push(collegeId)
      }
    })
    let requestObject = {
      ...allValues,
      channelList: channelIds
    }
    requestObject.selectedFile = file
    const formData = new FormData()
    formData.append("categoryId", requestObject.categoryId)
    formData.append("postTitle", requestObject.postTitle)
    formData.append("postMessage", requestObject.postMessage)
    formData.append("selectedFile", requestObject.selectedFile)
    formData.append("postedBy", requestObject.postedBy)
    formData.append("channelList", requestObject.channelList)
    try {
      let postRes = await SubmitPost(formData)
      console.log(postRes)
      if (postRes.data !== undefined) {
        navigate('/news/newsfeed')
      }
    } catch (error) {
      console.log(error.message)
      alert(error.message)
    }
    setAllValues({
      ...allValues,
      ...initState
    })
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
          <select name="categoryId" onChange={e => setAllValues({ ...allValues, [e.target.name]: e.target.value })} required >
            <option value="sample">--Select Category--</option>
            {categories.length > 1 ? categories.map(category => (
              <option value={category._id}>{category.categoryName}</option>
            )) : null}
          </select>

          <label for="channels">Select News Channels</label> &emsp;
          <input
            type="checkbox"
            onChange={handlAllCheck}
            checked={allCheck}
          />
          &ensp;
          <label for="all">All</label> &ensp;
          <MdOutlineEditNote />

          <br />
          <br />
          <div className={classes.Main}>
            <div>
              {courses.map((course) => (
                <span>
                  <input
                    type="checkbox"
                    name="channels"
                    value={course._id}
                    onClick={handleCourseCheck}
                    checked={coursesDict[course._id]}
                  />
                  <label>{course.courseName}</label>
                </span>
              ))}
            </div>
          </div>

          <br />
          <div className={classes.Main}>
            <div>
              {colleges.map((college) => (
                <div className={classes.Element} >
                  <input
                    type="checkbox"
                    name="channels"
                    value={college._id}
                    checked={collegeDict[college._id]}
                    onClick={handleCheck}
                  />
                  <label>{college.collegeName}    ({college.courseId?.courseName})</label>
                </div>
              ))}
            </div>
          </div>

          <br />

          <div>
            <label>Title</label>
            <input
              type="text"
              name="postTitle"
              placeholder="Enter Title"
              onChange={e => setAllValues({ ...allValues, [e.target.name]: e.target.value })}
              required />
            <label>Message</label>
            <textarea
              id="subject"
              name="postMessage"
              placeholder="Write your message..."
              onChange={e => setAllValues({ ...allValues, [e.target.name]: e.target.value })}
              required
            ></textarea>
            <label for="upload">Upload Your Document</label>
            <input
              type="file"
              id="upload"
              name="selectedFile"
              accept="image/*"
              onChange={handleFileSubmit}
              required ></input>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default NewsFeed;
