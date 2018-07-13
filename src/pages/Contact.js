import React from 'react'
import Page from '../containers/Page'
import { SocialLinks, SourceCodeLink } from '../components'
import './contact.scss'

export default class Contact extends Page {
  title = 'Lewis Nelson - Get in touch'

  static routerProps () {
    return {
      exact: true,
      path: '/contact'
    }
  }

  render () {
    return (
      <div id='contact-page'>
        <div className='page-container'>
          <div className='social-links-container'>
            <SocialLinks />
            <div className='view-source-code-container'>
              <SourceCodeLink
                link='https://github.com/lewnelson/lewnelson-com'
                title='GitHub for lewnelson.com'
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
