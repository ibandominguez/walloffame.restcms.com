import React, { Component } from 'react'
import Radium from 'radium'
import { Container, Row, Col } from 'reactstrap'

const styles = {
  container: {
    backgroundColor: '#222',
    color: '#fff',
    boxShadow: '0px 18px 70px 0px rgba(0,0,0,0.75)'
  },
  middleWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  middleTitle: {
    fontFamily: '\'Cookie\', cursive',
    fontSize: 60
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  iconsWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
    backgroundColor: '#000',
    height: 40,
    width: 40,
    padding: 10,
    borderRadius: '50%',
    textAlign: 'center',
    fontSize: 20,
    marginLeft: 10,
    ':hover': {
      opacity: 0.5
    }
  }
}

class Header extends Component {
  getStyles() {
    if (this.props.fixedTop) {
      return {
        ...styles.container,
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0
      }
    }

    return styles.container
  }

  render() {
    return (
      <div style={this.getStyles()}>
        <Container className={'py-4'}>
          <Row>
            <Col style={styles.logoWrapper}>
              <img src={'https://www.alejandrosanz.com/images/alejandro-sanz.svg'} className={'img-fluid'} />
            </Col>
            <Col style={styles.middleWrapper}>
              <img src={'https://www.alejandrosanz.com/images/alejandro-sanz.svg'} className={'img-fluid'} />
            </Col>
            <Col style={styles.iconsWrapper}>
              <a href={``} target={'_blank'}>
                <i key={1} className={'fa fa-facebook'} style={styles.icon} />
              </a>
              <a href={``} target={'_blank'}>
                <i key={2} className={'fa fa-twitter'} style={styles.icon} />
              </a>
              <a href={``} target={'_blank'}>
                <i key={3} className={'fa fa-instagram'} style={styles.icon} />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Radium(Header)
