import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/actions/userAction";

import NavStyles from "./NavStyles.jsx";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  // const { push } = useHistory();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const songState = useSelector((state) => {
    return state.songsReducer.recommenedSongs.recommendedSongs;
  });
  const clickMe = () => {
    window.location.href = "/songs";
  };

  return (
    <NavStyles>
      <h1 className="logo">DEEPTUNES</h1>
      <div className="menuNav">
        <a href="https://jdmtias.github.io/marketing/">Home</a>
        {localStorage.token ? (
          <>
            {songState ? (
              <Link to="/songs" onClick={() => clickMe()}>
                Songs
              </Link>
            ) : (
              <Link to="/songs">Songs</Link>
            )}

            <Link to="/playlist">Your Playlist</Link>
            <Link to="/account">Account</Link>
            <Link to="/" onClick={handleLogOut}>
              Log Out
            </Link>
          </>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </div>
    </NavStyles>
  );
};

export default NavBar;
