import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import LoginPage from "../../pages/LoginPage/LoginPage.js";
import SignUpPage from "../../pages/Registration/SignUpPage";

import "./App.css";
import PrivateRoute from "../PrivateRoute/PrivateRoute.js";
import UserPlaylist from "../UserPlaylist/UserPlaylist.js";
import HomePage from "../../pages/HomePage.js";
import Preference from "../Preference/Preference.js";

function App() {
  return (
    <div>
      <Route path="/">
        <NavBar />
      </Route>

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/login">
          <LoginPage />
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
