import React, { Component } from 'react'

const styles = {
  container: {
    margin: 10,
    position: 'relative',
  },
  header: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  block: {
    position: 'absolute',
    backgroundColor: '#222',
    color: '#fff',
    bottom: -30,
    left: 0,
    width: '100%'
  }
}

export default class ImageCard extends Component {
  getContainerStyles() {
    return {
      ...styles.container,
      width: this.props.width || 300,
      height: this.props.height || 400,
      backgroundImage: `url(${this.props.image || 'https://fakeimg.pl/300x300/'})`,
      ...this.props.style
    }
  }

  getHeaderStyles() {
    return {
      ...styles.header,
      width: this.props.width || 300,
      height: this.props.height || 400,
      backgroundImage: `url(${this.props.media || 'https://fakeimg.pl/300x300/'})`
    }
  }

  isOpen() {
    return !!this.props.open
  }

  render() {
    return (
      <div style={this.getContainerStyles()}>
        <div style={this.getHeaderStyles()} />
        {this.isOpen() && <div className={'p-3'} style={styles.block}>
          <h5>{this.props.title}</h5>
          <p style={{ color: '#aaa' }}>{this.props.description}</p>
          <div className={'clearfix'}>
            <i className={`fa fa-share`} style={{ marginRight: 5, backgroundColor: '#000', padding: 8, borderRadius: '50%' }} />
            <i className={`fa fa-share`} style={{ marginRight: 5, backgroundColor: '#000', padding: 8, borderRadius: '50%' }} />
            <i className={`fa fa-share`} style={{ marginRight: 5, backgroundColor: '#000', padding: 8, borderRadius: '50%' }} />
            <i className={`fa fa-share float-right`} style={{ marginRight: 5, backgroundColor: '#000', padding: 8, borderRadius: '50%' }} />
          </div>
        </div>}
      </div>
    )
  }
}
