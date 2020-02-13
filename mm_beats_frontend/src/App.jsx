import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Dashboard from "./components/pages/Dashboard";

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      isLoggedIn: "false",
      user: {}
    }
  }

  handleLogin = data => {
    this.setState({
      isLoggedIn: "true",
      user: data.user
    })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path={"/"}
            render={props => (
              <HomePage
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                handleLogin={this.handleLogin}
              />
            )}
          />
          <Route
            exact
            path={"/dashboard"}
            render={props => (
              <Dashboard
                {...props}
                isLoggedIn={this.state.isLoggedIn}
              />
            )}
          />
        </Switch>
      </Router>
    )
  }
}
