import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Marketing Home Page will go here with a link to the login page</h1>
      <Link to="/login">
        <button>Login Page</button>
      </Link>
    </div>
  );
};

export default HomePage;
