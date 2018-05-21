import 'whatwg-fetch'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Header, CTA, Crono } from './components'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.setUpLoader()
  }

  setUpLoader() {
    let app = this
    let origOpen = XMLHttpRequest.prototype.open
    XMLHttpRequest.prototype.open = function() {
      this.setState({ loader: this.state.loader++ })
      this.addEventListener('load', () => {
        this.setState({ loader: this.state.loader-- })
      })
      origOpen.apply(this, arguments)
    }
  }

  render() {
    return (
      <section>
        <Header fixedTop={true} />
        <CTA />
        <Crono />
        <Header />
      </section>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
