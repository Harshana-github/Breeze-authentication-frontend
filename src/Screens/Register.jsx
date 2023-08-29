import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Form.css";
import show from "../images/show.png";
import hide from "../images/hide.png";
import right from "../images/right.png";
import wrong from "../images/wrong.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const [passwordIcon, setPasswordIcon] = useState(hide);
  const [passwordFieldType, setPasswordFieldType] = useState("password");

  const [confPasswordIcon, setConfPasswordIcon] = useState(hide);
  const [confPasswordFieldType, setConfPasswordFieldType] =
    useState("password");

  const [isValidEmail, setIsValidEmail] = useState(null);
  const [isValidStrongPasswordMessage, setIsValidStrongPasswordMessage] =
    useState({
      minCaracter: null,
      uppercase: null,
      lowercase: null,
      numbers: null,
      symbol: null,
    });

  const [confPasswordMessage, setConfPasswordMessage] = useState(null);

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

  useEffect(() => {
    if (password) {
      const messages = {
        minCaracter:
          password.length >= 8
            ? true
            : "Password should be at least 8 characters",
        uppercase: /[A-Z]/.test(password)
          ? true
          : "Password should include at least one uppercase letter",
        lowercase: /[a-z]/.test(password)
          ? true
          : "Password should include at least one lowercase letter",
        numbers: /\d/.test(password)
          ? true
          : "Password should include at least one number",
        symbol: /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-=|]/.test(password)
          ? true
          : "Password should include at least one special character",
      };

      setIsValidStrongPasswordMessage(messages);
    }
  }, [password]);

  const passwordHandler = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);

    clearTimeout(validationTimeout);

    if (inputPassword === "") {
      setIsValidStrongPasswordMessage({
        minCaracter: null,
        uppercase: null,
        lowercase: null,
        numbers: null,
        symbol: null,
      });
    }
  };

  const confPasswordHandler = (e) => {
    const inputConfPassword = e.target.value;
    setConfPassword(inputConfPassword);

    if (inputConfPassword === "") {
      setConfPasswordMessage(null);
    } else if (password !== inputConfPassword) {
      validationTimeout = setTimeout(() => {
        setConfPasswordMessage(true);
      }, 1);
    } else {
      setConfPasswordMessage(false);
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
              <input placeholder="Enter your name" />
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
                onChange={passwordHandler}
                placeholder="Make strong password"
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
                onChange={confPasswordHandler}
                placeholder="Password again"
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
        {Object.entries(isValidStrongPasswordMessage).map(([key, value]) => {
          if (value !== true && value !== null) {
            return (
              <div key={key} className="login-field-error-massages-both">
                {value}
              </div>
            );
          }
          return null;
        })}
        {confPasswordMessage === true && (
          <div className="login-field-error-massages-both">
            Password does not matched
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
