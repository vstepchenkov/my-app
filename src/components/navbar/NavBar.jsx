import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div className={`${classes.item}`}>
        <NavLink to="/profile" activeClassName={classes.active}>
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" activeClassName={classes.active}>
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="">News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="">Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="">Settings</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
