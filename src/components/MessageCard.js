import React, { Component } from 'react'
import { Container } from 'reactstrap'

export default class extends Component {
  render() {
    return (
      <Container className={'py-3'}>
        <h1>{this.props.title}</h1>
        <p>{this.props.text}</p>
      </Container>
    )
  }
}
