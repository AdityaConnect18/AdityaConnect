import React from 'react';
import classes from './postCard.module.css'
import { useState } from "react";
import { GetAdminPosts, DeletePost } from "../../../SERVICES/service"
import Card from "./card"
import { NavLink, useNavigate } from "react-router-dom";

const MyPostCard = (props) => {
  const [postsData, setPostsData] = useState([{}]);
  function parseJwt(token) {
    if (token) {
      return JSON.parse(atob(token.split('.')[1]));
    }
  }

  React.useEffect(() => {
    let token = localStorage.getItem("payLoad")
    let userDetails = parseJwt(token)
    GetAdminPosts(userDetails._id)
      .then((data) => {
        setPostsData(data.data.posts);
      })
      .catch((error) => console.error(error))
  }, [])

  const navigate = useNavigate();
  const [postIndex, setPostIndex] = useState(0)


  const deletePost = (index) => {
    setPostIndex(index)
    DeletePost(postsData[postIndex]._id)
      .then((res) => { console.log(res) })
      .catch((err) => { console.log(err) })
    postsData.splice(postIndex, 1)
  }

  const editPost = (postEditData) => {
    navigate('/settings/myposts/editpost', { state: { post: postEditData, post_index: postIndex } });
  }

  
  // console.log(singlePost)

  return (
    <div className={classes.NewsFeed}>
      <div className={classes.Heading}>My Posts</div>
      <div className={classes.Buttons}>
        <NavLink
          exact
          to="/settings"
          className={classes.Button}>
          <span>MyProfile</span>
        </NavLink>
        <NavLink
          exact
          to="/settings/myposts"
          className={classes.Button}>
          <span>MyPosts</span>
        </NavLink>
      </div>
    
      {postsData.map((onePost, index) => (
        <Card
          data={onePost}
          key={index}
          index={index}
          Title={onePost.postTitle}
          msg={onePost.postMessage}
          timeStamp={onePost.createdAt}
          postedBy={onePost.postedBy?.adminName}
          mediaUrl={onePost.mediaId}
          del={deletePost}
          edit={editPost}
        />
      ))}

    </div>


  );
}
export default MyPostCard;