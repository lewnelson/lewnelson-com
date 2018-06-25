import React, { Component } from 'react'
import AssetsManager from './AssetsManager'
import Stage from './Stage'
import SkyBox from './SkyBox'
import Camera from './Camera'
import {
  Earth,
  Jupiter,
  Mars,
  Mercury,
  Neptune,
  Saturn,
  Sun,
  Uranus,
  Venus
} from './SolarBodies'

export default class RubixCube extends Component {
  componentDidMount () {
    this.setupAndRender()
  }

  componentWillUmount () {
    this.stage && this.stage.destroy()
  }

  registerObjects () {
    this.stage.registerObject('Camera', new Camera())
    this.stage.registerObject('SkyBox', new SkyBox())
    this.stage.registerObject('Sun', new Sun())
    this.stage.registerObject('Mercury', new Mercury())
    this.stage.registerObject('Venus', new Venus())
    this.stage.registerObject('Earth', new Earth())
    this.stage.registerObject('Mars', new Mars())
    this.stage.registerObject('Jupiter', new Jupiter())
    this.stage.registerObject('Saturn', new Saturn())
    this.stage.registerObject('Uranus', new Uranus())
    this.stage.registerObject('Neptune', new Neptune())
  }

  async setupAndRender () {
    this.assetsManager = new AssetsManager()
    await this.assetsManager.loadImages()
    this.stage = new Stage({
      canvas: this.ref,
      width: window.innerWidth,
      height: window.innerHeight,
      assetsManager: this.assetsManager
    })

    this.stage.setup()
    this.registerObjects()
    this.stage.render()
  }

  render () {
    return (
      <div>
        <canvas ref={el => (this.ref = el)} />
      </div>
    )
  }
}
