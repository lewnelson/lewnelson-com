import React from 'react'
import Page from '../../containers/Page'
import { Projects } from '../'
import { getPath } from '../../helpers/routing'
import { BackTo, Img, ExternalLink } from '../../components'
import './homeCinema.scss'

export default class HomeCinema extends Page {
  title = 'Lewis Nelson - Home cinema project'

  static routerProps () {
    return {
      exact: true,
      path: `${getPath(Projects)}/home-cinema`
    }
  }

  render () {
    return (
      <div id='home-cinema-page'>
        <div className='page-container'>
          <BackTo page={Projects} title='projects' />
          <div className='main-image middle'>
            <Img
              lowQualitySrc='/images/projects/home-cinema/home-cinema-thumbnail.jpg'
              src='/images/projects/home-cinema/home-cinema.jpg'
              alt='Home Cinema'
            />
          </div>
          <div className='middle'>
            <ExternalLink
              link='https://www.avforums.com/threads/cinema-room-home-office.2151808/'
              title='Home cinema build thread'
            >
              Home cinema build thread
            </ExternalLink>
            <p>
              A personal project to setup a home cinema.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
