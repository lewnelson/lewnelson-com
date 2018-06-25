import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './navigation.scss'
import { Link } from 'react-router-dom'
import { Home, About } from '../pages'
import { getPath } from '../helpers'
import { isSmall } from '../selectors/device'
import { openNavigation, closeNavigation } from '../actions/device'

export class Navigation extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    isSmall: PropTypes.bool.isRequired,
    navigationOpen: PropTypes.bool.isRequired,
    closeNavigation: PropTypes.func.isRequired,
    openNavigation: PropTypes.func.isRequired
  }

  getClassNames (linkPath) {
    const { path } = this.props
    let classNames = [ 'item' ]
    if (path.substr(0, linkPath.length) === linkPath) classNames.push('active')
    return classNames.join(' ')
  }

  getContainerClassNames () {
    const { isSmall } = this.props
    let classNames = [ 'nav' ]
    if (isSmall) classNames.push('small')
    return classNames.join(' ')
  }

  componentDidUpdate (prevProps) {
    if (!this.props.isSmall && prevProps.isSmall && this.props.navigationOpen) this.props.closeNavigation()
  }

  render () {
    const { navigationOpen, closeNavigation, openNavigation, isSmall } = this.props
    const links = [
      {
        path: getPath(Home),
        title: 'Home'
      },
      {
        path: getPath(About),
        title: 'About'
      }
    ]

    return (
      <nav className={this.getContainerClassNames()}>
        {
          isSmall &&
          (
            <button
              onClick={() => navigationOpen ? closeNavigation() : openNavigation()}
            >
              {navigationOpen ? 'Close' : 'Open'}
            </button>
          )
        }
        {
          links.map(link => (
            <Link key={link.path} to={link.path} className={this.getClassNames(link.path)}>{link.title}</Link>
          ))
        }
      </nav>
    )
  }
}

export const mapStateToProps = state => ({
  path: state.router.location.pathname,
  isSmall: isSmall(state),
  navigationOpen: state.device.open
})

export const mapDispatchToProps = (dispatch) => ({
  closeNavigation: () => dispatch(closeNavigation()),
  openNavigation: () => dispatch(openNavigation())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
