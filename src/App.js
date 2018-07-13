import React, { Component } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { store, history } from './store'
import { Route, Switch } from 'react-router'
import * as Pages from './pages'
import NotFound from './pages/NotFound'
import Listeners from './containers/Listeners'
import ScrollToTop from './containers/ScrollToTop'
import FeatureDetection from './containers/FeatureDetection'
import Navigation from './containers/Navigation'
import './app.scss'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <FeatureDetection />
          <ConnectedRouter history={history}>
            <ScrollToTop>
              <Navigation />
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
            </ScrollToTop>
          </ConnectedRouter>
          <Listeners />
        </div>
      </Provider>
    )
  }
}
