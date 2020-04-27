import actionTypes from "../actionTypes";

export default {
  addSong: (song) => ({
    type: actionTypes.ADD_MUSIC,
    song,
  }),
  updateSong: (index, song) => ({
    type: actionTypes.UPDATE_MUSIC,
    index,
    song,
  }),
  deleteSong: (index) => ({
    type: actionTypes.DELETE_MUSIC,
    index,
  }),
};
