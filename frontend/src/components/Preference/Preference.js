import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { songAction } from "../../redux/actions/songAction";

import PreferenceStyles from "./PreferenceStyles.jsx";

import PlayList from "../PlayList/PlayList";

const Preference = () => {
  const [searchField, setSearchField] = useState("");
  const song = useSelector((state) => state.songsReducer.song);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(songAction());
  }, []);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredMusic = song.filter((track) => {
    return track.track_name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <PreferenceStyles>
      <PlayList
        song={filteredMusic}
        handleChange={handleChange}
        searchField={searchField}
      />
    </PreferenceStyles>
  );
};

export default Preference;
