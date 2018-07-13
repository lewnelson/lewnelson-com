import React from 'react'
import Page from '../../containers/Page'
import PageLoader from '../../components/PageLoader'
import { Projects } from '../'
import { getPath } from '../../helpers/routing'
import { SourceCodeLink, BackTo } from '../../components'
import './rubixCube.scss'

export default class RubixCube extends Page {
  title = 'Lewis Nelson - WebGL rubix cube project'

  static routerProps () {
    return {
      exact: true,
      path: `${getPath(Projects)}/rubix-cube`
    }
  }

  constructor (props) {
    super(props)
    this.state = { loading: true, width: window.innerWidth, height: window.innerHeight }
  }

  async loadComponent () {
    const RubixCubeContainer = await import(/* webpackChunkName: "rubix-cube" */ '../../containers/rubixCube')
    this.RubixCubeContainer = RubixCubeContainer.default
    this.setState({ loading: false })
  }

  onResize = () => {
    if (!this._isMounted) return
    const { loading } = this.state
    if (!loading) {
      this.setState({ width: window.innerWidth, height: window.innerHeight })
    }
  }

  componentDidMount () {
    super.componentDidMount()
    this._isMounted = true
    this.loadComponent()
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount () {
    this._isMounted = false
    window.removeEventListener('resize', this.onResize)
  }

  setInitialCanvasDimensions () {
    this.setState({
      width: this.getCanvasWidth(),
      height: this.getCanvasHeight()
    })
  }

  componentDidUpdate (_, prevState) {
    if (prevState.loading !== this.state.loading) {
      this.setInitialCanvasDimensions()
    }
  }

  getCanvasWidth = () => {
    return this.glCanvasEl
      ? this.glCanvasEl.offsetWidth
      : this.state.width
  }

  getCanvasHeight = () => {
    return this.glCanvasEl
      ? this.glCanvasEl.offsetHeight
      : this.state.height
  }

  render () {
    const { RubixCubeContainer } = this
    const { loading } = this.state
    if (loading) return <PageLoader />
    return (
      <div id='rubix-cube-page' className='page-container'>
        <BackTo page={Projects} title='projects' />
        <div
          className='gl-canvas'
          ref={el => (this.glCanvasEl = el)}
        >
          <RubixCubeContainer canvasWidth={this.getCanvasWidth()} canvasHeight={this.getCanvasHeight()} />
        </div>
        <div className='description'>
          <p>
            A self-solving Rubix Cube rendered using WebGL with <a href='https://threejs.org/' target='_blank' title='three.js'>THREE.js</a>.
          </p>
          <SourceCodeLink
            link='https://github.com/lewnelson/lewnelson-com/blob/master/src/containers/rubixCube'
            title='rubix cube'
          />
        </div>
      </div>
    )
  }
}
