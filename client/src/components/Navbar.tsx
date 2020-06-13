import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoginLogoutBtn } from "./LoginLogoutBtn";
import { useHistory } from "react-router-dom";

export const Navbar: React.FC<{}> = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();
  const handleLoginSignup = () => {
    history.push("/loginSignup");
  };
  const handleSignout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("un");
    history.push("/search");
  };
  useEffect(() => {
    console.log("in Navbar useEffect");
    let loggedIn = false;
    if (localStorage.getItem("jwt") != null) {
      loggedIn = true;
    }

    setIsLoggedIn(loggedIn);
  }, []);
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
        <Link to={"/search"} className="navbar-item">
          Search
        </Link>
        <Link to={"/about"} className="navbar-item">
          About
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          {isLoggedIn ? (
            <LoginLogoutBtn handleClick={handleSignout} text="Signout" />
          ) : (
            <LoginLogoutBtn
              handleClick={handleLoginSignup}
              text="Login/Signup"
            />
          )}
        </div>
      </div>
    </nav>
  );
};
