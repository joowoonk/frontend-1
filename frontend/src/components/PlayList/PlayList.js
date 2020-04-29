import React, { useState, useEffect } from "react";
import Play from "../Play/Play";

import "./PlayList.styles.scss";

const PlayList = (props) => {
  // console.log("PlayList", props);
  //10, 20, 50 being listed for the songs

  return (
    <>
      <div className="trackBox">
        {props.song
          .filter((item, idx) => idx < 10)
          .map((track) => {
            return (
              <Play key={track.id} track={track} />
            );
          })}
      </div>
    </>
  );
};

export default PlayList;

//       <h2> {props.play.track_name}</h2>
//       <p className="artistName">{props.play.artist_name}</p>
