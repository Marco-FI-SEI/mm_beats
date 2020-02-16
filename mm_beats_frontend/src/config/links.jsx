import React from "react";
import {
  userIsAuthenticated,
  userIsNotAuthenticated
} from "../components/auth/authentication";
import { withRouter, NavLink } from "react-router-dom";


export const LoginLink = withRouter(
  userIsNotAuthenticated(() => {
    return <NavLink to="/login">Login</NavLink>;
  })
);

export const RegisterLink = withRouter(
  userIsNotAuthenticated(() => {
    return <NavLink to="/register">Register</NavLink>;
  })
);

export const LogoutLink = withRouter(
  userIsAuthenticated(({ logout }) => {
    return <button onClick={() => logout()}>Logout</button>;
  })
);

// Define Auth nav items
const getUserName = user => {
  if (user.data) {
    return `Hi! ${user.data.first_name}`;
  }
};

export const Username = ({ user }) => {
  return <div>{getUserName(user)}</div>;
};
