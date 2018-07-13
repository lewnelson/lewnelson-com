import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getPath } from '../helpers'
import PropTypes from 'prop-types'
import './backTo.scss'

export default class SourceCodeLink extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    page: PropTypes.func.isRequired
  }

  render () {
    const { title, page } = this.props
    return (
      <Link to={getPath(page)} className='back-to-link' >
        <ion-icon name='md-arrow-dropleft-circle' />Back to {title}
      </Link>
    )
  }
}
