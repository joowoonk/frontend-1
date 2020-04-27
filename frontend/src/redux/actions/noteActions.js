import actionTypes from "../actionTypes";

export default {
  addNote: (note) => ({
    type: actionTypes.ADD_MUSIC,
    note,
  }),
  updateNote: (index, note) => ({
    type: actionTypes.UPDATE_MUSIC,
    index,
    note,
  }),
  deleteNote: (index) => ({
    type: actionTypes.DELETE_MUSIC,
    index,
  }),
};
