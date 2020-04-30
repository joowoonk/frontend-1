import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  favoriteSongAction,
  recommendSongAction,
} from "../../redux/actions/songAction";

import { useHistory } from "react-router-dom";

const SimilarSongs = () => {
  const [recommendedSongs, setRecommendedSongs] = useState([]);
  const { push } = useHistory();

  //

  //   const saveMusic = () => {
  //     dispatch(favoriteSongAction());
  //     // console.log(props.track.id);
  //   };

  //   const recommendSong = () => {
  //     dispatch(recommendSongAction());
  //     push("/recommend");
  //   };

  return (
    <>
      {/* {songState.map((song) => (
        <div>
          <h2>{song.track_name}</h2>
          <h2>Artist - {}</h2>
          <div>
            <button onClick={() => recommendSong()}>Similar Songs?</button>
            <button onClick={() => saveMusic()}>Save Song</button>
          </div>
        </div>
      ))} */}
    </>
  );
};

export default SimilarSongs;
