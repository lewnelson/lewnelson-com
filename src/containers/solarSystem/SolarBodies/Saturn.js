import * as THREE from 'three'
import Obj from '../Obj'
import { AXES, ORIGIN, SIZES, DISTANCES, YEARS, SPHERE_SEGMENTS } from '../constants'
import { getOrbitalRotation } from '../helper'

export default class Sun extends Obj {
  setup () {
    this.geometry = new THREE.SphereGeometry(this.getScaledSize(SIZES.saturn), SPHERE_SEGMENTS, SPHERE_SEGMENTS)
    this.material = new THREE.MeshLambertMaterial({ color: 0xd1b15c })
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.mesh.position.set(0, 0, this.getScaledSize(DISTANCES.saturn))
    this.scene.add(this.mesh)
    this.mesh.receiveShadow = true
    this.mesh.castShadow = true
  }

  update (deltaTime) {
    this.mesh.rotateY(0.02)
    this.rotateAboutPoint(this.mesh, ORIGIN, AXES.y, getOrbitalRotation(YEARS.saturn, deltaTime))
  }
}
