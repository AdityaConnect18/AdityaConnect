import React from "react";
import classes from "./Navbar.module.css";
import { MdAccountCircle } from "react-icons/md";

const Navbar = (props) => {
  let { userDetails } = props;
  return (
    <div>
      <ul className={classes.Navbar}>
        <li>
          <a href="/" className={classes.Active}>
            ADITYA CONNECT
          </a>
        </li>
        <li className={classes.Username}>
          <a href="/settings" className={classes.Uname}>
            <span className={classes.Navicon}>
              <MdAccountCircle />
            </span>
            {userDetails.adminName}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
