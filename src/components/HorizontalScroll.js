import React, { Component } from 'react'
import Radium from 'radium'

const styles = {
  padding: '20px 0 80px 0',
  overflowX: 'scroll',
  whiteSpace: 'nowrap'
}

class HorizontalScroll extends Component {
  render() {
    return (
      <div style={{ ...styles, ...this.props.style }}>{this.props.children}</div>
    )
  }
}

export default Radium(HorizontalScroll)
