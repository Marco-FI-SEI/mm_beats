import React, { Component } from "react"
import { Link } from "react-router-dom";

class RegistrationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      location: "",
      email: "",
      password: "",
      password_confirmation: "",
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    this.props.authenticator(e, "register", this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="first_name">First Name</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="first_name"
            placeholder="First Name"
            value={this.state.first_name}
            required
          />
          <label htmlFor="last_name">Last Name</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={this.state.last_name}
            required
          />
          <label htmlFor="username">Username</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            required
          />
          <label htmlFor="location">Location</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="location"
            placeholder="Location"
            value={this.state.location}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={this.handleChange}
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            required
          />
          <label htmlFor="password_confirmation">Confirm Password</label>
          <input
            onChange={this.handleChange}
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
            value={this.state.password_confirmation}
            required
          />
          <input type="submit" value="Submit" />
        </form>
        <p>Don't have an account? <Link to="register">Sign up here!</Link> </p>
      </div>
    );
  }
}

export default RegistrationForm
