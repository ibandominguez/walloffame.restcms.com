import React, { Component } from 'react'
import Radium from 'radium'
import { Container, Row, Col } from 'reactstrap'

const styles = {
  container: {
    backgroundColor: '#222',
    color: '#fff'
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
  render() {
    return (
      <div style={styles.container}>
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
