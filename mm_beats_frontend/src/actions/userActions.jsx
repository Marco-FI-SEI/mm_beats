import { AUTH_ACTION_TYPES as authTypes } from "../config/constants";
import authAPI from "../adapters/authAPI"

// export const login = data => dispatch => {
//   dispatch({
//     type: authTypes.USER_LOGGING_IN
//   });

//   setTimeout(() => {
//     dispatch({
//       type: authTypes.USER_LOGGED_IN,
//       payload: data
//     });
//   }, 2000);
// };
export const login = data => dispatch => {
  const {
    email,
    password,
  } = data;

  authAPI.login({
    email,
    password,
  });
};

export function logout() {
  return {
    type: authTypes.USER_LOGGED_OUT
  };
};

export const register = data => dispatch => {
  const {
    first_name,
    last_name,
    username,
    location,
    email,
    password,
    password_confirmation
  } = data;

  authAPI.register({
    first_name,
    last_name,
    username,
    location,
    email,
    password,
    password_confirmation
  })
};
