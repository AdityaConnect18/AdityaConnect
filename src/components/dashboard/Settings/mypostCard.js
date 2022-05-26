import React from 'react';
import classes from './postCard.module.css'
import { NavLink } from 'react-router-dom'
import {useState} from "react";
import {GetAdminPosts} from "../../../SERVICES/service"
import Card from "./card"

const MyPostCard = () => {

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
        console.log(data)
        setPostsData(data.data.posts);
      })
      .catch((error) => console.error(error))
  }, [])

  const [postsData, setPostsData] = useState([{}]);
    
    return(
        <div className={classes.NewsFeed}>
            <div className={classes.Heading}>My Posts</div>
            <div className={classes.Buttons}>
            <NavLink 
            exact
            to="/settings"
            className={classes.Button}>
            <span>Publish Post</span>
            </NavLink>
            <NavLink 
            exact
            to="/settings/myposts"
            className={classes.Button}>
            <span>NewsFeed</span>
            </NavLink>
          </div>
          <div className={classes.Filter}>
            <form>
              <label for="Category">Filter By</label>
              <select name="Category">
                <option value="campusnews">Campus News</option>
                <option value="officecirculars">Office Circulars</option>
                <option value="examinations">Examinations</option>
                <option value="placements">Placements</option>
                <option value="sports">Sports</option>
                <option value="fests">Fests</option>
              </select>
            </form>
          </div>
      {postsData.map((onePost,index) => (
              <Card 
              index={index}
              Title={onePost.postTitle}
              msg={onePost.postMessage}
              timeStamp={onePost.createdAt}
              postedBy = {onePost.postedBy?.adminName}
              />
          ))}
       
        </div>
    
        
    );
}
export default MyPostCard;