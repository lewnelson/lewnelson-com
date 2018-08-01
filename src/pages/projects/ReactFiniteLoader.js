import React from 'react'
import Page from '../../containers/Page'
import PageLoader from '../../components/PageLoader'
import { Projects } from '../'
import { getPath } from '../../helpers/routing'
import { SourceCodeLink, BackTo } from '../../components'
import './reactFiniteLoader.scss'

export default class ReactFiniteLoader extends Page {
  title = 'Lewis Nelson - React finite loader project'

  static routerProps () {
    return {
      exact: true,
      path: `${getPath(Projects)}/react-finite-loader`
    }
  }

  constructor (props) {
    super(props)
    this.state = { loading: true }
  }

  async loadComponent () {
    const ReactFiniteLoaderContainer = await import(/* webpackChunkName: "react-finite-loader" */ '../../containers/reactFiniteLoader')
    this.ReactFiniteLoaderContainer = ReactFiniteLoaderContainer.default
    this.setState({ loading: false })
  }

  componentDidMount () {
    this.loadComponent()
  }

  render () {
    const { ReactFiniteLoaderContainer } = this
    const { loading } = this.state
    if (loading) return <PageLoader />
    return (
      <div id='react-finite-loader-page' className='page-container'>
        <BackTo page={Projects} title='projects' />
        <div className='demo'>
          <ReactFiniteLoaderContainer />
        </div>
      </div>
    )
  }
}
