import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from "axios";

export const FETCH_SONG_START = "FETCH_SONG_START";
export const FETCH_SONG_SUCCESS = "FETCH_SONG_SUCCESS";
export const FETCH_SONG_FAILURE = "FETCH_SONG_FAILURE";
export const CHOOSE_SONG_SUCCESS = "CHOOSE_SONG_SUCCESS";
export const CHOOSE_SONG_FAILURE = "CHOOSE_SONG_FAILURE";
export const DELETE_SONG_SUCCESS = "DELETE_SONG_SUCCESS";
export const DELETE_SONG_FAILURE = "DELETE_SONG_FAILURE";
export const ADDING_FAV_SONG_SUCCESS = "ADDING_FAV_SONG_SUCCESS";
export const ADDING_FAV_SONG_FAILURE = "ADDING_FAV_SONG_FAILURE";
export const RECOMMEND_SONG_SUCCESS = "RECOMMEND_SONG_SUCCESS";
export const RECOMMEND_SONG_FAILURE = "RECOMMEND_SONG_FAILURE";

export const songAction = () => {
  //Fetch Songs
  return (dispatch) => {
    dispatch({ type: FETCH_SONG_START });
    axiosWithAuth()
      .get(`/songs/list`)
      .then((res) => {
        dispatch({ type: FETCH_SONG_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_SONG_FAILURE,
          payload: err,
        });
      });
  };
};

export const chooseSongAction = (song) => {
  //liking a song so adding to the list
  return (dispatch) => {
    dispatch({ type: FETCH_SONG_START });
    axiosWithAuth()
      .post(`/songs/liked`, song)
      .then((res) => {
        dispatch({ type: CHOOSE_SONG_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: CHOOSE_SONG_FAILURE,
          payload: err,
        });
      });
  };
};

export const deleteSongAction = (id) => {
  //deleting a song so adding to the suggested list
  return (dispatch) => {
    dispatch({ type: FETCH_SONG_START });
    axiosWithAuth()
      .delete(`/songs/liked`, id)
      .then((res) => {
        dispatch({ type: DELETE_SONG_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: DELETE_SONG_FAILURE,
          payload: err,
        });
      });
  };
};

export const addingSongAction = (id) => {
  //liking a song so adding to the list
  return (dispatch) => {
    dispatch({ type: FETCH_SONG_START });
    axiosWithAuth()
      .post(`/songs/liked`, { id })
      .then((res) => {
        dispatch({ type: ADDING_FAV_SONG_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: ADDING_FAV_SONG_FAILURE,
          payload: err,
        });
      });
  };
};

export const recommendSongAction = (id) => {
  //user select a song so we give recommeded song based on their choice of the song.
  return (dispatch) => {
    dispatch({ type: FETCH_SONG_START });
    axiosWithAuth()
      .post(`/songs/liked`, { id })
      .then((res) => {
        dispatch({ type: ADDING_FAV_SONG_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: ADDING_FAV_SONG_FAILURE,
          payload: err,
        });
      });
  };
};
