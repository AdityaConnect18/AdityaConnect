import React from "react";
import classes from "./newsfeed.module.css";
import { MdOutlineEditNote } from "react-icons/md";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { GetCollegesData, GetCategoriesData, GetCoursesData, UpdatePost } from '../../../SERVICES/service';


const EditPost = (props) => {
  const navigate = useNavigate();
  let { userDetails } = props;
  const [colleges, setColleges] = React.useState([{}]);
  const [categories, setCategories] = React.useState([{}]);
  const [collegeDict, setCollegeDict] = React.useState({});
  const [courses, setCourses] = React.useState([]);
  const [coursesDict, setCoursesDict] = React.useState({});
  const [allCheck, setAllCheck] = React.useState(false)
  const [file, setFile] = React.useState(undefined);
  const { state } = useLocation();
  let post = undefined;
  var fileName;
  if (state && state.post) {
    post = state.post;
    fileName = post.mediaId.split("---")[1]
  }
  console.log(post)

  const [allValues, setAllValues] = useState({
    _id: post?._id,
    postTitle: post?.postTitle,
    postMessage: post?.postMessage,
    categoryId: post?.categoryId._id,
    channelList: post?.channelList,
    selectedFile: post?.selectedFile,
    postedBy: post?.postedBy._id
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
        if (post) {
          post.channelList.forEach(channel => {
            dict[channel._id] = true;
          })
          data.data.colleges.forEach(college => {
            if (!dict[college._id]) {
              dict[college._id] = false
            }
          })
          console.log(dict)
        }
        else {
          data.data.colleges.forEach(college => {
            dict[college._id] = false;
          })
        }
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
    console.log(e.target.value)
    if (collegeDict[e.target.value] === true) {
      setAllCheck(false)
    }
    setCollegeDict({
      ...collegeDict,
      [e.target.value]: !collegeDict[e.target.value]
    })

  }

  const handlAllCheck = () => {
    if (allCheck) { // make eveything false
      let falseDict2 = {}
      Object.keys(collegeDict).forEach(key => {
        falseDict2[key] = false
      })
      setCollegeDict({
        ...collegeDict,
        ...falseDict2
      })
    }
    else { // make everything true
      let trueDict2 = {}
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
    console.log(requestObject)
    const formData = new FormData()
    formData.append("categoryId", requestObject.categoryId)
    formData.append("postTitle", requestObject.postTitle)
    formData.append("postMessage", requestObject.postMessage)
    formData.append("selectedFile", requestObject.selectedFile)
    formData.append("postedBy", requestObject.postedBy)
    formData.append("channelList", requestObject.channelList)
    formData.append("mediaId", post.mediaId)
    formData.append("id", post._id)
    console.log("FormData")
    console.log(formData)
    try {
      let postRes = await UpdatePost(formData)
      console.log("posreq")
      console.log(postRes)
      if (postRes.data) {
        navigate('/settings/myposts')
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
            {!file && <>
              <label>Present Media : {fileName}</label>
              <br></br>
              <img style={{ width: '50%', height: '50%' }} src={post.mediaId} />
              <br></br>
              <br></br>
            </>}
            <label for="upload">Upload Your Document</label>
            <input
              type="file"
              id="upload"
              name="selectedFile"
              accept="image/*"
              value={allValues.selectedFile}
              onChange={handleFileSubmit}
            ></input>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default EditPost;
