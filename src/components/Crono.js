import React, { Component } from 'react'
import Radium from 'radium'
import { Container, Row, Col, Button } from 'reactstrap'
import { Timeline, ImageCard, HorizontalScroll } from './'

const styles = {
  container: {
    backgroundColor: '#111',
    color: '#fff'
  },
  wrapper: {
    //
  },
  input: {
    color: '#fff',
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
          <Row>
            <Col>
              <Timeline />
            </Col>
          </Row>
        </Container>

        <HorizontalScroll>
          {this.props.events.map((event, index) => (
            <ImageCard
              key={index}
              {...event}
              open={index == 1}
              height={325}
              width={275}
              style={{
                margin: 5,
                display: 'inline-block',
                backgroundSize: 'cover'
              }}
            />
          ))}
        </HorizontalScroll>

        <Container>
          <Row>
            <Col>
              <Row className={'px-5 pt-5'} style={{ backgroundColor: '#222', borderRadius: 3, marginBottom: 2 }}>
                <Col>
                  <i className={`fa fa-star`} style={{ marginRight: 5, backgroundColor: '#016CFA', padding: 8, borderRadius: '50%' }} />
                  <span style={{ marginRight: 5, backgroundColor: '#000', padding: '8px 16px', borderRadius: 30 }}>
                    <i className={`fa fa-heart`} />{' '}10.888
                  </span>
                  <i className={`fa fa-share`} style={{ marginRight: 5, backgroundColor: '#000', padding: 8, borderRadius: '50%' }} />
                </Col>
                <Col></Col>
                <Col style={{ textAlign: 'right' }}>
                  <i className={`fa fa-times`} style={{ marginRight: 5, backgroundColor: '#000', padding: 8, borderRadius: '50%' }} />
                </Col>
                <Col xs={12} className={'p-5 text-center'}>
                  <h2>Person of the year</h2>
                  <p>Alejandro Sanz named 2017 Latin Grammy Person of the year</p>
                  <Button color={'primary'} style={{ borderRadius: 30, padding: '10px 30px', fontSize: 16 }}>Comentar</Button>
                </Col>
                <Col className={'py-3'} xs={12}>
                  <h4>Comentarios</h4>
                </Col>
              </Row>

              {new Array(8).fill(null).map((item, index) => (
                <Row key={index} className={'p-5 pt-5'} style={{ backgroundColor: '#222', borderRadius: 3, marginBottom: 2 }}>
                  <Col xs={12}>
                    <img style={{ marginRight: 5, borderRadius: '50%' }} height={32} width={32} src={'https://fakeimg.pl/32x32/'} />
                    <span style={{ marginRight: 5, backgroundColor: '#000', padding: '8px 16px', borderRadius: 30 }}>
                      Marta González
                    </span>
                    <span style={{ marginRight: 5, backgroundColor: '#000', padding: '8px 16px', borderRadius: 30 }}>
                      <i className={`fa fa-heart`} />{' '}521
                    </span>
                    <i className={`fa fa-share`} style={{ marginRight: 5, backgroundColor: '#000', padding: 8, borderRadius: '50%' }} />
                    <span style={{ padding: '8px 16px' }}>
                      hace 15 segundos
                    </span>
                  </Col>
                  <Col className={'mt-5'} xs={12}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Col>
                  {index % 3 === 0 && (
                    <Col className={'mt-5'} xs={12}>
                      <img className={'img-fluid'} src={'https://fakeimg.pl/400x120/'} />
                    </Col>
                  )}
                </Row>
              ))}
            </Col>
          </Row>
        </Container>

        <div style={{
          backgroundColor: '#02A5FD',
          height: 300,
          marginTop: -150,
          width: '100%'
        }}></div>
      </div>
    )
  }
}

export default Radium(Crono)
