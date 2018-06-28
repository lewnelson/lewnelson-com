import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getPath } from '../helpers'

import {
  RubixCube
} from '.'

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
        <p>Projects <Link to={getPath(RubixCube)}>Rubix Cube</Link></p>
      </div>
    )
  }
}
