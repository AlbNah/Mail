import { Component } from 'react'

class Input extends Component {
  render() {
    return (
      <input
        onChange={this.props.onChange}
        className={this.props.className}
        type={this.props.type}
        ref={this.props.myRef}
        placeholder={this.props.placeholder}
      />
    )
  }
}

export default Input