import { Component } from 'react'

class Text extends Component {
  render() {
    return (
      <span className={this.props.className}>{this.props.children}</span>
    )
  }
}

export default Text