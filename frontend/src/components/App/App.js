import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar.js";
import LoginPage from "../../pages/LoginPage/LoginPage.js";
import SignUpPage from "../../pages/Registration/SignUpPage.js";

// import img from "../../assets/DeepTunes-background.jpg";

import AppStyles from "./AppStyles.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.js";
import UserHomePage from "../../pages/UserHomePage/UserHomePage.js";
import HomePage from "../../pages/HomePage.js";
import Preference from "../Preference/Preference.js";
import AddNewSongs from "../../pages/AddNewSongs/AddNewSongs.js";
import NewPlayList from "../../pages/NewPlayList/NewPlayList";

import AccountPage from "../../pages/AccountPage/AccountPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <NavBar />
          <HomePage />
        </Route>

        <Route path="/login">
          <NavBar />
          <LoginPage />
        </Route>

        <Route path="/signup">
          <NavBar />
          <SignUpPage />
        </Route>

        <PrivateRoute path="/userhomepage">
          <NavBar />
          <UserHomePage />
        </PrivateRoute>

        <PrivateRoute path="/songs">
          <NavBar />
          <Preference />
        </PrivateRoute>

        <Route path="/account">
          <NavBar />
          <AccountPage />
        </Route>
        <PrivateRoute path="/playlist">
          <NavBar />
          <NewPlayList />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;