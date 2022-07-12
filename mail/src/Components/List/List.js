import React, { Component } from 'react'

class List extends Component {
  render() {
    return (
      <ul className={this.props.className}>{this.props.children}</ul>
    )
  }
}

export default List