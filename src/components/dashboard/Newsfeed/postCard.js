import React from 'react';
import classes from './postCard.module.css'
import { NavLink } from 'react-router-dom'
import { useState } from "react";
import { GetPosts } from "../../../SERVICES/service"
import Card from "./card"

const PostCard = () => {

  const [postsData, setPostsData] = useState([{}]);

  React.useEffect(() => {
    GetPosts()
      .then((data) => {
        setPostsData(data.data.data);
      })
      .catch((error) => console.error(error))
  }, [])


  return (
    <div className={classes.NewsFeed}>
      <div className={classes.Heading}>News Feed</div>
      <div className={classes.Buttons}>
        <NavLink
          exact
          to="/news"
          className={classes.Button}>
          <span>Publish Post</span>
        </NavLink>
        <NavLink
          exact
          to="/news/newsfeed"
          className={classes.Button}>
          <span>NewsFeed</span>
        </NavLink>
      </div>
        
      {postsData.map((onePost, index) => (
        <Card
          index={index}
          Title={onePost.postTitle}
          msg={onePost.postMessage}
          timeStamp={onePost.createdAt}
          postedBy={onePost.postedBy?.adminName}
          mediaUrl={onePost.mediaId}
        />
      ))}

    </div>


  );
}
export default PostCard;