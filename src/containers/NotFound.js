import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MessageCard } from '../components'
import * as services from '../services'

class NotFound extends Component {
  render() {
    return (
      <MessageCard title={'Oups'} text={services.translate(this.props.locale, '404')} />
    )
  }
}

export default connect((state, props) => ({
  //
}))(NotFound)
