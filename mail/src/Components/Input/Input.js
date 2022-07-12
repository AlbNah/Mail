import { Component } from 'react'

class Input extends Component {
  render() {
    return (
      <input
        className={this.props.className}
        type={this.props.type}
        ref={this.props.myRef}
      />
    )
  }
}

export default Input