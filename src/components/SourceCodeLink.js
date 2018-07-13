import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './sourceCode.scss'

export default class SourceCodeLink extends Component {
  static propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  render () {
    const { link, title } = this.props
    return (
      <a
        href={link}
        title={title}
        target='_blank'
        className='view-source-code'
      >
        View source code
      </a>
    )
  }
}
