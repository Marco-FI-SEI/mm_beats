import API from "./API";
import { LOGIN_URL, REGISTRATION_URL } from "../config/constants";

const login = credentials => {
  const payload = { user: credentials };
  return API.makeRequest("POST", LOGIN_URL, payload);
}

const register = credentials => {
  // console.log(credentials)
  const payload = { user: credentials };
  return API.makeRequest("POST", REGISTRATION_URL, payload);
}

const authAPI = {
  login,
  register
};

export default authAPI;
