import React from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import DashBoard from '../components/dashboard/Dashboard/dashboard';
import NewsFeed from '../components/dashboard/Newsfeed/newsfeed';
import Users from '../components/dashboard/Users/users';
import Volunteers from '../components/dashboard/Volunteers/volunteers';
import Courses from '../components/dashboard/Courses/courses';
import Channels from '../components/dashboard/Channels/channels';
import Messages from '../components/dashboard/Messages/messages';
import Notifications from '../components/dashboard/Notifications/notifications';
import Settings from '../components/dashboard/Settings/settings';
import PostCard from "../components/dashboard/Newsfeed/postCard";
import AddForm from "../components/dashboard/Volunteers/AddForm";
import Login from "../components/LoginForm/login"
// import authContext from "../CONTEXT/Auth/authContext";
import Navbar from "../components/dashboard/Navbar/Navbar";
import Menubar from "../components/dashboard/Navbar/Menubar";
import classes from '../App.module.css';

const MainRoute = (props) => {
  // const AuthContext = useContext(authContext);


  function BigBoardLayout({ children }) {
    return (
      <div>
        <Navbar />
        <Menubar />
        <div className={classes.Right}>
          {children}
        </div>
      </div>
    );
  }

  function RequireAuth({ children }) {
    var payLoad = localStorage.getItem('payLoad');
    console.log("Inside RequireAuth")
    return payLoad ? <BigBoardLayout><Outlet /></BigBoardLayout> : <Navigate to="/" />

  }



  return (
    <div>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route path='/dashboard' element={<DashBoard />}></Route>
          <Route path='/news' element={<NewsFeed />}></Route>
          <Route path='/news/newsfeed' element={<PostCard />}></Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/volunteers' element={<Volunteers />}></Route>
          <Route path='/volunteers/add' element={<AddForm />}></Route>
          <Route path='/courses' element={<Courses />}></Route>
          <Route path='/channels' element={<Channels />}></Route>
          <Route path='/messages' element={<Messages />}></Route>
          <Route path='/notifications' element={<Notifications />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
        </Route>
        <Route path='/' element={<Login />}></Route>
      </Routes>
    </div>

  );
}

export default MainRoute;