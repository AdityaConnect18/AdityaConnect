import React from "react";
import classes from "./newsfeed.module.css";
import { MdOutlineEditNote } from "react-icons/md";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { GetCollegesData, GetCategoriesData, GetCoursesData, SubmitPost } from '../../../SERVICES/service';


const EditPost = (props) => {
  const navigate = useNavigate();
  let { userDetails } = props;
  const [colleges, setColleges] = React.useState([{}]);
  const [categories, setCategories] = React.useState([{}]);
  const [collegeDict, setCollegeDict] = React.useState({});
  const [courses, setCourses] = React.useState([]);
  const [coursesDict, setCoursesDict] = React.useState({});
  const [allCheck, setAllCheck] = React.useState(false)
  const [file, setFile] = React.useState({});
  const { state } = useLocation();
  let post = undefined;
  var fileName; 
    if (state && state.post) {
        post = state.post;
        console.log("Insode Post")
        console.log(post)
        fileName = post.mediaId.split("---")[1]
        console.log(fileName)
    }

  const [allValues, setAllValues] = useState({
    _id: post?._id,
    postTitle: post?.postTitle,
    postMessage: post?.postMessage,
    categoryId: post?.categoryId._id,
    channelList: post?.channelList,
    selectedFile: post?.selectedFile,
    postedBy: post?.postedBy._id
  });

  console.log(allValues)

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
    e.preventDefault()
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
        <NavLink exact to="/settings/myposts" className={classes.Button}>
          <span>MyPost</span>
        </NavLink>
      </div>

      <div className={classes.FormContainer}>
        <form onSubmit={handleSubmit} >
          <label for="category">Select Category</label>
          <select value={allValues.categoryId} name="categoryId" onChange={e => setAllValues({ ...allValues, [e.target.name]: e.target.value })} required >
            <option >--Select Category--</option>
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
              value={allValues.postTitle}
              onChange={e => setAllValues({ ...allValues, [e.target.name]: e.target.value })}
              required />
            <label>Message</label>
            <textarea
              id="subject"
              name="postMessage"
              placeholder="Write your message..."
              value={allValues.postMessage}
              onChange={e => setAllValues({ ...allValues, [e.target.name]: e.target.value })}
              required
            ></textarea>
            <label for="upload">Upload Your Document</label>
            <input
              type="file"
              id="upload"
              name="selectedFile"
              accept="image/*"
              value={allValues.selectedFile}
              onChange={handleFileSubmit}
              required ></input>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default EditPost;
