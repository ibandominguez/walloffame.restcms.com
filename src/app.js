import 'whatwg-fetch'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Home } from './containers'
import rootReducer from './reducers'
import * as actions from './actions'
import * as services from './services'

const store = createStore(rootReducer, applyMiddleware(thunk))

class App extends Component {
  constructor(props) {
    super(props)
    this.setUpLoader()
    this.bootDispatchers()
  }

  setUpLoader() {
    let origOpen = XMLHttpRequest.prototype.open
    XMLHttpRequest.prototype.open = function() {
      store.dispatch(actions.increaseLoader())
      this.addEventListener('load', () => {
        store.dispatch(actions.decreaseLoader())
      })
      origOpen.apply(this, arguments)
    }
  }

  bootDispatchers() {
    //
  }

  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
