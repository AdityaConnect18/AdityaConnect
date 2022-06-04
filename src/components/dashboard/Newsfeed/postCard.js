import React from 'react';
import classes from './postCard.module.css'
import { NavLink } from 'react-router-dom'
import { useState } from "react";
import { GetPosts } from "../../../SERVICES/service"
import Card from "./card"
import ClockLoader from "react-spinners/ClockLoader";
import { css } from "@emotion/react";

const PostCard = () => {

  const [postsData, setPostsData] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#FD752C");
  

  React.useEffect(() => {
    GetPosts()
      .then((data) => {
        setLoading(!loading)
        setPostsData(data.data.data);
      })
      .catch((error) => console.error(error))
  }, [])

  const override = css`
  display: block;
  margin: auto 0;
  top: 140px;
  left: 45%;
  `;

  console.log(postsData)

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
      {
      (loading)? <ClockLoader   css={override} color={color} loading={loading} size={100}  />
      :
      postsData.map((onePost, index) => (
        <Card
          index={index}
          Title={onePost.postTitle}
          msg={onePost.postMessage}
          timeStamp={onePost.createdAt}
          postedBy={onePost.postedBy?.adminName}
          mediaUrl={onePost.mediaId}
          likes={onePost.likedUsersList? onePost.likedUsersList?.length : 0}
        />
      ))
      }

    </div>


  );
}
export default PostCard;