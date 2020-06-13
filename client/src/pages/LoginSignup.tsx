import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

export const LoginSignup: React.FC<{}> = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailedText, setLoginFailedText] = useState("");
  const history = useHistory();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const login = async () => {
    await Axios.post("http://localhost:3000/account/login", {
      name: username,
      pass: password,
    })
      .then((res) => {
        localStorage.setItem("jwt", res.data.jwt);
        localStorage.setItem("un", username);

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
    await Axios({
      method: "POST",
      url: "http://localhost:3000/account/create",
      data: {
        name: username,
        pass: password,
      },
    });

    login();
  };
  const handleLoginFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
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
