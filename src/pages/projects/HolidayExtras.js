import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Projects } from '../'
import { getPath } from '../../helpers/routing'
import { BackTo, Img } from '../../components'
import { isExtraSmall } from '../../selectors/device'
import './HolidayExtras.scss'

export class HolidayExtras extends Component {
  title = 'Lewis Nelson - Holiday Extras'

  static routerProps () {
    return {
      exact: true,
      path: `${getPath(Projects)}/holiday-extras`
    }
  }

  static propTypes = {
    isExtraSmall: PropTypes.bool.isRequired
  }

  constructor (props) {
    super(props)
    this.state = { selectedScreenShot: -1 }
  }

  resetSelectedScreenshot () {
    this.setState({ selectedScreenShot: -1 })
  }

  componentDidUpdate (prevProps) {
    if (prevProps.isExtraSmall !== this.props.isExtraSmall) this.resetSelectedScreenshot()
  }

  onScreenshotClick = key => {
    if (!this.props.isExtraSmall) return
    if (key === this.state.selectedScreenShot) return this.resetSelectedScreenshot()
    this.setState({ selectedScreenShot: key })
  }

  render () {
    const { selectedScreenShot } = this.state
    return (
      <div id='holiday-extras-page'>
        <div className='page-container'>
          <BackTo page={Projects} title='projects' />
          <div className='main-image middle'>
            <Img
              src='/images/projects/holiday-extras.png'
              alt='Holiday Extras'
            />
          </div>
          <p>
            I've been working at <a href='https://www.holidayextras.co.uk/' title='Holiday Extras' target='_blank'>Holiday Extras</a> as a software engineer since August 2017. In that time I've been working on the mobile pod. Initially this meant working on the mobile web booking engine, updating the design and functionality. Our choices were heavily influenced by facts so the majority of our work was AB tested. If it lost then we'd go back to the drawing board, if it won then we'd take the idea forward and iterate on it.
          </p>
          <p>
            We were primarily working with React on the booking engine for the UI. A lot of the state was still being handled by backbone (the original framework for the project), but laterally this shifted to redux.
          </p>
          <ul className='screenshots'>
            <li
              onClick={() => this.onScreenshotClick('web-0')}
              className={selectedScreenShot === 'web-0' ? 'selected' : ''}
            >
              <Img
                lowQualitySrc='/images/projects/holiday-extras/parking-availability-thumbnail.png'
                src='/images/projects/holiday-extras/parking-availability.png'
                alt='Holiday Extras parking availability'
              />
            </li>
            <li
              onClick={() => this.onScreenshotClick('web-1')}
              className={selectedScreenShot === 'web-1' ? 'selected' : ''}
            >
              <Img
                lowQualitySrc='/images/projects/holiday-extras/hotel-availability-thumbnail.png'
                src='/images/projects/holiday-extras/hotel-availability.png'
                alt='Holiday Extras hotel availability'
              />
            </li>
            <li
              onClick={() => this.onScreenshotClick('web-2')}
              className={selectedScreenShot === 'web-2' ? 'selected' : ''}
            >
              <Img
                lowQualitySrc='/images/projects/holiday-extras/hotel-product-thumbnail.png'
                src='/images/projects/holiday-extras/hotel-product.png'
                alt='Holiday Extras hotel product'
              />
            </li>
            <li
              onClick={() => this.onScreenshotClick('web-3')}
              className={selectedScreenShot === 'web-3' ? 'selected' : ''}
            >
              <Img
                lowQualitySrc='/images/projects/holiday-extras/upgrades-availability-thumbnail.png'
                src='/images/projects/holiday-extras/upgrades-availability.png'
                alt='Holiday Extras upgrades availability'
              />
            </li>
          </ul>
          <p>
            As part of the mobile pod we also had ownership of the app suite which consists of these apps:
          </p>
          <ul>
            <li>
              <p>
                Holiday Extras booking app (<a href='https://itunes.apple.com/gb/app/holiday-extras/id783591488' target='_ios' title='Holiday Extras booking app iOS'>iOS</a>, <a href='https://play.google.com/store/apps/details?id=com.HolidayExtras.Tripapp&hl=en_GB' target='_android' title='Holiday Extras booking app Android'>Android</a>)
              </p>
            </li>
            <li>
              <p>
                HEHA! Trip Planner (<a href='https://itunes.apple.com/gb/app/heha-trip-planner/id1227868892' target='_ios' title='HEHA! Trip Planner app iOS'>iOS</a>, <a href='https://play.google.com/store/apps/details?id=com.holidayextras.takeoff' target='_android' title='HEHA! Trip Planner app Android'>Android</a>)
              </p>
            </li>
            <li>
              <p>
                Holiday Countdown - by HX (<a href='https://itunes.apple.com/gb/app/holiday-countdown-by-hx/id915429488' target='_ios' title='Holiday Countdown - by HX app iOS'>iOS</a>, <a href='https://play.google.com/store/apps/details?id=com.holidayextras.countdown' target='_android' title='Holiday Countdown - by HX app Android'>Android</a>)
              </p>
            </li>
          </ul>
          <p>The booking app we inherited was written in cordova which proved to be a pain point for us mainly due to neglect on the project. I had decided to take the lead on a proposal for rewriting the app in React Native. We got buy in from directors to go ahead and rewrite the app. We needed to have feature parity with the cordova version and were also on a tight time schedule, so in order to save some time we started out using <a href='https://expo.io/' target='_blank' title='Expo'>Expo</a>. We soon ran into limitations with Expo so then ejected the app into a React Native application.
          </p>
          <p>
            The main tech stack of the booking app consists of React Native and redux. For automated testing we use jest and enzyme and we also have CI setup on Travis. We have also integrated the app with third party services. These include <a href='https://branch.io' target='_blank' title='branch.io'>branch.io</a> for deep linking in both marketing and redirects from our other services.
          </p>
          <p>
            As the app was a greenfield project we were one of the first pods to utilise certain services in our microservice architecture. This meant we were working on several services to help fix any issues we came across or to implement features we needed within the app.
          </p>
          <ul className='screenshots'>
            <li
              onClick={() => this.onScreenshotClick('app-0')}
              className={selectedScreenShot === 'app-0' ? 'selected' : ''}
            >
              <Img
                lowQualitySrc='/images/projects/holiday-extras/app-home-thumbnail.png'
                src='/images/projects/holiday-extras/app-home.png'
                alt='Holiday Extras booking app home screen'
              />
            </li>
            <li
              onClick={() => this.onScreenshotClick('app-1')}
              className={selectedScreenShot === 'app-1' ? 'selected' : ''}
            >
              <Img
                lowQualitySrc='/images/projects/holiday-extras/app-trips-thumbnail.png'
                src='/images/projects/holiday-extras/app-trips.png'
                alt='Holiday Extras booking app trips screen'
              />
            </li>
            <li
              onClick={() => this.onScreenshotClick('app-2')}
              className={selectedScreenShot === 'app-2' ? 'selected' : ''}
            >
              <Img
                lowQualitySrc='/images/projects/holiday-extras/app-trip-thumbnail.png'
                src='/images/projects/holiday-extras/app-trip.png'
                alt='Holiday Extras booking app trip screen'
              />
            </li>
            <li
              onClick={() => this.onScreenshotClick('app-3')}
              className={selectedScreenShot === 'app-3' ? 'selected' : ''}
            >
              <Img
                lowQualitySrc='/images/projects/holiday-extras/app-booking-thumbnail.png'
                src='/images/projects/holiday-extras/app-booking.png'
                alt='Holiday Extras booking app booking screen'
              />
            </li>
          </ul>
          <p>
            Something important at Holiday Extras is code quality, this stood true even when urgent work was required. This meant stringent automated testing and peer reviewing code. Unfortunately none of my code I've written for Holiday Extras is open source with the exception of a few forks on open source libraries I've used.
          </p>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  isExtraSmall: isExtraSmall(state)
})

export default connect(mapStateToProps)(HolidayExtras)
