import React, { Component } from "react";

class LoginForm extends Component {
    constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.authenticator(e, "login", this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}
                 type="email"
                 value={this.state.email}
                 placeholder="Email" />
          <input onChange={this.handleChange}
                 type="password"
                 value={this.state.password}
                 placeholder="Password" />
          <input type="submit"
                 value="Enter" />
        </form>
      </div>
    )
  }
}

export default LoginForm
