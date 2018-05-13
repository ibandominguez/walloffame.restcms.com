import React, { Component } from 'react'
import Radium from 'radium'
import { Container, Row, Col } from 'reactstrap'

const styles = {
  container: {
    backgroundColor: '#222',
    color: '#fff',
    fontFamily: 'Roboto, sans serif',
    marginTop: 80,
    textAlign: 'center',
    paddingTop: 45,
    paddingBottom: 45
  },
  ctaWrapper: {
    maxWidth: '600px',
    width: '100%',
    margin: '0 auto'
  }
}

class CTA extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Container className={'py-5'} style={styles.ctaWrapper}>
          <h1 className={'display-5 mb-3'}>¿Cuánto conoces la trayectoria de tu artista favorito?</h1>
          <p>
            Descrube los acontecimientos más importantes a lo largo de la carrera profesional de Alejandro Sanz. <b>#MuroDeLaFama</b> te ofrece todos y cada uno de ellos, ordenados cronológicamente.
          </p>
        </Container>
      </div>
    )
  }
}

export default Radium(CTA)
