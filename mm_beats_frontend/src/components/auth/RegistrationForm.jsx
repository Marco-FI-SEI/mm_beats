import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { InputField as input } from "../InputField";
import * as actions from "../../actions/userActions"

class RegistrationForm extends Component {
  onSubmit = formValues => {
    this.props.register(formValues)
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <Field name="first_name" component={input} label="First Name" />
          </div>
          <div>
            <Field name="last_name" component={input} label="Last Name" />
          </div>
          <div>
            <Field name="username" component={input} label="Username" />
          </div>
          <div>
            <Field name="location" component={input} label="Location" />
          </div>
          <div>
            <Field name="email" component={input} label="Email" />
          </div>
          <div>
            <Field
              name="password"
              component={input}
              label="Password"
            />
          </div>
          <div>
            <Field
              name="password_confirmation"
              component={input}
              label="Confirm Password"
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        <p>
          Don't have an account? <Link to="register">Sign up here!</Link>
        </p>
      </div>
    );
  };
};

export default compose(
  connect(null, actions),
  reduxForm({ form: "registration"})
)(RegistrationForm);
