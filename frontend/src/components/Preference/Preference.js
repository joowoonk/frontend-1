import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { songAction } from "../../redux/actions/songAction";
const Preference = () => {
  const song = useSelector((state) => state.songsReducer.song);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(songAction());
  }, []);
  return (
    <>
      {song.map((play) => {
        return (
          <>
            <h2>{play.track_name}</h2>
          </>
        );
      })}
    </>
  );
};

export default Preference;
