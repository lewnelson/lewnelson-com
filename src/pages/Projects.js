import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getPath } from '../helpers'
import './projects.scss'

import {
  RubixCube,
  TheCrafters,
  LouiseAnneKennedyPhotography,
  HomeCinema,
  BordersRailwayGuide
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
      <div id='projects-page'>
        <div className='page-container'>
          <div className='projects'>
            <Link to={getPath(RubixCube)}>
              <div className='rubix-cube project'>
                <div className='image-container' />
                <p>WebGL Rubix Cube</p>
              </div>
            </Link>
            <Link to={getPath(HomeCinema)}>
              <div className='home-cinema project'>
                <div className='image-container' />
                <p>Home Cinema</p>
              </div>
            </Link>
            <Link to={getPath(TheCrafters)}>
              <div className='the-crafters project'>
                <div className='image-container' />
                <p>thecrafters.co.uk</p>
              </div>
            </Link>
            <Link to={getPath(LouiseAnneKennedyPhotography)}>
              <div className='louise-anne-kennedy-photography project'>
                <div className='image-container' />
                <p>louiseannekennedyphotography.com</p>
              </div>
            </Link>
            <Link to={getPath(BordersRailwayGuide)}>
              <div className='borders-railway-guide project'>
                <div className='image-container' />
                <p>bordersrailwayguide.co.uk</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
