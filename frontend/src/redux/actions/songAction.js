import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const FETCH_SONG_START = "FETCH_SONG_START";
export const FETCH_SONG_SUCCESS = "FETCH_SONG_SUCCESS";
export const FETCH_SONG_FAILURE = "FETCH_SONG_FAILURE";
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
      .get(`/songs/list/`)
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

export const favoriteSongAction = (track_id) => {
  //liking a song so adding to the list
  //search by track_id
  return (dispatch) => {
    dispatch({ type: FETCH_SONG_START });
    axiosWithAuth()
      .post(`/songs/liked`, { track_id })
      .then((res) => {})
      .catch((err) => {
        dispatch({
          type: ADDING_FAV_SONG_FAILURE,
          payload: err,
        });
      });
    axiosWithAuth()
      .get(`/songs/liked`)
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

export const deleteSongAction = (track_id) => {
  //deleting a song so adding to the suggested list
  //remember to pass id
  return (dispatch) => {
    dispatch({ type: FETCH_SONG_START });
    axiosWithAuth()
      .delete(`/songs/liked`, { data: { track_id } })
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

export const recommendSongAction = (track_key) => {
  //user select a song so we give recommeded song based on their choice of the song.
  return (dispatch) => {
    dispatch({ type: FETCH_SONG_START });
    axiosWithAuth()
      .post(`/songs/recommended`, { track_key })
      .then((res) => {
        dispatch({ type: RECOMMEND_SONG_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: RECOMMEND_SONG_FAILURE,
          payload: err,
        });
      });
  };
};
