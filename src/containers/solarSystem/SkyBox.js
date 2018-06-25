import Obj from './Obj'
import * as THREE from 'three'

export default class SkyBox extends Obj {
  setup () {
    const assetPrefix = 'spaceSkyBox_'
    this.materials = [
      'px',
      'nx',
      'py',
      'ny',
      'pz',
      'nz'
    ].map(i => {
      const texture = new THREE.Texture()
      texture.image = this.assetsManager.getAsset(`${assetPrefix}${i}`)
      texture.needsUpdate = true

      const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide })
      material.needsUpdate = true
      return material
    })

    this.geometry = new THREE.BoxGeometry(10000, 10000, 10000)
    this.mesh = new THREE.Mesh(this.geometry, this.materials)
    this.scene.add(this.mesh)
  }
}
