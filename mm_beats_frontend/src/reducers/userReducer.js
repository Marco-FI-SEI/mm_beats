import { AUTH_ACTION_TYPES as authTypes } from "../config/constants";

const initialState = {
  data: null,
  isLoading: false,
  isLoggedIn: false
};

export default function userUpdate(state = initialState, { type, payload }) {
  switch (type) {
    case authTypes.USER_LOGGING_IN:
      return {
        ...initialState,
        isLoading: true
      };
    case authTypes.USER_LOGGED_IN:
      return {
        data: payload,
        isLoading: false,
        isLoggedIn: true
      };
    case authTypes.USER_LOGGED_OUT:
      return initialState;
    case authTypes.USER_REGISTERED:
      return {
        data: payload,
        isLoggedIn: true
      };
    default:
      return state;
  };
};
