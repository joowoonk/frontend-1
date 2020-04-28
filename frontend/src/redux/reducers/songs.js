// import actionTypes from "../actionTypes";

const initialState = {
  songs: [],
  error: "",
  chosen: false,
  addingSong: [
    {
      id: "",
    },
  ],
};

export const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SONG_START":
      return {
        ...state,
      };
    case "FETCH_SONG_SUCCESS":
      return {
        ...state,
        song: action.payload,
        error: "",
      };
    case "FETCH_SONG_FAILURE":
      return {
        ...state,
        err: action.payload,
      };
    case "CHOOSE_SONG_SUCCESS":
      return {
        ...state,
        // song: action.payload,
        chosen: !state.chosen,
        error: "",
      };
    case "CHOOSE_SONG_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "POST_SONG_SUCCESS":
      return {
        ...state,
        addingSong: [action.payload],
      };
    case "POST_SONG_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
