import React from "react";

import "./Form.css";
import { Link } from "react-router-dom";

const Register = () => {
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
              <input />
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
              <input />
              <div className="login-field-error-massages">
                Password not Matched
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
