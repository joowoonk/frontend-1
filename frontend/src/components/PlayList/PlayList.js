import React, { useState, useEffect } from "react";
import Play from "../Play/Play";

const PlayList = (props) => {
  console.log("PlayList", props);
  return (
    <>
      <div className="trackList">
        {props.song.map((track) => {
          return (
            <div>
              <Play key={track.id} track={track} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PlayList;

//       <h2> {props.play.track_name}</h2>
//       <p className="artistName">{props.play.artist_name}</p>
