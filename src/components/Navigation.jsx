import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
const Navigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Topics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Characters"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Items"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Items
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Locations"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Locations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/History"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Mistgrove History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Stories"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Short Stories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Extras"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Extras
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Feedback"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Feedback
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
