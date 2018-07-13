import React from 'react'
import Page from '../containers/Page'
import { TypeWriter, SocialLinks, SourceCodeLink } from '../components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { incrementLinesIndex } from '../actions/home'
import './home.scss'

export class Home extends Page {
  title = 'Lewis Nelson - Software Engineer'

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

  finishedLine = () => {
    this.props.incrementLinesIndex()
  }

  render () {
    const { linesIndex } = this.props
    const lines = this.lines.slice(0, linesIndex + 1)
    return (
      <div id='home-page'>
        <div className='view-source-code-container'>
          <SourceCodeLink
            link='https://github.com/lewnelson/lewnelson-com'
            title='GitHub for lewnelson.com'
          />
        </div>
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
        <div className='social-links-container'>
          <SocialLinks />
        </div>
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
