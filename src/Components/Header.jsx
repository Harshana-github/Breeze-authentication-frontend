import React from "react";

import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-main-div">
      <div>
        <h1 className="header"><Link to="/">Breeze</Link></h1>
      </div>
      <div>
        <ul className="header-items">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
