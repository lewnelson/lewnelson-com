import React, { Component } from 'react'
import RubixCube from '../components/rubixCube'

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
        <RubixCube />
      </div>
    )
  }
}
