import React from "react";
import {
  withRouter,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import { connect } from "react-redux";
import {
  userIsAuthenticated,
  userIsNotAuthenticated
} from "./components/auth/authentication";
import { logout } from "./actions/userActions";

import HomePage from "./components/pages/HomePage";
// import DashboardPage from "./components/pages/DashboardPage";
import LoginForm from "./components/auth/LoginForm";
import RegistrationForm from "./components/auth/RegistrationForm";

// Define higher order components
const Login = withRouter(userIsNotAuthenticated(LoginForm));
const Register = withRouter(userIsNotAuthenticated(RegistrationForm));
// const Dashboard = userIsAuthenticated(DashboardPage);

// Define Auth nav items
const getUserName = user => {
  if (user.data) {
    return `Hi! ${user.data.first_name}`;
  }
};

const Username = ({ user }) => {
  return <div>{getUserName(user)}</div>;
};

const LoginLink = withRouter(
  userIsNotAuthenticated(() => {
    return <NavLink to="/login">Login</NavLink>;
  })
);

const RegisterLink = withRouter(
  userIsNotAuthenticated(() => {
    return <NavLink to="/register">Register</NavLink>;
  })
);

// const LoginLink = wrapWithRouter(<NavLink to="/login">Login</NavLink>);

const LogoutLink = withRouter(
  userIsAuthenticated(({ logout }) => {
    return <button onClick={() => logout()}>Logout</button>;
  })
);

const App = ({ user, logout }) => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
      <nav>
        <LoginLink />
        <RegisterLink />
        <LogoutLink logout={logout} />
        <Username user={user} />
      </nav>
      <Switch>
        {/* <Route exact path={"/"} component={HomePage} /> */}
        {/* <Route path={"/dashboard"} component={Dashboard} /> */}
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/register"} component={Register} />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, { logout })(App);
