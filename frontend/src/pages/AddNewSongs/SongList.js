import React from "react";

import Play from "../../components/Play/Play.js";

function SongList(props) {

  return (
    <div className="song-list">
      {
        props.filteredSongs
        .filter((item, idx) => idx < 10)
        .map(song => {
          return <Play key={song.id} track={song}/>
        })
      }
    </div>
  );
}

export default SongList;
