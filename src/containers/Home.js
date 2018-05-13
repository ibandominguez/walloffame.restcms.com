import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import ReactMarkdown from 'react-markdown'
import { Header, CTA, Crono } from '../components'
import * as services from '../services'

class Home extends Component {
  render() {
    return (
      <div>
        <Header fixedTop={true} />
        <CTA />
        <Header />
        <Crono />
      </div>
    )
  }
}

export default connect((state, props) => ({
  //
}))(Home)
