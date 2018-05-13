import 'whatwg-fetch'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { Header, Home, Blog, Current, NotFound } from './containers'
import rootReducer from './reducers'
import * as actions from './actions'
import * as services from './services'

const store = createStore(rootReducer, applyMiddleware(thunk))
const history = createHistory()

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
    store.dispatch(actions.setLocale(services.getLocaleFromUrl()))
    store.dispatch(actions.getSite())
    store.dispatch(actions.getHome())
    store.dispatch(actions.getPages())
    store.dispatch(actions.getPosts())
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Header />
            <Switch>
              <Route exact path={'/'} component={Home} />
              <Route exact path={'/:locale'} component={Home} />
              <Route exact path={`/:locale/blog`} component={Blog} />
              <Route exact path={'/:locale/:type/:current'} component={Current} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
