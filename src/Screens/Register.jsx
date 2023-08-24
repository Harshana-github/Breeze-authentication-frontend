import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Form.css";
import show from "../images/show.png";
import hide from "../images/hide.png";

const Register = () => {
  const [password, setPassword] = useState("");

  const [passwordIcon, setPasswordIcon] = useState(hide);
  const [passwordFieldType, setPasswordFieldType] = useState("password");

  const [confPasswordIcon, setConfPasswordIcon] = useState(hide);
  const [confPasswordFieldType, setConfPasswordFieldType] =
    useState("password");

  const passwordIconHandler = () => {
    if (passwordFieldType === "password") {
      setPasswordFieldType("text");
      setPasswordIcon(show);
    } else {
      setPasswordFieldType("password");
      setPasswordIcon(hide);
    }
  };

  const connfPasswordIconHandler = () => {
    if (confPasswordFieldType === "password") {
      setConfPasswordFieldType("text");
      setConfPasswordIcon(show);
    } else {
      setConfPasswordFieldType("password");
      setConfPasswordIcon(hide);
    }
  };

  return (
    <div className="main">
      <div className="main-form-div">
        <div className="form-title">
          <h1>Register</h1>
        </div>

        <div className="form-input-fields">
          <div className="form-input-field-item">
            <div>
              <span>Email</span>
            </div>
            <div>
              <input />
              <div className="login-field-error-massages">
                Invalid Email Address
              </div>
            </div>
          </div>
          <br />
          <div className="form-input-field-item">
            <div>
              <span>Name</span>
            </div>
            <div>
              <input />
              <div className="login-field-error-massages">
                Cannot add Numbers
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
          <br />
          <div className="form-input-field-item">
            <div>
              <span>Con. Password</span>
            </div>
            <div>
              <input
                type={confPasswordFieldType}
                id="password"
                className="password-input-container"
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={confPasswordIcon}
                alt="show-icon"
                className="password-show-hide-icon"
                onClick={connfPasswordIconHandler}
              />
              <div className="login-field-error-massages">
                Password not matched
              </div>
            </div>
          </div>
        </div>
        <div className="button-area">
          <button className="button">Signup</button>
        </div>
        <div className="form-contents">
          <div className="form-contents-item" style={{ color: "#9b7dff" }}>
            Already a member? &nbsp;
            <Link
              to="/login"
              className="form-contents-item"
              style={{ fontSize: 18 }}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
