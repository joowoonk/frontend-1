import React from "react";

import SongCard from "./SongCard.js";

function SongList(props) {

  return (
    <div className="song-list">
      {
        props.filteredSongs
        .filter((item, idx) => idx < 100)
        .map(song => {
          return <SongCard key={song.id} song={song}/>
        })
      }
    </div>
  );
}

export default SongList;
