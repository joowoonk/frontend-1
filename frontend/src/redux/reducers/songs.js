import {
  FETCH_SONG_START,
  FETCH_SONG_SUCCESS,
  FETCH_SONG_FAILURE,
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
    case ADDING_FAV_SONG_SUCCESS:
      return {
        ...state,
        favSongs: [...action.payload],
      };
    case ADDING_FAV_SONG_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_SONG_SUCCESS:
      return {
        ...state,
        favSongs: [
          ...state.favSongs.filter(
            (song) => song.id !== action.payload.track_id
          ),
        ],
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
