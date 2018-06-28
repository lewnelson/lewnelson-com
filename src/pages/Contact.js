import React, { Component } from 'react'

export default class Contact extends Component {
  static routerProps () {
    return {
      exact: true,
      path: '/contact'
    }
  }

  render () {
    return (
      <div>
        <p>Contact</p>
      </div>
    )
  }
}
