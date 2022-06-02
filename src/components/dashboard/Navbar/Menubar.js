import React from 'react'
import { AiFillDashboard } from 'react-icons/ai'
import { BsNewspaper } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'
import { MdVolunteerActivism } from 'react-icons/md'
import { FaSchool } from 'react-icons/fa'
import { GrAnnounce } from 'react-icons/gr'
import { RiMessageFill } from 'react-icons/ri'
import { MdNotifications } from 'react-icons/md'
import { AiFillSetting } from 'react-icons/ai'
import { RiLogoutBoxRFill } from 'react-icons/ri'
import classes from './Menubar.module.css'
import { NavLink } from 'react-router-dom'
import authContext from '../../../CONTEXT/Auth/authContext'
const Menubar = (props) => {

  const { signOut } = React.useContext(authContext);

  return (
    <div>
      <div className={classes.Sidenav}>
        {/* <img className={classes.Logo} src={Logo141}></img> */}
        <div className={classes.Menubtns}>
          <div className={classes.Sidetabs}>
            <NavLink
              to="/dashboard"
              className={classes.SideStyle}
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#FD752C' : '#fff',
              })}
            >
              <AiFillDashboard className={classes.Sideicons} /> DashBoard
            </NavLink>
          </div>

          <div className={classes.Sidetabs}>
            <NavLink
              to="/news"
              className={classes.SideStyle}
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#FD752C' : '#fff',
              })}
            >
              <BsNewspaper className={classes.Sideicons} />
              News Feed
            </NavLink>
          </div>

          <div className={classes.Sidetabs}>
            <NavLink
              to="/users"
              className={classes.SideStyle}
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#FD752C' : '#fff',
              })}
            >
              <FaUsers className={classes.Sideicons} />
              Users
            </NavLink>
          </div>

          <div className={classes.Sidetabs}>
            <NavLink
              to="/volunteers"
              className={classes.SideStyle}
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#FD752C' : '#fff',
              })}
            >
              <MdVolunteerActivism className={classes.Sideicons} />
              Voluteers
            </NavLink>
          </div>

          <div className={classes.Sidetabs}>
            <NavLink
              to="/courses"
              className={classes.SideStyle}
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#FD752C' : '#fff',
              })}
            >
              <FaSchool className={classes.Sideicons} />
              Courses
            </NavLink>
          </div>

          <div className={classes.Sidetabs}>
            <NavLink
              to="/channels"
              className={classes.SideStyle}
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#FD752C' : '#fff',
              })}
            >
              <GrAnnounce className={classes.Sideicons} />
              Channels & Categories
            </NavLink>
          </div>

          <div className={classes.Sidetabs}>
            <NavLink
              to="/messages"
              className={classes.SideStyle}
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#FD752C' : '#fff',
              })}
            >
              <RiMessageFill className={classes.Sideicons} />
              Message
            </NavLink>
          </div>

          <div className={classes.Sidetabs}>
            <NavLink
              to="/notifications"
              className={classes.SideStyle}
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#FD752C' : '#fff',
              })}
            >
              <MdNotifications className={classes.Sideicons} />
              Notifications
            </NavLink>
          </div>

          <div className={classes.Sidetabs}>
            <NavLink
              to="/settings"
              className={classes.SideStyle}
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#FD752C' : '#fff',
              })}
            >
              <AiFillSetting className={classes.Sideicons} />
              Account Settings
            </NavLink>
          </div>

          <div onClick={() => signOut()} className={classes.Sidetabs}>
            <NavLink
              onClick={() => signOut()}
              to="/"
              className={classes.SideStyle}
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#FD752C' : '#fff',
              })}
            >
              <RiLogoutBoxRFill className={classes.Sideicons} />
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menubar
