import Obj from './Obj'
import { getOrbitalRotation } from './helper'
import { ORIGIN, AXES } from './constants'

export default class Camera extends Obj {
  update (deltaTime) {
    const theta = getOrbitalRotation(2.8, deltaTime)
    this.rotateAboutPoint(this.camera, ORIGIN, AXES.y, theta)
    this.camera.lookAt(ORIGIN)
  }
}
