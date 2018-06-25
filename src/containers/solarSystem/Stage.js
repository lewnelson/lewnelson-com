import * as THREE from 'three'
import { RenderPass, EffectComposer, SMAAPass } from 'postprocessing'
import { TARGET_FRAME_RATE } from './constants'

export default class Stage {
  constructor ({ canvas, width, height, assetsManager }) {
    this.canvas = canvas
    this.width = width
    this.height = height
    this.assetsManager = assetsManager
    this.objects = {}
  }

  setupSMAAPass () {
    const areaImage = this.assetsManager.getAsset('SMAAArea')
    const searchImage = this.assetsManager.getAsset('SMAASearch')
    this.smaaPass = new SMAAPass(areaImage, searchImage)
    this.smaaPass.renderToScreen = true
    this.smaaPass.enabled = true
    this.composer.addPass(this.smaaPass)
  }

  setupRenderPass () {
    this.renderPass = new RenderPass(this.scene, this.camera)
    this.renderPass.renderToScreen = true
    this.composer.addPass(this.renderPass)
  }

  setupPostProcessing () {
    this.setupRenderPass()
    // this.setupSMAAPass()
  }

  setupScene () {
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 150000)

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true })
    this.renderer.setClearColor(0x000000)
    this.renderer.setSize(this.width, this.height)
    this.renderer.shadowMap.enabled = true

    this.camera.position.set(0, 0, 400)
    this.camera.lookAt(new THREE.Vector3(0, 0, 0))

    this.composer = new EffectComposer(this.renderer)
    this.setupPostProcessing()
  }

  registerObject (id, obj) {
    obj.stage = this
    obj.scene = this.scene
    obj.camera = this.camera
    obj.assetsManager = this.assetsManager
    this.objects[id] = obj
    obj.setup()
  }

  destroyObject (id) {
    if (!this.objects[id]) throw new Error(`Object with ${id} does not exist and cannot be destroyed`)
    const threeObj = this.objects[id].threeObj
    threeObj.parent.remove(threeObj)
    delete this.objects[id]
  }

  setupState () {
    this.clock = new THREE.Clock()
    this.delta = 0
  }

  setup () {
    this.setupState()
    this.setupScene()
  }

  destroy () {
    this.destroyed = true
  }

  update = () => {
    if (this.destroyed) return
    setTimeout(() => {
      this.delta = this.clock.getDelta()
      requestAnimationFrame(this.update)
    }, 1000 / TARGET_FRAME_RATE)
    Object.values(this.objects).forEach(obj => obj.update(this.delta))
    this.composer.render(this.clock.getDelta())
  }

  render = () => {
    if (this.destroyed) return
    setTimeout(() => {
      requestAnimationFrame(this.update)
    }, 1000 / this.targetFrameRate)
    Object.values(this.objects).forEach(obj => obj.render())
    this.composer.render(this.clock.getDelta())
  }
}
