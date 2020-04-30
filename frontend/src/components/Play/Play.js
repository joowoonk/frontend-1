import React from "react";
import PlayStyles from "./PlayStyles.jsx";
const Play = (props) => {
  return (
    <PlayStyles>
      <h2>{props.track.track_name}</h2>
      <h2>Artist - {props.track.artist_name}</h2>
      <button>Add Song</button>
    </PlayStyles>
  );
};

export default Play;
