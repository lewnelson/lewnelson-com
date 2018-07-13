import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './externalLink.scss'

export default class ExternalLink extends Component {
  static propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
  }

  render () {
    const { link, title, children } = this.props
    return (
      <a
        href={link}
        title={title}
        target='_blank'
        className='external-link'
      >
        <ion-icon name='md-link' /> {children}
      </a>
    )
  }
}
