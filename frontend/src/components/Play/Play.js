import React from "react";
// import "./Play.styles.scss";
import PlayStyles from "./PlayStyles.jsx";
const Play = (props) => {
  return (
    <PlayStyles>
      <h2>{props.track.track_name}</h2>
      <p>{props.track.artist_name}</p>
      <button>Your Song?</button>
    </PlayStyles>
  );
};

export default Play;
