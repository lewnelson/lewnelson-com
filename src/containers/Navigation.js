import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './navigation.scss'
import { Link } from 'react-router-dom'
import { Home, About, Contact, Projects } from '../pages'
import { getPath } from '../helpers'
import { isSmall } from '../selectors/device'
import { openNavigation, closeNavigation } from '../actions/navigation'

export class Navigation extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    isSmall: PropTypes.bool.isRequired,
    navigationOpen: PropTypes.bool.isRequired,
    closeNavigation: PropTypes.func.isRequired,
    openNavigation: PropTypes.func.isRequired
  }

  getPathSegments (url) {
    return url.replace(/^\//, '').split('/')
  }

  getClassNames (linkPath) {
    let classNames = [ 'item' ]
    const linkPathSegments = this.getPathSegments(linkPath)
    const currentPathSegments = this.getPathSegments(this.props.path)
    let match = true
    while (currentPathSegments.length > 0 && match) {
      let nextLinkPathSegment = linkPathSegments.shift()
      let nextCurrentPathSegment = currentPathSegments.shift()
      if (nextLinkPathSegment === undefined) continue
      if (
        nextCurrentPathSegment === undefined ||
        nextLinkPathSegment !== nextCurrentPathSegment
      ) {
        match = false
      }
    }

    if (match) classNames.push('active')
    return classNames.join(' ')
  }

  componentDidUpdate (prevProps) {
    if (
      this.props.navigationOpen &&
      (
        (!this.props.isSmall && prevProps.isSmall) ||
        (this.props.isSmall && this.props.path !== prevProps.path)
      )
    ) {
      this.props.closeNavigation()
    }
  }

  getLinks () {
    return [
      {
        path: getPath(Home),
        title: 'Home'
      },
      {
        path: getPath(About),
        title: 'About'
      },
      {
        path: getPath(Projects),
        title: 'Projects'
      },
      {
        path: getPath(Contact),
        title: 'Contact'
      }
    ]
  }

  render () {
    const { navigationOpen, closeNavigation, openNavigation, isSmall } = this.props
    const drawerClasses = [ 'drawer-navigation' ]
    if (navigationOpen) drawerClasses.push('open')
    if (!isSmall) drawerClasses.push('expanded')
    return (
      <div className={drawerClasses.join(' ')}>
        <div className='fixed-navigation-wrapper'>
          <div className='fixed-navigation-container'>
            <div className='navigation-bar'>
              <div className='elements-container'>
                <div className='title'>
                  Lewis Nelson
                </div>
              </div>
              {isSmall &&
                <a
                  className='toggle-drawer'
                  onClick={() => navigationOpen ? closeNavigation() : openNavigation()}
                >
                  {
                    navigationOpen
                      ? (<ion-icon name='md-close' />)
                      : (<ion-icon name='md-menu' />)
                  }
                </a>
              }
              {!isSmall &&
                this.getLinks().map(link => (
                  <Link key={link.path} to={link.path} className={this.getClassNames(link.path)}>{link.title}</Link>
                ))
              }
            </div>
          </div>
        </div>
        <nav>
          {
            this.getLinks().map(link => (
              <Link key={link.path} to={link.path} className={this.getClassNames(link.path)}>{link.title}</Link>
            ))
          }
        </nav>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  path: state.router.location.pathname,
  isSmall: isSmall(state),
  navigationOpen: state.navigation.open
})

export const mapDispatchToProps = (dispatch) => ({
  closeNavigation: () => dispatch(closeNavigation()),
  openNavigation: () => dispatch(openNavigation())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
