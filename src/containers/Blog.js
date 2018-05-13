import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Media } from 'reactstrap'
import ReactMarkdown from 'react-markdown'
import { MessageCard } from '../components'
import * as actions from '../actions'
import * as services from '../services'

class Blog extends Component {
  render() {
    if (!this.props.loader && !this.props.posts.length) {
      return (
        <MessageCard title={'Oups'} text={services.translate(this.props.locale, '404')} />
      )
    }

    return (
      <Container className={'py-3'}>
        {this.props.posts.map((post, index) => (
          <Media key={index} className={'my-2 mb-5'}>
            <Media left>
              <Media object style={{ marginRight: 10, width: '200px', height: 'auto' }} src={post.content.main_image} alt={post.title} />
            </Media>
            <Media body>
              <Media heading>{post.title}</Media>
              <Link to={`/es/posts/${post.slug}`} onClick={() => this.props.dispatch(actions.setCurrent(post))}>Read More</Link>
            </Media>
          </Media>
        ))}
      </Container>
    )
  }
}

export default connect((state, props) => ({
  loader: state.loader,
  posts: state.posts
}))(Blog)
