import React from "react";
import Play from "../Play/Play";

import PlayListStyles from "./PlayListStyles.jsx";
import { useSelector, useDispatch } from "react-redux";

import {
  favoriteSongAction,
  recommendSongAction,
} from "../../redux/actions/songAction";

const PlayList = (props) => {
  // console.log("PlayList", props);
  //10, 20, 50 being listed for the songs
  const dispatch = useDispatch();

  const songState = useSelector((state) => {
    return state.songsReducer.recommenedSongs.recommendedSongs;
  });
  // console.log({ songState });

  return (
    <>
      {!songState ? (
        <PlayListStyles>
          {/* <div className="info">
        <h2>Song Name</h 2>
        <h2>Artist</h2>
      </div> */}
          {props.song
            .filter((item, idx) => idx < 10)
            .map((track) => {
              return <Play key={track.id} track={track} />;
            })}
        </PlayListStyles>
      ) : (
        <>
          {" "}
          {songState.map((track) => {
            return (
              <PlayListStyles>
                {/* {" "} */}
                <h2>{track.track_name}</h2>
                <h2>Artist - {track.artist_name}</h2>
                <div>
                  <button
                    onClick={() =>
                      dispatch(recommendSongAction(track.track_key))
                    }
                  >
                    Similar Songs?
                  </button>
                  <button
                    onClick={() => dispatch(favoriteSongAction(track.id))}
                  >
                    Save Song
                  </button>
                </div>
              </PlayListStyles>
            );
          })}{" "}
        </>
      )}
    </>
  );
};

export default PlayList;

//       <h2> {props.play.track_name}</h2>
//       <p className="artistName">{props.play.artist_name}</p>
