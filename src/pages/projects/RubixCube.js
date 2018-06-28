import React, { Component } from 'react'
import PageLoader from '../../components/PageLoader'
import { Projects } from '../'
import { getPath } from '../../helpers/routing'
import './rubixCube.scss'

export default class RubixCube extends Component {
  static routerProps () {
    return {
      exact: true,
      path: `${getPath(Projects)}/rubix-cube`
    }
  }

  constructor (props) {
    super(props)
    this.state = { loading: true }
  }

  async loadComponent () {
    const RubixCubeContainer = await import(/* webpackChunkName: "rubix-cube" */ '../../containers/rubixCube')
    this.RubixCubeContainer = RubixCubeContainer.default
    this.setState({ loading: false })
  }

  componentDidMount () {
    this._isMounted = true
    this.loadComponent()
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  render () {
    const { RubixCubeContainer } = this
    const { loading } = this.state
    if (loading) return <PageLoader />
    return (
      <div id='rubix-cube-page'>
        <RubixCubeContainer />
      </div>
    )
  }
}
