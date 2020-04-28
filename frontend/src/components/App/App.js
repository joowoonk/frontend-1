import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import LoginPage from "../LoginPage/LoginPage.js";
import SignUpPage from "../Registration/SignUpPage.js";

import "./App.css";
import PrivateRoute from "../PrivateRoute/PrivateRoute.js";
import UserPlaylist from "../UserPlaylist/UserPlaylist.js";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <h1>Project Home Page Will Be Here</h1>
          <Link to="/login">Login Page</Link>
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/signup">
          <SignUpPage />
        </Route>
        <PrivateRoute path="/usersonglist" component={UserPlaylist} />
      </Switch>
    </div>
  );
}

export default App;
