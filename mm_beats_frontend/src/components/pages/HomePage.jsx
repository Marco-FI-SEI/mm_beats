import React, { Component } from "react";
import Registration from "../auth/Registration";

export default class HomePage extends Component {
  authRedirect = data => {
    this.props.handleLogin(data)
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div>
        <h1>Hi - {this.props.isLoggedIn}</h1>
        <Registration
          authRedirect={this.authRedirect}
        />
      </div>
    )
  }
}
