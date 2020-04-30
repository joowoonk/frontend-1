import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from "axios";

import { useHistory } from "react-router-dom";

export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const POST_USER_SUCCESS = "POST_USER_SUCCESS";
export const POST_USER_FAILURE = "POST_USER_FAILURE";

export const LOGOUT = "LOGOUT";

// export const postLogin = (user) => {
//   return (dispatch) => {
//     dispatch({ type: FETCH_USER_START });
//     axiosWithAuth()
//       .post("/auth/login", user)
//       .then((res) => {
//         localStorage.setItem("token", res.data.token);
//         dispatch({
//           type: FETCH_USER_SUCCESS,
//         });
//       })
//       .catch((err) => {
//         dispatch({
//           type: FETCH_USER_FAILURE,
//           payload: err,
//         });
//       });
//   };
// };

export const postUserAction = (username, password) => {
  console.log(username, password);
  return (dispatch) => {
    dispatch({ type: FETCH_USER_START });
    axiosWithAuth()
      .put(`/auth/user`, { username, password })
      .then((res) => {
        dispatch({
          type: POST_USER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: POST_USER_FAILURE,
          payload: err,
        });
      });
  };
};

export const logOut = () => {
  return (dispatch) => {
    console.log("LOGOUT?");
    dispatch({ type: LOGOUT });
  };
};
