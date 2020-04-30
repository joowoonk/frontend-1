import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { songAction } from "../../redux/actions/songAction";

import SearchBox from "../../components/SearchBox/SearchBox.js";
import SongList from "./SongList.js";

function SearchNewSongs() {
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
    <div>
      <SearchBox placeholder="Search By Track Name" handleChange={handleChange}/>
      <SongList filteredSongs={filteredSongs}/>
    </div>
  );
}

export default SearchNewSongs;
