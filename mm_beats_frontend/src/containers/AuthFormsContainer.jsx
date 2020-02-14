import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import authAPI from "../../adapters/authAPI";
import RegistrationForm from "../auth/RegistrationForm";
import LoginForm from "../auth/LoginForm";
import { login, register } from "../actions/userActions"

let action = "login"

class AuthFormsContainer extends Component {
  constructor() {
    super();
    // this.authenticator = this.authenticator.bind(this);
    this.setAction = this.setAction.bind(this);
  }



  authenticator(event, form, data) {
    if (form === "login") {
      const { email, password } = data;

      authAPI
        .login({
          email,
          password
        })
        .then(resp => {
          if (resp.data.status === "created") {
            // this.props.authRedirect(resp.data);
          }
        })
        .catch(error => {
          // TODO set state with error
          console.log(error);
        });
    } else {
      const {
        first_name,
        last_name,
        username,
        location,
        email,
        password,
        password_confirmation
      } = data;

      authAPI
        .register({
          first_name,
          last_name,
          username,
          location,
          email,
          password,
          password_confirmation,
          experience: 0,
          bio: ""
        })
        .then(resp => {
          if (resp.data.status === "created") {
            // this.props.authRedirect(resp.data);
            action = "register"
          }
        })
        .catch(error => {
          // TODO set state with error
          console.log(error);
        });

      event.preventDefault();
    }
  }
  render() {
    return (
      <Fragment>
        <LoginForm authenticator={this.authenticator} />
        <RegistrationForm authenticator={this.authenticator} />
      </Fragment>
    );
  }
}

export default connect(null,{  })(AuthFormsContainer);


