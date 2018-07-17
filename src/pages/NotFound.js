import React, { Component } from 'react'
import { Img } from '../components'
import './notFound.scss'

export default class NotFound extends Component {
  render () {
    return (
      <div id='not-found-page'>
        <div className='page-container middle'>
          <h1>Page Not Found</h1>
          <div className='not-found-graphic'>
            <div className='tumbleweed-container'>
              <div className='background-tumbleweed-1'>
                <Img
                  src='/images/tumbleweed.png'
                  lowQualitySrc='/images/tumbleweed-thumbnail.png'
                  alt='tumbleweed'
                />
              </div>
              <div className='background-tumbleweed-2'>
                <Img
                  src='/images/tumbleweed.png'
                  lowQualitySrc='/images/tumbleweed-thumbnail.png'
                  alt='tumbleweed'
                />
              </div>
              <div className='foreground-tumbleweed'>
                <Img
                  src='/images/tumbleweed.png'
                  lowQualitySrc='/images/tumbleweed-thumbnail.png'
                  alt='tumbleweed'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
