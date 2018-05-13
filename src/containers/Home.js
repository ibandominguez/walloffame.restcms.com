import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Carousel, CarouselItem } from 'reactstrap'
import ReactMarkdown from 'react-markdown'
import { Slider, LinkRenderer, MessageCard } from '../components'
import * as services from '../services'

class Home extends Component {
  render() {
    if (!this.props.loader && !this.props.home.id) {
      return (
        <MessageCard title={'Oups'} text={services.translate(this.props.locale, '404')} />
      )
    }

    return (
      <div>
        <Slider items={this.props.home.content.slides} />
        <Container className={'py-3'}>
          <h1>{this.props.home.title}</h1>
          <ReactMarkdown source={this.props.home.content.content} renderers={{ link: LinkRenderer }} />
        </Container>
      </div>
    )
  }
}

export default connect((state, props) => ({
  locale: state.locale,
  loader: state.loader,
  site: state.site,
  home: state.home,
  pages: state.pages
}))(Home)
