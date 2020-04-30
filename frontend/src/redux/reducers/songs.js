// import actionTypes from "../actionTypes";

import {
  FETCH_SONG_START,
  FETCH_SONG_SUCCESS,
  FETCH_SONG_FAILURE,
  CHOOSE_SONG_SUCCESS,
  CHOOSE_SONG_FAILURE,
  DELETE_SONG_SUCCESS,
  DELETE_SONG_FAILURE,
  ADDING_FAV_SONG_SUCCESS,
  ADDING_FAV_SONG_FAILURE,
  RECOMMEND_SONG_SUCCESS,
  RECOMMEND_SONG_FAILURE,
} from "../actions/songAction";

const initialState = {
  song: [],
  error: "",
  chosen: false,
  favSongs: [],
  recommenedSongs: [],
};

export const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SONG_START:
      return {
        ...state,
      };
    case FETCH_SONG_SUCCESS:
      console.log("action.payload", action.payload);
      return {
        ...state,
        song: action.payload,
        error: "",
      };
    case FETCH_SONG_FAILURE:
      return {
        ...state,
        err: action.payload,
      };
    // case CHOOSE_SONG_SUCCESS:
    //   return {
    //     ...state,
    //     // song: action.payload,
    //     // chosen: !state.chosen,
    //     addingSong: action.payload,
    //     error: "",
    //   };
    // case CHOOSE_SONG_FAILURE:
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };.
    case ADDING_FAV_SONG_SUCCESS:
      return {
        ...state,
        favSongs: [action.payload],
      };
    case ADDING_FAV_SONG_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_SONG_SUCCESS:
      return {
        ...state,
        song: action.payload,
      };
    case DELETE_SONG_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case RECOMMEND_SONG_SUCCESS:
      return {
        ...state,
        recommenedSongs: action.payload,
      };
    case RECOMMEND_SONG_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
