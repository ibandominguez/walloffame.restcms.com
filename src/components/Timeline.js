import React, { Component } from 'react'
import Radium from 'radium'

class Arrow extends Component {
  render () {
    return (
      <div style={{
        height: '30px',
        fontSize: '20px',
        width: '10%',
        textAlign: 'center',
        float: 'left',
        ...this.props.style
      }}>
        <i className={`fa fa-${this.props.icon}`} />
      </div>
    )
  }
}

class EventsLine extends Component {
  render() {
    return (
      <div style={{ overflow: 'hidden', height: this.props.height, position: 'relative', width: this.props.width, ...this.props.style }}>
        <div style={{ position: 'absolute', left: 0, top: ((this.props.height / 2) - 1), width: '100%', height: 2, backgroundColor: '#ccc' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: this.props.height }}>
          {new Array(120).fill(null).map((item, index) => (
            <div style={{
              height: this.props.height - 2,
              width: this.props.height - 2,
              margin: 1,
              float: 'left'
            }}>
              {index % (Math.floor(Math.random() * 6) + 1) === 0 && <div style={{
                boxSizing: 'border-box',
                height: this.props.height - 2,
                width: this.props.height - 2,
                border: '2px solid #ccc',
                backgroundColor: 'rgb(17, 17, 17)',
                borderRadius: '50%'
              }}></div>}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

class Timeline extends Component {
  render() {
    return (
      <div className={'clearfix'} style={{ padding: '30px 0' }}>
        <Arrow style={{ float: 'left' }} icon={'chevron-left'} />
        <EventsLine style={{ float: 'left' }} height={20} width={'80%'} />
        <Arrow style={{ float: 'left' }} icon={'chevron-right'} />
      </div>
    )
  }
}

export default Radium(Timeline)
