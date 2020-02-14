import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";
import locationHelperBuilder from "redux-auth-wrapper/history4/locationHelper";

const locationHelper = locationHelperBuilder({});

export const userIsAuthenticated = connectedRouterRedirect({
  // url to redirect user if unsuccessful
  redirectPath: "/login",
  // check if user is authenticated
  authenticatedSelector: state => state.user.data !== null,
  wrapperDisplayName: "UserIsAuthenticated"
});

export const userIsNotAuthenticated = connectedRouterRedirect({
  // if logged in or no query param send to home page
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || "/",
  // do not add query parameter once redirected
  allowRedirectBack: false,
  // check if user is authenticated
  authenticatedSelector: state => state.user.data === null,
  wrapperDisplayName: "UserIsNotAuthenticated"
});
