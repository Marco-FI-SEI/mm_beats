import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./components/pages/HomePage";
// import DashboardPage from "./components/pages/DashboardPage";
import Nav from "./components/header/Nav";
import { Login, Register } from "./config/hocs"
import { logout } from "./actions/userActions";

const App = ({ user }) => {
  return (
    <div>
      <Nav user={user}/>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        {/* <Route path={"/dashboard"} component={Dashboard} /> */}
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/register"} component={Register} />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, { logout })(App);
