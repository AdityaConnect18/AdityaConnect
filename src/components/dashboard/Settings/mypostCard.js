import React from 'react';
import classes from './postCard.module.css'
import { NavLink } from 'react-router-dom'
import {useState} from "react";
import {GetPosts} from "../../../SERVICES/service"
import Card from "./card"

const MyPostCard = () => {

  const [postsData, setPostsData] = useState([{}]);
  
      React.useEffect(() => {
        GetPosts()
          .then((data) => {
            setPostsData(data.data.data);
          })
          .catch((error) => console.error(error))
      }, [])

  console.log(postsData)

  
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
              />
          ))}
       
        </div>
    
        
    );
}
export default MyPostCard;