import { AUTH_ACTION_TYPES as authTypes } from "../constants";

export const login = data => dispatch => {
  dispatch({
    type: authTypes.USER_LOGGING_IN
  })

  setTimeout(() => {
    dispatch({
      type: authTypes.USER_LOGGED_IN,
      payload: data
    })
  }, 2000)
}

export function logout() {
  return {
    type: authTypes.USER_LOGGED_OUT
  }
}

export const register = data => dispatch => {
  dispatch({
    type: authTypes.USER_REGISTERED,
    payload: data
  })
}
