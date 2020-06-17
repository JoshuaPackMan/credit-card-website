import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

interface LoginSignupProps {
  setIsLoggedIn: (x: boolean) => void;
}

export const LoginSignup: React.FC<LoginSignupProps> = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailedText, setLoginFailedText] = useState("");
  const [signUpFailedText, setSignUpFailedText] = useState("");
  const history = useHistory();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const login = async (name: String, pass: String) => {
    await Axios.post("http://localhost:3000/account/login", {
      name: name,
      pass: pass,
    })
      .then((res) => {
        localStorage.setItem("jwt", res.data.jwt);
        localStorage.setItem("un", res.data.name);

        props.setIsLoggedIn(true);
        history.push("/search");
      })
      .catch((err) => {
        setLoginFailedText("Incorrect username or password.");
      });
  };
  const handleSignupFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      await Axios({
        method: "POST",
        url: "http://localhost:3000/account/create",
        data: {
          name: username,
          pass: password,
        },
      });
    } catch (error) {
      if (error.response.status === 401) {
        setSignUpFailedText("This account already exists. Please login.");
        return;
      }
    }

    await login(username, password);

    // create user cards array in DB
    //let userName = localStorage.getItem("un");
    let jwt = localStorage.getItem("jwt");
    await Axios({
      method: "POST",
      //url: `http://localhost:3000/user/${userName}/cards`,
      url: `http://localhost:3000/user/cards`,
      data: {
        data: {
          userCards: [],
        },
      },
      headers: { Authorization: `Bearer ${jwt}` },
    });
  };
  const handleLoginFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="title">Login</h1>
            <form id="LoginForum" onSubmit={handleLoginFormSubmit}>
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    id="username"
                    placeholder="Username"
                    name="username"
                    onChange={handleUsernameChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    id="password"
                    placeholder="Password"
                    name="password"
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <h5 className="subtitle is-5" style={{ color: "red" }}>
                    {loginFailedText}
                  </h5>
                  <button className="button is-success" id="Login">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="column">
            <h1 className="title">Create Account</h1>
            <form id="createAccount" onSubmit={handleSignupFormSubmit}>
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Username"
                    id="createdusername"
                    name="username"
                    onChange={handleUsernameChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    id="createdpassword"
                    placeholder="Password"
                    name="password"
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <h5 className="subtitle is-5" style={{ color: "red" }}>
                    {signUpFailedText}
                  </h5>
                  <button
                    className="button is-success"
                    id="SignUp"
                    type="submit"
                  >
                    Sign up
                  </button>
                  <h6 className="subtitle is-6">
                    Remember to create a unique username and password for each
                    website you use. Don't reuse the same password across
                    multiple websites and accounts.
                  </h6>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
