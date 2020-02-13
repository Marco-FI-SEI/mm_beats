import React from "react"

export default class HeadphoneListContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      headphones: []
    }
  }
  render() {
    return (
    <div>Hi 2 - {this.props.isLoggedIn}</div>
    )
  }
}
