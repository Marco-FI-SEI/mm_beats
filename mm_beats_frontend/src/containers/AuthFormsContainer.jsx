import React, { Component } from "react";

// import authAPI from "../../adapters/authAPI";
// import RegistrationForm from "../components/auth/RegistrationForm";
import LoginForm from "../components/auth/LoginForm";
// import { login, register } from "../actions/userActions"

class AuthFormsContainer extends Component {

  formSubmit = (values) => {
    console.log(values);
  }
    // if (form === "login") {
    //   const { email, password } = data;

    //   authAPI
    //     .login({
    //       email,
    //       password
    //     })
    //     .then(resp => {
    //       if (resp.data.status === "created") {
    //         // this.props.authRedirect(resp.data);
    //       }
    //     })
    //     .catch(error => {
    //       // TODO set state with error
    //       console.log(error);
    //     });
    // } else {
      // const {
      //   first_name,
      //   last_name,
      //   username,
      //   location,
      //   email,
      //   password,
      //   password_confirmation
      // } = data;

    //   authAPI
    //     .register({
    //       first_name,
    //       last_name,
    //       username,
    //       location,
    //       email,
    //       password,
    //       password_confirmation,
    //       experience: 0,
    //       bio: ""
    //     })
    //     .then(resp => {
    //       if (resp.data.status === "created") {
    //         // this.props.authRedirect(resp.data);
    //         action = "register"
    //       }
    //     })
    //     .catch(error => {
    //       // TODO set state with error
    //       console.log(error);
    //     });

    //   event.preventDefault();
    // }
  render() {
    return (
      <div>
        {/* <LoginForm formSubmit={this.formSubmit} /> */}
        {/* <RegistrationForm onSubmit={this.submit} /> */}
      </div>
    );
  };
};

export default AuthFormsContainer;
