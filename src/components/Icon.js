import React, { Component } from 'react'
import Radium from 'radium'

class Icon extends Component {
  render() {
    return (
      <i style={this.props.style} className={`fa fa-${this.props.icon}`} />
    )
  }
}

export default Radium(Icon)
