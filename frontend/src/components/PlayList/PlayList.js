import React from "react";
import Play from "../Play/Play";
// import Chart from "../Chart/Chart";

import PlayListStyles from "./PlayListStyles.jsx";
import PlayStyles from "../Play/PlayStyles.jsx";
import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import "./PlayList.styles.scss";

import Chart from "../Chart/Chart";

import {
  favoriteSongAction,
  recommendSongAction,
} from "../../redux/actions/songAction";

const PlayList = (props) => {
  const { push } = useHistory();
  // console.log("PlayList", props);
  //10, 20, 50 being listed for the songs
  const dispatch = useDispatch();

  const songState = useSelector((state) => {
    return state.songsReducer.recommenedSongs.recommendedSongs;
  });
  const visiualization = useSelector((state) => {
    return state.songsReducer.recommenedSongs;
  });
  // console.log({ songState, visiualization });

  const descriptionPage = () => {
    push("./description");
  };

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
        <PlayListStyles>
          <div className="chart">
            <div className="graph">
              <Chart visiualization={visiualization} />
            </div>
            <p onClick={() => descriptionPage()} className="description">
              This graph shows the average attributes of the ten most similar
              songs to the one you selected. For more information on the
              attributes, click this description box.
            </p>
          </div>
          <h4>Here are the 10 Similar Songs</h4>
          {songState.map((track) => {
            return (
              <PlayStyles key={track.id}>
                {/* {" "} */}
                <h2>{track.track_name}</h2>
                <h2>Artist - {track.artist_name}</h2>
                <div className="buttons">
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
              </PlayStyles>
            );
          })}{" "}
        </PlayListStyles>
      )}
    </>
  );
};

export default PlayList;

//       <h2> {props.play.track_name}</h2>
//       <p className="artistName">{props.play.artist_name}</p>
