import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { songAction } from "../../redux/actions/songAction";

import AddNewSongsStyles from "./AddNewSongsStyles.jsx";

import SearchNewSongs from "./SearchNewSongs.js";

function AddNewSongs() {

  return (
    <AddNewSongsStyles>
      <SearchNewSongs />
    </AddNewSongsStyles>
  );
}

export default AddNewSongs;
