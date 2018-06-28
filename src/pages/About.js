import React, { Component } from 'react'

export default class About extends Component {
  static routerProps () {
    return {
      exact: true,
      path: '/about'
    }
  }

  render () {
    return (
      <div>
        <p>About</p>
      </div>
    )
  }
}
