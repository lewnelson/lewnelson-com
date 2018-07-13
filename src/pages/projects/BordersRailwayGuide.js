import React, { Component } from 'react'
import { Projects } from '../'
import { getPath } from '../../helpers/routing'
import { BackTo, Img, ExternalLink } from '../../components'
import './websiteShowcase.scss'

export default class BordersRailwayGuide extends Component {
  static routerProps () {
    return {
      exact: true,
      path: `${getPath(Projects)}/borders-railway-guide`
    }
  }

  render () {
    return (
      <div id='borders-railway-guide-page' className='website-showcase'>
        <div className='page-container'>
          <BackTo page={Projects} title='projects' />
          <div className='main-image'>
            <Img
              lowQualitySrc='/images/projects/borders-railway-guide/device-showcase-thumbnail.jpg'
              src='/images/projects/borders-railway-guide/device-showcase.jpg'
              alt='bordersrailwayguide.co.uk'
            />
          </div>
          <div className='middle'>
            <ExternalLink
              link='https://bordersrailwayguide.co.uk'
              title='The Borders Railway Guide'
            >
              bordersrailwayguide.co.uk
            </ExternalLink>
          </div>
          <p>
            I was approached by <a href='https://www.locus-focus.co.uk/viewItem.php' title='Locus Focus' target='_blank'>Locus Focus</a>, a Scottish Borders heritage company based in Stow, to create a single page website which would be a platform for marketing their new guide to the Border's railway which was nearing completion at the time. Their guide was going to be available in print format as well as digital in the form of a mobile app available on iOS and Android. They were developing the app themselves, but needed someone to create their website.
          </p>
          <p>
            As they had already put a lot of work into the app by the time I joined the project there was already artwork which was being used in the app and on the print which I could edit and use for the website. The website is a single page site which links out to their product as well as displaying their Twitter feed.
          </p>
        </div>
      </div>
    )
  }
}
