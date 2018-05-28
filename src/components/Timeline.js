import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Radium from 'radium'
import moment from 'moment'
import { Icon, HorizontalScroll } from './'

class EventsLine extends Component {
  getDiffDays() {
    const startDate = this.props.events.reduce((smallestDate, currentEvent) => {
      return smallestDate.isAfter(currentEvent.date) ? currentEvent.date : smallestDate
    }, this.props.events[0].date)

    const endDate = this.props.events.reduce((biggestDate, currentEvent) => {
      return biggestDate.isBefore(currentEvent.date) ? currentEvent.date : biggestDate
    }, this.props.events[this.props.events.length - 1].date)

    return endDate.diff(startDate, 'days')
  }

  render() {
    return (
      <div style={{ overflow: 'hidden', height: this.props.height, position: 'relative', width: this.props.width, ...this.props.style }}>
        <div style={{ position: 'absolute', left: 0, top: ((this.props.height / 2) - 1), width: '100%', height: 2, backgroundColor: '#ccc' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: this.props.height }}>
          {new Array(this.getDiffDays()).fill(null).map((item, index) => (
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

class DateDot extends Component {
  render() {
    return (
      <div style={{ display: 'inline-block', borderSize: 'border-box', margin: 5 }}>
        {!!this.props.event && <div
          style={{
            zIndex: 9999999,
            position: 'relative',
            borderSize: 'border-box',
            height: 20,
            width: 20,
            borderRadius: '50%',
            border: '2px solid #ccc',
            backgroundColor: 'rgb(17, 17, 17)',
          }}
        />}
      </div>
    )
  }
}

class TimeLine extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={2} className={'text-center'}>
            <Icon icon={'chevron-left'} />
          </Col>
          <Col xs={8}>
            <HorizontalScroll style={{ padding: 0 }}>
              {/* <EventsLine {...this.props} style={{ float: 'left' }} height={20} width={'80%'} /> */}
              {new Array(60).fill(null).map((item, index) => (
                <DateDot key={index} event={index % (Math.floor(Math.random() * 6) + 1) === 0} />
              ))}
            </HorizontalScroll>

            <div style={{ position: 'absolute', top: '40%', left: 0, width: '100%', height: 2, background: '#ccc' }} />
          </Col>
          <Col xs={2} className={'text-center'}>
            <Icon icon={'chevron-right'} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Radium(TimeLine)
