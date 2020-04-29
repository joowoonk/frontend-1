import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { songAction } from "../../redux/actions/songAction";

import AddNewSongsStyles from "./AddNewSongsStyles.jsx";

import SearchBox from "../SearchBox/SearchBox.js";
import Play from "../Play/Play.js";

function AddNewSongs() {
  const [searchField, setSearchField] = useState("");
  const song = useSelector((state) => state.songsReducer.song);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(songAction());
  }, []);

  const filteredSongs = song.filter((track) => {
    return track.track_name.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = evt => {
    setSearchField(evt.target.value);
  }

  return (
    <AddNewSongsStyles>
      <SearchBox placeholder="Search By Track Name" handleChange={handleChange}/>
      {
        filteredSongs.map(song => {
          return <Play song={song}/>
        })
      }
    </AddNewSongsStyles>
  );
}

export default AddNewSongs;
