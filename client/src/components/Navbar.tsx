import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { LoginLogoutBtn } from "./LoginLogoutBtn";
import { useHistory } from "react-router-dom";

interface NavbarProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (x: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const history = useHistory();
  const handleLoginSignup = () => {
    history.push("/loginSignup");
  };
  const handleSignout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("un");
    props.setIsLoggedIn(false);
    history.push("/about");
  };
  useEffect(() => {
    let loggedIn = false;
    if (localStorage.getItem("jwt") != null) {
      loggedIn = true;
    }

    props.setIsLoggedIn(loggedIn);
  }, [props]);
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          {props.isLoggedIn ? (
            <LoginLogoutBtn handleClick={handleSignout} text="Signout" />
          ) : (
            <LoginLogoutBtn
              handleClick={handleLoginSignup}
              text="Login/Sign up"
            />
          )}
        </div>
        <Link to={"/"} className="navbar-item">
          My Cards
        </Link>
        <Link to={"/search"} className="navbar-item">
          Search
        </Link>
        <Link to={"/about"} className="navbar-item">
          About
        </Link>
      </div>

      {/* <div className="navbar-end">
        <div className="navbar-item">
          {props.isLoggedIn ? (
            <LoginLogoutBtn handleClick={handleSignout} text="Signout" />
          ) : (
            <LoginLogoutBtn
              handleClick={handleLoginSignup}
              text="Login/Sign up"
            />
          )}
        </div>
      </div> */}
    </nav>
  );
};
