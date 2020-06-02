import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC<{}> = (props) => {
  return (
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
