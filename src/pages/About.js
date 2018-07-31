import React from 'react'
import Page from '../containers/Page'
import { Link } from 'react-router-dom'
import { getPath } from '../helpers'
import { Projects } from '../pages'
import { Img } from '../components'
import './about.scss'

export default class About extends Page {
  title = 'Lewis Nelson - About Lewis Nelson, Software Engineer'

  static routerProps () {
    return {
      exact: true,
      path: '/about'
    }
  }

  render () {
    return (
      <div id='about-page' className='page-container'>
        <h1 className='middle'>I am Lewis Nelson, a software engineer from Scotland</h1>
        <div className='profile-image'>
          <Img
            alt='Lewis Nelson profile picture'
            lowQualitySrc='/images/profile-thumbnail.jpg'
            src='/images/profile.jpg'
          />
        </div>
        <p>
          Welcome to my website, a portal to my programming projects and software social networks. I've been writing code since 2014 and have a passion for open source technologies. I'm currently working on the mobile pod at <a href='https://tech.holidayextras.com/' title='Holiday Extras' target='_blank'>Holiday Extras</a>, where I mainly work with Javascript, using <a href='https://facebook.github.io/react-native/' target='_blank' title='React Native'>React Native</a> and <a href='https://reactjs.org/' target='_blank' title='React'>React</a> sprinkled with a bit of <a href='https://redux.js.org/' target='_blank' title='Redux'>Redux</a> to build beautiful mobile apps and web apps for mobile.
        </p>

        <p>
          In my own time I enjoy tinkering with interesting tools and technologies. Check out my <Link to={getPath(Projects)}>projects</Link> to see what I've been up to. Most of my code is open sourced where I am able to do it.
        </p>
      </div>
    )
  }
}
