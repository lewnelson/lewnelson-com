import React, { Component } from 'react'
import { Loader } from '.'
import './pageLoader.scss'

export default class PageLoader extends Component {
  render () {
    return (
      <div className='page-container'>
        <div className='page-loader'>
          <Loader />
        </div>
      </div>
    )
  }
}
