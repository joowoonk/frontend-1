import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import LoginPage from "../../pages/LoginPage/LoginPage.js";
import SignUpPage from "../../pages/Registration/SignUpPage";

import "./App.css";
import PrivateRoute from "../PrivateRoute/PrivateRoute.js";
import UserHomePage from "../../pages/UserHomePage/UserHomePage.js";
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
        <PrivateRoute path="/userhomepage" component={UserHomePage} />
        <PrivateRoute path="/preference" component={Preference} />
        {/* <PrivateRoute path="/add_songs" component={AddSongs} /> */}
      </Switch>
    </div>
  );
}

export default App;
