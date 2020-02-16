import { connectedReduxRedirect } from "redux-auth-wrapper/history4/redirect";
import { replace } from "connected-react-router"
import locationHelperBuilder from "redux-auth-wrapper/history4/locationHelper";

const locationHelper = locationHelperBuilder({});

export const userIsAuthenticated = connectedReduxRedirect({
  // url to redirect user if unsuccessful
  redirectPath: "/login",
  // check if user is authenticated
  authenticatedSelector: state => state.user.data !== null,
  wrapperDisplayName: "UserIsAuthenticated",
  redirectAction: replace
});

export const userIsNotAuthenticated = connectedReduxRedirect({
  // if logged in or no query param send to home page
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || "/",
  // do not add query parameter once redirected
  allowRedirectBack: false,
  // check if user is authenticated
  authenticatedSelector: state => state.user.data === null,
  wrapperDisplayName: "UserIsNotAuthenticated",
  redirectAction: replace
});
