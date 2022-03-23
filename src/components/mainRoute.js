import React from "react";
import {Route} from 'react-router-dom';
import { Routes } from "react-router";
import DashBoard from './dashboard/Dashboard/dashboard';
import NewsFeed from './dashboard/Newsfeed/newsfeed';
import Users from './dashboard/Users/users';
import Volunteers from './dashboard/Volunteers/volunteers';
import Courses from './dashboard/Courses/courses';
import Channels from './dashboard/Channels/channels';
import Messages from './dashboard/Messages/messages';
import Notifications from './dashboard/Notifications/notifications';
import Settings from './dashboard/Settings/settings';
import PostCard from "./dashboard/Newsfeed/postCard";
import AddForm from "./dashboard/Volunteers/AddForm";

const MainRoute = (props)=>{
    return(
      <div>
        <Routes>
            <Route exact path='/' element={<DashBoard/>}></Route>
            <Route exact path='/news' element={<NewsFeed/>}></Route>
            <Route exact path='/news/newsfeed' element={<PostCard/>}></Route>
            <Route exact path='/users' element={<Users/>}></Route>
            <Route exact path='/volunteers' element={<Volunteers/>}></Route>
            <Route exact path='/volunteers/add' element={<AddForm/>}></Route>
            <Route exact path='/courses' element={<Courses/>}></Route>
            <Route exact path='/channels' element={<Channels/>}></Route>
            <Route exact path='/messages' element={<Messages/>}></Route>
            <Route exact path='/notifications' element={<Notifications/>}></Route>
            <Route exact path='/settings' element={<Settings/>}></Route>
        </Routes>
      </div>  
    );
}

export default MainRoute;