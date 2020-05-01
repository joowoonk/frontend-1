import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSongAction } from "../../redux/actions/songAction";
import { favoriteSongAction } from "../../redux/actions/songAction";

import NewPlayListStyles from "./NewPlayListStyles.jsx";

const NewPlayList = () => {
  const playList = useSelector((state) => state.songsReducer.favSongs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(favoriteSongAction());
  }, []);
  return (
    <NewPlayListStyles>
      {!playList ? (
        <>
          <h1>Loading</h1>
        </>
      ) : (
        <>
          {playList.map((song) => {
            return (
              <div className="song-card" key={song.id}>
                <h2>{song.track_name}</h2>
                <h2>Artist - {song.artist_name}</h2>
                <button
                  className="buttons"
                  onClick={() => dispatch(deleteSongAction(song.id))}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </>
      )}
    </NewPlayListStyles>
  );
};

export default NewPlayList;
