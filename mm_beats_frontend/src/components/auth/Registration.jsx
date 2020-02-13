import React, { Component } from "react"
import authAPI from "../../adapters/authAPI";

export default class Registration extends Component {
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
      formErrors: ""
    }
  }

  handleSubmit = e => {
    const {
      first_name,
      last_name,
      username,
      location,
      email,
      password,
      password_confirmation
    } = this.state

    authAPI.register({
      first_name,
      last_name,
      username,
      location,
      email,
      password,
      password_confirmation,
      experience: 0,
      bio: ""
    }).then(resp => {
      if (resp.data.status === "created") {
        this.props.authRedirect(resp.data);
      }
    }).catch(error => {
      // TODO set state with error
      console.log(error)
    })

    e.preventDefault()
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}
                 type="text"
                 name="first_name"
                 placeholder="First Name"
                 value={this.state.first_name}
                 required/>
          <input onChange={this.handleChange}
                 type="text"
                 name="last_name"
                 placeholder="Last Name"
                 value={this.state.last_name}
                 required/>
          <input onChange={this.handleChange}
                 type="text"
                 name="username"
                 placeholder="Username"
                 value={this.state.username}
                 required/>
          <input onChange={this.handleChange}
                 type="text"
                 name="location"
                 placeholder="Location"
                 value={this.state.location}
                 required/>
          <input onChange={this.handleChange}
                 type="email"
                 name="email"
                 placeholder="Email"
                 value={this.state.email}
                 required/>
          <input onChange={this.handleChange}
                 type="password"
                 name="password"
                 placeholder="Password"
                 value={this.state.password}
                 required/>
          <input onChange={this.handleChange}
                 type="password"
                 name="password_confirmation"
                 placeholder="Password Confirmation"
                 value={this.state.password_confirmation}
                 required/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
