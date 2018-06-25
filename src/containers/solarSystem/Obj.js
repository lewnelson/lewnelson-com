export default class Obj {
  setup () {}

  update () {}

  render () {}

  rotateAboutPoint (obj, point, axis, theta) {
    obj.position.sub(point)
    obj.position.applyAxisAngle(axis, theta)
    obj.position.add(point)
    obj.rotateOnAxis(axis, theta)
  }

  getScaledSize (size) {
    if (!this.stage) throw new Error(`Cannot call "getScaledSize" before stage is ready`)
    return size
  }
}
