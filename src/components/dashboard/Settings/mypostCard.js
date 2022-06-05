import React from "react";
import classes from "./postCard.module.css";
import { useState } from "react";
import { GetAdminPosts, DeletePost } from "../../../SERVICES/service";
import Card from "./card";
import { NavLink, useNavigate } from "react-router-dom";
import ClockLoader from "react-spinners/ClockLoader";
import { css } from "@emotion/react";

const MyPostCard = (props) => {
  const [postsData, setPostsData] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#FD752C");

  function parseJwt(token) {
    if (token) {
      return JSON.parse(atob(token.split(".")[1]));
    }
  }

  React.useEffect(() => {
    let token = localStorage.getItem("payLoad");
    let userDetails = parseJwt(token);
    GetAdminPosts(userDetails._id)
      .then((data) => {
        setPostsData(data.data.posts);
        setLoading(!loading);
      })
      .catch((error) => console.error(error));
  }, []);

  const navigate = useNavigate();
  const [postIndex, setPostIndex] = useState(0);

  const deletePost = (index) => {
    setPostIndex(index);
    let deletePrompt = prompt("Please enter DELETE to remove the Post");
    if (deletePrompt == "DELETE") {
      DeletePost(postsData[postIndex]._id)
        .then((res) => {
          alert("Post Removed Successfully");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
      postsData.splice(postIndex, 1);
    } else {
      alert("Unable to remove the Post");
    }
  };

  const editPost = (postEditData) => {
    navigate("/settings/myposts/editpost", {
      state: { post: postEditData, post_index: postIndex },
    });
  };

  const override = css`
    display: block;
    margin: auto 0;
    top: 140px;
    left: 45%;
  `;

  return (
    <div className={classes.NewsFeed}>
      <div className={classes.Heading}>My Posts</div>
      <div className={classes.Buttons}>
        <NavLink exact to="/settings" className={classes.Button}>
          <span>MyProfile</span>
        </NavLink>
        <NavLink exact to="/settings/myposts" className={classes.Button}>
          <span>MyPosts</span>
        </NavLink>
      </div>

      {loading ? (
        <ClockLoader
          css={override}
          color={color}
          loading={loading}
          size={100}
        />
      ) : (
        postsData.map((onePost, index) => (
          <Card
            data={onePost}
            key={index}
            index={index}
            Title={onePost.postTitle}
            msg={onePost.postMessage}
            timeStamp={onePost.createdAt}
            postedBy={onePost.postedBy?.adminName}
            mediaUrl={onePost.mediaId}
            likes={onePost.likedUsersList ? onePost.likedUsersList?.length : 0}
            del={deletePost}
            edit={editPost}
          />
        ))
      )}
    </div>
  );
};
export default MyPostCard;
