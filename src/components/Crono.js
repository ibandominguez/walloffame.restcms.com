import React, { Component } from 'react'
import Radium from 'radium'
import { Container, Row, Col } from 'reactstrap'

const styles = {
  container: {
    backgroundColor: '#111',
    color: '#fff'
  },
  wrapper: {
    //
  },
  input: {
    background: '#555',
    outline: 0,
    border: 'none',
    padding: '10px 60px',
    borderRadius: '30px'
  }
}

class Crono extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Container style={styles.wrapper}>
          <Row className={'py-5'}>
            <Col>
              <h2>Cronograma</h2>
            </Col>
            <Col>
              <input style={styles.input} type={'search'} className={'float-right'} placeholder={'Buscar acontecimiento'} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Radium(Crono)
