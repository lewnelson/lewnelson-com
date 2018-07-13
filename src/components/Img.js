import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Loader } from '.'
import './img.scss'

export default class Img extends Component {
  static propTypes = {
    lowQualitySrc: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      imageReady: false
    }
  }

  componentDidMount () {
    const image = new Image()
    image.addEventListener('load', () => {
      this.setState({ imageReady: true })
    })

    image.src = this.props.src
  }

  render () {
    const { imageReady } = this.state
    const { lowQualitySrc, src, alt } = this.props
    const classes = [ 'img-container' ]
    if (!lowQualitySrc && !imageReady) classes.push('mask')
    if (imageReady) classes.push('ready')
    return (
      <div className={classes.join(' ')}>
        <img
          src={!imageReady && lowQualitySrc ? lowQualitySrc : src}
          alt={alt}
        />
        <div className='mask'>
          <Loader />
        </div>
      </div>
    )
  }
}
