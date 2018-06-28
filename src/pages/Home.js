import React, { Component } from 'react'
import { TypeWriter } from '../components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { incrementLinesIndex } from '../actions/home'
import './home.scss'

export class Home extends Component {
  static routerProps () {
    return {
      exact: true,
      path: '/'
    }
  }

  static propTypes = {
    linesIndex: PropTypes.number.isRequired,
    incrementLinesIndex: PropTypes.func.isRequired
  }

  lines = [
    {
      el: 'h1',
      text: 'My name is Lewis Nelson'
    },
    {
      el: 'h2',
      text: 'I am a software engineer from Scotland',
      keepCursor: true
    }
  ]

  socialLinks = [
    {
      image: '/images/octocat.png',
      alt: 'Octocat',
      title: 'GitHub',
      href: 'https://github.com/lewnelson'
    },
    {
      image: '/images/twitter.png',
      alt: 'Twitter',
      title: 'Twitter',
      href: 'https://twitter.com/lewisgnelson'
    },
    {
      image: '/images/stack-overflow.png',
      alt: 'Stack Overflow',
      title: 'My Stack Overflow story',
      href: 'https://stackoverflow.com/users/story/4112281'
    },
    {
      image: '/images/linkedin.png',
      alt: 'LinkedIn',
      title: 'LinkedIn',
      href: 'https://uk.linkedin.com/in/lewisgnelson'
    },
    {
      image: '/images/codewars.png',
      alt: 'Codewars',
      title: 'Join me on Codewars',
      href: 'https://www.codewars.com/r/aGPnsw'
    }
  ]

  finishedLine = () => {
    this.props.incrementLinesIndex()
  }

  renderSocialLinks () {
    return (
      <div className='social-links'>
        {
          this.socialLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              title={link.title}
              target='_blank'
            >
              <img
                src={link.image}
                alt={link.alt}
              />
            </a>
          ))
        }
      </div>
    )
  }

  render () {
    const { linesIndex } = this.props
    const lines = this.lines.slice(0, linesIndex + 1)
    return (
      <div id='home-page'>
        <div className='page-container'>
          {
            lines.map((line, index) => (
              <TypeWriter
                text={line.text}
                key={line.text}
                el={line.el}
                onComplete={this.finishedLine}
                completionDelay={line.completionDelay}
                keepCursor={line.keepCursor}
                complete={index < linesIndex}
              />
            ))
          }
        </div>
        {this.renderSocialLinks()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  linesIndex: state.home.linesIndex
})

const mapDispatchToProps = dispatch => ({
  incrementLinesIndex: () => dispatch(incrementLinesIndex())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
