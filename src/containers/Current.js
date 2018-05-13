import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import ReactMarkdown from 'react-markdown'
import { LinkRenderer, MessageCard } from '../components'
import * as actions from '../actions'
import * as services from '../services'

class Current extends Component {
  componentWillMount() {
    this.props.dispatch(actions.getResource(this.props.match.params.current))
      .then((response) => response.json())
      .then((current) => this.props.dispatch(actions.setCurrent(current)))
  }

  render() {
    if (!this.props.loader && !this.props.current.id) {
      return (
        <MessageCard title={'Oups'} text={services.translate(this.props.locale, '404')} />
      )
    }

    return (
      <div>
        <img src={this.props.current.content.main_image} className={'img-fluid'} />
        <Container className={'py-3'}>
          <h1>{this.props.current.title}</h1>
          <ReactMarkdown source={this.props.current.content.content} renderers={{ link: LinkRenderer }} />
        </Container>
      </div>
    )
  }
}

export default connect((state, props) => ({
  loader: state.loader,
  current: state.current
}))(Current)
