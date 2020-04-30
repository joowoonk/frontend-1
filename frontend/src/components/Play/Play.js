import React from "react";
import PlayStyles from "./PlayStyles.jsx";

import { useDispatch } from "react-redux";
import {
  favoriteSongAction,
  recommendSongAction,
} from "../../redux/actions/songAction";

const Play = (props) => {
  const dispatch = useDispatch();

  const saveMusic = () => {
    dispatch(favoriteSongAction(props.track.id));
    // console.log(props.track.id);
  };

  const recommendSong = () => {
    dispatch(recommendSongAction(props.track.track_key));
    const test = document.querySelector(".search-box");
    test.style = "display: none";
  };

  // const removeSearchBox = () => {
  //   const test = document.querySelector(".search-box");
  //   console.log(test);
  // };

  return (
    <PlayStyles>
      <h2>{props.track.track_name}</h2>
      <h2>Artist - {props.track.artist_name}</h2>
      <div className="buttons">
        <button onClick={() => recommendSong()}>Similar Songs?</button>
        <button onClick={() => saveMusic()}>Save Song</button>
      </div>
    </PlayStyles>
  );
};

export default Play;
