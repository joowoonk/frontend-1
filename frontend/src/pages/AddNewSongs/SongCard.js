import React from "react";

function SongCard(props) {
  return (
    <div className="song-card">
      <h2>{props.song.track_name}</h2>
      <h2>Artist - {props.song.artist_name}</h2>
    </div>
  );
}

export default SongCard;
