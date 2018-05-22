import React, { Component } from 'react'
import Radium from 'radium'

const styles = {
  padding: '4px',
  overflowX: 'scroll',
  whiteSpace: 'nowrap'
}

class HorizontalScroll extends Component {
  render() {
    return (
      <div style={styles}>{this.props.children}</div>
    )
  }
}

export default Radium(HorizontalScroll)
