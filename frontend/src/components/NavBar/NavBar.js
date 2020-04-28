import React from "react";
import "./nav.styles.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="topNav">
      <h1 className="logo">DEEPTUNES</h1>
      <div className="menuNav">
        <Link to="/">Home</Link>
        <Link to="login">Log In/Out</Link>
      </div>
    </nav>
  );
};

export default Nav;
