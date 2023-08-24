import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Form.css";
import show from "../images/show.png";
import hide from "../images/hide.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordIcon, setPasswordIcon] = useState(hide);
  const [passwordFieldType, setPasswordFieldType] = useState("password");

  const passwordIconHandler = () => {
    if (passwordFieldType === "password") {
      setPasswordFieldType("text");
      setPasswordIcon(show);
    } else {
      setPasswordFieldType("password");
      setPasswordIcon(hide);
    }
  };

  return (
    <div className="main">
      <div className="main-form-div">
        <div className="form-title">
          <h1>Login</h1>
        </div>

        <div className="form-input-fields">
          <div className="form-input-field-item">
            <div>
              <span>Email</span>
            </div>
            <div>
              <input
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="login-field-error-massages">
                Invalid Email Address
              </div>
            </div>
          </div>
          <br />
          <div className="form-input-field-item">
            <div>
              <span>Password</span>
            </div>
            <div>
              <input
                type={passwordFieldType}
                id="password"
                className="password-input-container"
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={passwordIcon}
                alt="show-icon"
                className="password-show-hide-icon"
                onClick={passwordIconHandler}
              />
              <div className="login-field-error-massages">
                Password not Strong
              </div>
            </div>
          </div>
        </div>
        <div className="login-field-error-massages-both">
          Email and Password Does Not matched
        </div>
        <div className="button-area">
          <button className="button">Login</button>
        </div>
        <div className="form-contents">
          <Link className="form-contents-item">Forgot Password</Link>
          <div className="form-contents-item" style={{ color: "#9b7dff" }}>
            Not a member yet? &nbsp;
            <Link
              to="/register"
              className="form-contents-item"
              style={{ fontSize: 18 }}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
