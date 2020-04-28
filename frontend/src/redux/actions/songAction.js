import actionTypes from "../actionTypes";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const songAction = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_SONG_START" });
    axios
      .get(`https://`)
      .then((res) => {
        dispatch({ type: "FETCH_SONG_SUCCESS" });
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_SONG_FAILURE",
          payload: err,
        });
      });
  };
};

export const postSongAction = (song) => {
  return (dispatch) => {
    dispatch({ type: "FETCH_CHARACTER_START" });
    axios
      .post(`http://localhost:3333/s`, song)
      .then((res) => {
        dispatch({ type: "POST_SONG_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: "POST_SONG_FAILURE",
          payload: err,
        });
      });
  };
};
