import 'whatwg-fetch'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import { Header, Footer, CTA, Crono } from './components'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: this.createEvents()
    }
    this.setUpLoader()
  }

  createEvents() {
    return new Array(30).fill(null).map((item, index) => ({
      date: moment().format('dd-mm-YYYY'),
      title: `Event: ${index + 1}`,
      description: `Description: ${index + 1}`,
      media: `https://fakeimg.pl/400x400/?text=${index + 1}`
    }))
  }

  setUpLoader() {
    let app = this
    let origOpen = XMLHttpRequest.prototype.open
    XMLHttpRequest.prototype.open = function() {
      app.setState({ loader: app.state.loader++ })
      this.addEventListener('load', () => {
        app.setState({ loader: app.state.loader-- })
      })
      origOpen.apply(this, arguments)
    }
  }

  render() {
    return (
      <section>
        <Header fixedTop={true} />
        <CTA />
        <Crono {...this.state} />
        <Footer />
      </section>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
