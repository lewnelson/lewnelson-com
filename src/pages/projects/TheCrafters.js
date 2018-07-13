import React, { Component } from 'react'
import { Projects } from '../'
import { getPath } from '../../helpers/routing'
import { BackTo, Img, ExternalLink } from '../../components'
import './websiteShowcase.scss'

export default class TheCrafters extends Component {
  static routerProps () {
    return {
      exact: true,
      path: `${getPath(Projects)}/the-crafters`
    }
  }

  render () {
    return (
      <div id='the-crafters-page' className='website-showcase'>
        <div className='page-container'>
          <BackTo page={Projects} title='projects' />
          <div className='main-image'>
            <Img
              lowQualitySrc='/images/projects/crafters/device-showcase-thumbnail.png'
              src='/images/projects/crafters/device-showcase.png'
              alt='thecrafters.co.uk'
            />
          </div>
          <div className='middle'>
            <ExternalLink
              link='https://www.thecrafters.co.uk'
              title='The Crafters'
            >
              thecrafters.co.uk
            </ExternalLink>
          </div>
          <p>
            The Crafters were formed in 1998 as a co-operative craft group based in Melrose, in the Scottish Borders. Their website was in need of updating so they approached me to see if I would update their website setting them up with a custom CMS. Their previous web host was also going to stop hosting their existing site so I now host and manage their website for them as well as their domain.
          </p>
        </div>
      </div>
    )
  }
}
