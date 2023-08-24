import React from "react";

import "./Form.css";
import { Link } from "react-router-dom";

const Login = () => {
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
              <input />
              <div className="login-field-error-massages">
                Invalid Email Address
              </div>
            </div>
          </div><br/>
          <div className="form-input-field-item">
            <div>
              <span>Password</span>
            </div>
            <div>
              <input />
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
            <Link to="/register" className="form-contents-item" style={{ fontSize: 18 }}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
