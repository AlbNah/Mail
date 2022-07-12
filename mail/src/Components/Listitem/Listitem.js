import React, { Component } from 'react'

class Listitem extends Component {
  render() {
    return (
      <li className={this.props.className}>{this.props.children}</li>
    )
  }
}

export default Listitem