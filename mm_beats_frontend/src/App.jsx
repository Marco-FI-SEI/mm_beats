import React from "react";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { userIsAuthenticated, userIsNotAuthenticated } from "./components/auth/authentication";
import { logout} from "../actions/user";

import HomePage from "./components/pages/HomePage";
import DashboardPage from "./components/pages/DashboardPage";
import LoginForm from "./components/auth/LoginForm";
import RegistrationForm from "./components/auth/RegistrationForm";

// Define higher order components
const Login = userIsNotAuthenticated(LoginForm)
const Register = userIsNotAuthenticated(RegistrationForm)
const Dashboard = userIsAuthenticated(DashboardPage)

// Define Auth nav items
const getUserName = user => {
  if (user.data) {
    return `Hi! ${user.data.first_name}`
  }
}

const Username = ({ user }) => {
  return <div>{ getUserName(user) }</div>
}

const LoginLink = userIsNotAuthenticated(() => {
  return <NavLink to="/login">Login</NavLink>
})

const LogoutLink = userIsAuthenticated(({ logout }) => {
  return <button onClick={ () => logout() }>Logout</button>
})

const App = ({ user, logout }) => {
  return (
    <Router>
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
      <nav>
        <LoginLink />
        <LogoutLink logout={logout} />
        <Username user={user} />
      </nav>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/dashboard"} component={Dashboard} />
        <Route path={"/login"} component={Login} />
        <Route path={"/register"} component={Register} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps, { logout }(App))
