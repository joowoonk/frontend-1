import actionTypes from "../actionTypes";

const initialState = {
  songs: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTE: {
      const songs = [...state.songs];
      songs.push(action.song);
      return {
        songs,
      };
    }
    case actionTypes.UPDATE_NOTE: {
      const { index, song } = action;
      const songs = [...state.songs];
      songs[index] = song;
      return {
        songs,
      };
    }
    case actionTypes.DELETE_NOTE: {
      const { index } = action;
      const songs = [];
      state.songs.forEach((song, i) => {
        if (index !== i) {
          songs.push(song);
        }
      });
      return {
        songs,
      };
    }
    default:
      return state;
  }
};
