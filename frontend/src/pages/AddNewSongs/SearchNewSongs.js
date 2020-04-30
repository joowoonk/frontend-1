import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth.js";

import SearchBox from "../../components/SearchBox/SearchBox.js";
import SongList from "./SongList.js";

const api = "https://spotifysuggester-03.herokuapp.com/api/songs/list/";

function SearchNewSongs() {
  const [searchField, setSearchField] = useState("");
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(api)
      .then(res => {
        setSongs(res.data);
      })
      .catch(err => {
        console.log("error getting song data");
      })
  }, []);

  const filteredSongs = songs.filter((song) => {
    return song.track_name.toLowerCase().includes(searchField.toLowerCase());
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
