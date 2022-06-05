import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import DashBoard from "../components/dashboard/Dashboard/dashboard";
import NewsFeed from "../components/dashboard/Newsfeed/newsfeed";
import Users from "../components/dashboard/Users/users";
import Volunteers from "../components/dashboard/Volunteers/volunteers";
import Courses from "../components/dashboard/Courses/courses";
import Channels from "../components/dashboard/Channels/channels";
import Messages from "../components/dashboard/Messages/messages";
import Notifications from "../components/dashboard/Notifications/notifications";
import Settings from "../components/dashboard/Settings/settings";
import PostCard from "../components/dashboard/Newsfeed/postCard";
import AddForm from "../components/dashboard/Volunteers/AddForm";
import Login from "../components/LoginForm/login";
import MyPostCard from "../components/dashboard/Settings/mypostCard";
import Navbar from "../components/dashboard/Navbar/Navbar";
import Menubar from "../components/dashboard/Navbar/Menubar";
import EditPost from "../components/dashboard/Settings/updatePost";
import classes from "../App.module.css";
import authContext from "../CONTEXT/Auth/authContext";

const MainRoute = () => {
  const { payLoad } = React.useContext(authContext);

  let userDetails = undefined;
  if (payLoad) {
    userDetails = JSON.parse(atob(payLoad.split(".")[1]));
  } else {
    let userPayLoad = localStorage.getItem("payLoad");
    if (userPayLoad) {
      userDetails = JSON.parse(atob(userPayLoad.split(".")[1]));
    }
  }

  function BigBoardLayout({ children }) {
    return (
      <div>
        <Navbar userDetails={userDetails} />
        <Menubar />
        <div className={classes.Right}>{children}</div>
      </div>
    );
  }

  function RequireAuth({ children }) {
    var payLoad = localStorage.getItem("payLoad");
    // console.log("Inside RequireAuth")
    return payLoad ? (
      <BigBoardLayout>
        <Outlet />
      </BigBoardLayout>
    ) : (
      <Navigate to="/" />
    );
  }

  return (
    <div>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<DashBoard />}></Route>
          <Route
            path="/news"
            element={<NewsFeed userDetails={userDetails} />}
          ></Route>
          <Route path="/news/newsfeed" element={<PostCard />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/volunteers" element={<Volunteers />}></Route>
          <Route path="/volunteers/add" element={<AddForm />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/channels" element={<Channels />}></Route>
          <Route path="/messages" element={<Messages />}></Route>
          <Route path="/notifications" element={<Notifications />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/settings/myposts" element={<MyPostCard />}></Route>
          <Route
            path="/settings/myposts/editpost"
            element={<EditPost />}
          ></Route>
        </Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoute;
