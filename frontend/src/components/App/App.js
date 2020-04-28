import React from "react";
import { Route, Switch, Link } from "react-router-dom";

// import LoginPage from "../../pages/LoginPage/LoginPage.js";
import SignUpPage from "../../pages/Registration/SignUpPage";

import "./App.css";
import PrivateRoute from "../PrivateRoute/PrivateRoute.js";
import UserPlaylist from "../UserPlaylist/UserPlaylist.js";
import HomePage from "../../pages/HomePage.js";
import Preference from "../Preference/Preference.js";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <h1>Project Home Page Will Be Here</h1>
          <Link to="/login">Login Page</Link>
        </Route>

        <Route path="/login">
          <HomePage />
        </Route>

        <Route path="/signup">
          <SignUpPage />
        </Route>
        <PrivateRoute path="/usersonglist" component={UserPlaylist} />
        <PrivateRoute path="/preference" component={Preference} />
      </Switch>
    </div>
  );
}

export default App;
