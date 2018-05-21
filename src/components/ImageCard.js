import React, { Component } from 'react'

const styles = {
  container: {
    position: 'relative',
    backgroundPosition: 'cover',
    marginRight: 25
  },
  block: {
    position: 'absolute',
    top: '70%',
    width: '100%',
    backgroundColor: '#222',
    color: '#fff',
    left: 0
  }
}

export default class ImageCard extends Component {
  getContainerStyles() {
    return {
      ...styles.container,
      width: this.props.width || 300,
      height: this.props.height || 400,
      backgroundImage: `url(${this.props.image || 'https://fakeimg.pl/300x300/'})`,
      backgroundPosition: 'cover',
      ...this.props.style
    }
  }

  render() {
    return (
      <div style={this.getContainerStyles()}>
        {this.props.open && <div className={'p-3'} style={styles.block}>
          <h5>Title HelloWorld</h5>
          <p style={{ color: '#aaa' }}>Lorem ipsum tripsum helloworld</p>
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
