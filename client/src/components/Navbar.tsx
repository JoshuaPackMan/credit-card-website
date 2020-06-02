import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC<{}> = (props) => {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to={"/"} className="navbar-item">
          My Rewards
        </Link>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to={"/about"} className="navbar-item">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

/*
<nav>
    <ul>
        <li>
            <Link to={"/"}>My Rewards</Link>
        </li>
        <li>
            <Link to={"/about"}>About</Link>
        </li>
    </ul>
</nav>
*/
