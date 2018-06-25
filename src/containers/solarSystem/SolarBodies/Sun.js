import * as THREE from 'three'
import Obj from '../Obj'
import { getOrbitalRotation } from '../helper'
import { SIZES, YEARS, ORIGIN, AXES, SPHERE_SEGMENTS } from '../constants'

export default class Sun extends Obj {
  setup () {
    const texture = new THREE.Texture()
    texture.image = this.assetsManager.getAsset('sun')
    texture.needsUpdate = true

    this.material = new THREE.MeshBasicMaterial({ map: texture })
    this.material.needsUpdate = true

    this.geometry = new THREE.SphereGeometry(this.getScaledSize(SIZES.sun), SPHERE_SEGMENTS, SPHERE_SEGMENTS)
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.scene.add(this.mesh)

    const light = new THREE.PointLight(0xffffff, 1, 1000)
    light.position.set(0, 0, 0)
    light.castShadow = true
    this.scene.add(light)
  }

  update (deltaTime) {
    this.rotateAboutPoint(this.mesh, ORIGIN, AXES.y, getOrbitalRotation(YEARS.sun, deltaTime))
  }
}
