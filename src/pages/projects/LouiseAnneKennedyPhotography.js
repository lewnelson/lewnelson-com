import React, { Component } from 'react'
import { Projects } from '../'
import { getPath } from '../../helpers/routing'
import { BackTo, Img, ExternalLink } from '../../components'
import './websiteShowcase.scss'

export default class LouiseAnneKennedyPhotography extends Component {
  static routerProps () {
    return {
      exact: true,
      path: `${getPath(Projects)}/louise-anne-kennedy-photography`
    }
  }

  render () {
    return (
      <div id='louise-anne-kennedy-photography-page' className='website-showcase'>
        <div className='page-container'>
          <BackTo page={Projects} title='projects' />
          <div className='main-image'>
            <Img
              lowQualitySrc='/images/projects/louise-anne-kennedy-photography/device-showcase-thumbnail.png'
              src='/images/projects/louise-anne-kennedy-photography/device-showcase.png'
              alt='louiseannekennedyphotography.com'
            />
          </div>
          <div className='middle'>
            <ExternalLink
              link='http://louiseannekennedyphotography.com'
              title='Louise Anne Kennedy Photography'
            >
              louiseannekennedyphotography.com
            </ExternalLink>
          </div>
          <p>
            Louise is a professional photographer specialising in portrait photography. She wanted a portfolio website to showcase her work and liked the idea of having a horizontally scrolling website much like how you would browse a more traditional photo album. The website was to be made with <a href='https://2.cargocollective.com/' title='Cargo Collective' target='_blank'>Cargo</a> which was a website creator focused on content management which is popular with artists and designers. I'd been asked to help out as Cargo isn't very user friendly if you want to use anything but their basic templates.
          </p>
        </div>
      </div>
    )
  }
}
