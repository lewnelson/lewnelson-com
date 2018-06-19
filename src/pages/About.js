import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Home } from '.'
import { getPath } from '../helpers'

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
        <h1>About</h1>
        <Link to={getPath(Home)}>Home</Link>
      </div>
    )
  }
}
