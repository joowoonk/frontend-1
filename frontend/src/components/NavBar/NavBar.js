import React from "react";
import NavStyles from "./NavStyles.jsx";
import { Link } from "react-router-dom";

const NavBar = () => {
  console.log({ localStorage });
  return (
    <NavStyles>
      <h1 className="logo">DEEPTUNES</h1>
      <div className="menuNav">
        <Link to="/">Home</Link>
        {localStorage.token.length > 0 ? (
          <Link to="login">Log Out</Link>
        ) : (
          <Link to="login">Log In</Link>
        )}
      </div>
    </NavStyles>
  );
};

export default NavBar;
