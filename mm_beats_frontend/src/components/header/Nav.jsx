import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { LoginLink, RegisterLink, LogoutLink, Username } from "../../config/links"

class Nav extends Component {
  render() {
    return (
      <div>
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <nav>
          <LoginLink />
          <RegisterLink />
          <LogoutLink />
          <Username user={this.props.user}/>
        </nav>
      </div>
    );
  }
};

export default Nav;
