import React, { Component } from 'react'

export default class Projects extends Component {
  static routerProps () {
    return {
      exact: true,
      path: '/projects'
    }
  }

  render () {
    return (
      <div>
        <p>Projects</p>
      </div>
    )
  }
}
