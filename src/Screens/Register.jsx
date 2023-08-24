import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Form.css";
import show from "../images/show.png";
import hide from "../images/hide.png";
import right from "../images/right.png";
import wrong from "../images/wrong.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordIcon, setPasswordIcon] = useState(hide);
  const [passwordFieldType, setPasswordFieldType] = useState("password");

  const [confPasswordIcon, setConfPasswordIcon] = useState(hide);
  const [confPasswordFieldType, setConfPasswordFieldType] =
    useState("password");

  const [isValidEmail, setIsValidEmail] = useState(null);

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  let validationTimeout;

  const emailHandler = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    clearTimeout(validationTimeout);

    if (inputEmail === "") {
      setIsValidEmail(null);
    } else {
      validationTimeout = setTimeout(() => {
        const emailValidation = emailPattern.test(inputEmail);
        setIsValidEmail(emailValidation);
      }, 1);
    }
  };

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

  const wrongIconHandler = (e) => {
    if (isValidEmail === false) {
      setEmail((prevEmail) => "");
      setIsValidEmail(null);
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
              <input
                type="text"
                id="email"
                value={email}
                onChange={emailHandler}
                placeholder="Enter your email address"
              />
              {isValidEmail === true || isValidEmail === false ? (
                <img
                  src={isValidEmail === true ? right : wrong}
                  alt="right-wrong-icon"
                  className="password-right-wrong-icon"
                  onClick={wrongIconHandler}
                />
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <br />
          <div className="form-input-field-item">
            <div>
              <span>Name</span>
            </div>
            <div>
              <input />
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
                id="conf-password"
                className="password-input-container"
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={confPasswordIcon}
                alt="show-icon"
                className="password-show-hide-icon"
                onClick={connfPasswordIconHandler}
              />
            </div>
          </div>
        </div>
        {isValidEmail === false && (
          <div className="login-field-error-massages-both">
            Invalid email address
          </div>
        )}
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
