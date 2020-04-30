import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSongAction } from "../../redux/actions/songAction";
import { favoriteSongAction } from "../../redux/actions/songAction";

// import { useDispatch } from "react-redux";

const NewPlayList = () => {
  const playList = useSelector((state) => state.songsReducer.favSongs);
  const dispatch = useDispatch();
  // const [newSongs, setNewSongs] = useState(playList);
  // console.log({ playList });
  useEffect(() => {
    dispatch(favoriteSongAction());
  }, []);
  return (
    <div>
      {!playList ? (
        <>
          <h1>Loading</h1>
        </>
      ) : (
        <>
          {playList.map((song) => {
            return (
              <div key={song.id}>
                <h2>{song.track_name}</h2>
                <h2>Artist - {song.artist_name}</h2>
                <button onClick={() => dispatch(deleteSongAction(song.id))}>
                  Delete From The List
                </button>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default NewPlayList;
