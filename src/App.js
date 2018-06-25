import React, { Component } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { store, history } from './store'
import { Route, Switch } from 'react-router'
import * as Pages from './pages'
import NotFound from './pages/NotFound'
import Listeners from './containers/Listeners'
import FeatureDetection from './containers/FeatureDetection'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <FeatureDetection />
          <ConnectedRouter history={history}>
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
          </ConnectedRouter>
          <Listeners />
        </div>
      </Provider>
    )
  }
}
