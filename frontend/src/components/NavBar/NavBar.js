import React from "react";
import NavStyles from "./NavStyles.jsx";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <NavStyles>
      <h1 className="logo">DEEPTUNES</h1>
      <div className="menuNav">
        <Link to="/">Home</Link>
        <Link to="login">Log In/Out</Link>
      </div>
    </NavStyles>
  );
};

export default NavBar;
