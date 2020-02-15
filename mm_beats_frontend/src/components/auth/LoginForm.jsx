import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { InputField as input } from "../InputField";
import * as actions from "../../actions/userActions";


class LoginForm extends Component {
  onSubmit = formValues => {
    this.props.login(formValues);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
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
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default compose(
  connect(null, actions),
  reduxForm({ form: "login" })
)(LoginForm);
