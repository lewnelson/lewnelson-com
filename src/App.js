import React, { Component } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { store, history } from './store'
import { Route, Switch } from 'react-router'
import * as Pages from './pages'
import NotFound from './pages/NotFound'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Switch>
              {
                Object.keys(Pages).map(page => {
                  const Page = Pages[page]
                  return (
                    <Route
                      key={page}
                      {...Page.routerProps()}
                      component={Page}
                    />
                  )
                })
              }
              <Route component={NotFound} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}
