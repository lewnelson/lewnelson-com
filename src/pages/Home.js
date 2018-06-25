import React, { Component } from 'react'
import Navigation from '../containers/Navigation'

export default class Home extends Component {
  static routerProps () {
    return {
      exact: true,
      path: '/'
    }
  }

  render () {
    return (
      <div>
        <Navigation />
      </div>
    )
  }
}
