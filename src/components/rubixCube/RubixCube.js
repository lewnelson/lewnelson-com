import React, { Component } from 'react'
import * as THREE from 'three'
import { RenderPass, EffectComposer, SMAAPass } from 'postprocessing'

const frameRate = 60
const timeout = 1000 / frameRate

const xAxis = new THREE.Vector3(1, 0, 0)
const yAxis = new THREE.Vector3(0, 1, 0)
const zAxis = new THREE.Vector3(0, 0, 1)
const normalizedAxes = { x: xAxis, y: yAxis, z: zAxis }

const defaultColor = new THREE.MeshPhongMaterial({ color: 0x000000 })
const availableColors = {
  r: [ 255, 0, 0 ],
  b: [ 0, 0, 255 ],
  g: [ 0, 255, 0 ],
  o: [ 255, 165, 0 ],
  y: [ 255, 255, 0 ],
  w: [255, 255, 255]
}

const textureDimension = 64
const threshold = Math.ceil(textureDimension * 0.06)
Object.keys(availableColors).forEach(key => {
  const val = availableColors[key]
  let pixelData = []
  for (let y = 0; y < textureDimension; ++y) {
    for (let x = 0; x < textureDimension; ++x) {
      if (x < threshold || x > textureDimension - threshold || y < threshold || y > textureDimension - threshold) {
        pixelData.push(0, 0, 0)
      } else {
        pixelData.push(...val)
      }
    }
  }

  const dataTexture = new THREE.DataTexture(
    Uint8Array.from(pixelData),
    textureDimension,
    textureDimension,
    THREE.RGBFormat
  )
  dataTexture.needsUpdate = true

  const dataMaterial = new THREE.MeshPhongMaterial({
    map: dataTexture
  })

  dataMaterial.needsUpdate = true
  availableColors[key] = dataMaterial
})

// 0 - right
// 1 - left
// 2 - top
// 3 - bottom
// 4 - front
// 5 - back

const colorsMap = {
  '000': [ null, 'w', null, 'o', null, 'b' ],
  '001': [ null, 'w', null, 'o', null, null ],
  '002': [ null, 'w', null, 'o', 'g', null ],
  '010': [ null, 'w', null, null, null, 'b' ],
  '011': [ null, 'w', null, null, null, null ],
  '012': [ null, 'w', null, null, 'g', null ],
  '020': [ null, 'w', 'r', null, null, 'b' ],
  '021': [ null, 'w', 'r', null, null, null ],
  '022': [ null, 'w', 'r', null, 'g', null ],
  '100': [ null, null, null, 'o', null, 'b' ],
  '101': [ null, null, null, 'o', null, null ],
  '102': [ null, null, null, 'o', 'g', null ],
  '110': [ null, null, null, null, null, 'b' ],
  '111': [ null, null, null, null, null, null ],
  '112': [ null, null, null, null, 'g', null ],
  '120': [ null, null, 'r', null, null, 'b' ],
  '121': [ null, null, 'r', null, null, null ],
  '122': [ null, null, 'r', null, 'g', null ],
  '200': [ 'y', null, null, 'o', null, 'b' ],
  '201': [ 'y', null, null, 'o', null, null ],
  '202': [ 'y', null, null, 'o', 'g', null ],
  '210': [ 'y', null, null, null, null, 'b' ],
  '211': [ 'y', null, null, null, null, null ],
  '212': [ 'y', null, null, null, 'g', null ],
  '220': [ 'y', null, 'r', null, null, 'b' ],
  '221': [ 'y', null, 'r', null, null, null ],
  '222': [ 'y', null, 'r', null, 'g', null ]
}

export default class RubixCube extends Component {
  componentDidMount () {
    this._isMounted = true
    this.setup()
  }

  componentWillUmount () {
    this._isMounted = false
  }

  rotateCube () {
    this.group.rotation.z += Math.PI / 120
    this.group.rotation.x += Math.PI / 120
  }

  getBlocksToRotate (axis, column) {
    let blocksToRotate = []
    this.blocks.forEach((rows, zIndex) => {
      rows.forEach((row, yIndex) => {
        row.forEach((block, xIndex) => {
          if ((axis === 'y' && yIndex === column) || (axis === 'x' && column === xIndex)) {
            blocksToRotate.push(this.blocks[zIndex][yIndex][xIndex])
          }
        })
      })
    })

    return blocksToRotate
  }

  recolorBlock (block) {
    let order = [ 0, 1, 2, 3, 4, 5 ]
    if (block.rotation.x > 0) {
      order = [ 0, 1, 5, 4, 2, 3 ]
    } else if (block.rotation.x < 0) {
      order = [ 0, 1, 4, 5, 3, 2 ]
    } else if (block.rotation.y > 0) {
      order = [ 4, 5, 2, 3, 1, 0 ]
    } else if (block.rotation.y < 0) {
      order = [ 5, 4, 2, 3, 0, 1 ]
    }

    const materials = block.material.slice()
    block.material = order.map(index => materials[index])
  }

  resetBlocks () {
    const newBlocksSetup = new Array(3).fill(null).map(() => {
      return new Array(3).fill(null).map(() => {
        return new Array(3).fill(null)
      })
    })

    this.blocks.forEach((rows, zIndex) => {
      rows.forEach((row, yIndex) => {
        row.forEach((block, xIndex) => {
          block.position.round()
          this.recolorBlock(block)
          block.rotation.set(0, 0, 0)
          newBlocksSetup[block.position.z + 1][block.position.y + 1][block.position.x + 1] = block
        })
      })
    })

    this.blocks = newBlocksSetup
  }

  getRandomSectionToRotate () {
    return {
      axis: ['x', 'y'][Math.round(Math.random())],
      column: Math.round(Math.random() * 2),
      direction: [1, -1][Math.round(Math.random())]
    }
  }

  getReversedRotation (rotation) {
    return {
      axis: rotation.axis,
      column: rotation.column,
      direction: rotation.direction * -1
    }
  }

  getNextSectionToRotate () {
    let sectionRotation
    if (this.isSolving) {
      sectionRotation = this.getReversedRotation(this.rotationsTracker.pop())
    } else {
      sectionRotation = this.getRandomSectionToRotate()
    }

    sectionRotation.start = this.frame
    sectionRotation.currentAngle = 0
    return sectionRotation
  }

  trackRotation (sectionRotation) {
    if (!this.isSolving) {
      this.rotationsTracker.push({
        axis: sectionRotation.axis,
        column: sectionRotation.column,
        direction: sectionRotation.direction
      })
    }
  }

  chooseSectionToRotate () {
    if (this.rotationsTracker.length > 30) this.isSolving = true
    if (this.isSolving === true && this.rotationsTracker.length === 0) this.isSolving = false
    this.sectionRotation = this.getNextSectionToRotate()
    this.trackRotation(this.sectionRotation)
    this.rotations++
    this.sectionRotation.blocksToRotate = this.getBlocksToRotate(
      this.sectionRotation.axis,
      this.sectionRotation.column
    )
  }

  snapToNearestRightAngle (block, axis) {
    const currentAngle = THREE.Math.radToDeg(block.rotation[axis])
    const rotations = Math.round(currentAngle / 90)
    return rotations >= 4
      ? (block.rotation[axis] - THREE.Math.degToRad((rotations - 4) * 90)) * -1
      : THREE.Math.degToRad(rotations * 90) - block.rotation[axis]
  }

  // obj - your object (THREE.Object3D or derived)
  // point - the point of rotation (THREE.Vector3)
  // axis - the axis of rotation (normalized THREE.Vector3)
  // theta - radian value of rotation
  rotateAboutPoint (obj, point, axis, theta) {
    obj.position.sub(point) // remove the offset
    obj.position.applyAxisAngle(axis, theta) // rotate the POSITION
    obj.position.add(point) // re-add the offset
    obj.rotateOnAxis(axis, theta) // rotate the OBJECT
  }

  rotateSection () {
    if (!this.sectionRotation) this.chooseSectionToRotate()
    const blocks = this.sectionRotation.blocksToRotate
    const rotation = THREE.Math.degToRad(8)
    const rightAngle = THREE.Math.degToRad(90)
    let done = false
    if (this.sectionRotation.currentAngle + rotation >= rightAngle) {
      done = true
    }

    const middle = Math.floor(blocks.length / 2)
    const rotationPoint = blocks[middle].position
    blocks.forEach((block, index) => {
      let theta
      if (done) {
        theta = this.snapToNearestRightAngle(block, this.sectionRotation.axis)
      } else {
        theta = rotation
      }

      theta = theta * this.sectionRotation.direction
      if (index === middle) {
        block.rotation[this.sectionRotation.axis] += theta
      } else {
        this.rotateAboutPoint(
          block,
          rotationPoint,
          normalizedAxes[this.sectionRotation.axis],
          theta
        )
      }
    })

    this.sectionRotation.currentAngle += rotation
    if (done) {
      this.resetBlocks()
      this.sectionRotation = null
    }
  }

  animate = () => {
    if (!this._isMounted) return
    const now = Date.now()
    setTimeout(() => {
      requestAnimationFrame(this.animate)
    }, timeout)
    // Animations
    this.rotateCube()
    this.rotateSection()
    this.composer.render(this.clock.getDelta())
    this.deltaTime = now - this.frameRenderTime
    this.frameRenderTime = now
    this.frame++
  }

  setupSpotLight (x, y, z) {
    const light = new THREE.DirectionalLight(0xffffff, 0.9)
    light.position.set(-3, 7, 3)
    light.castShadow = true
    this.scene.add(light)
  }

  setupAmbientLighting () {
    const light = new THREE.AmbientLight(0x404040)
    this.scene.add(light)
  }

  setupLighting () {
    this.setupAmbientLighting()
    this.setupSpotLight()
  }

  createBlocks () {
    this.blocks = new Array(3).fill(null).map((_, zIndex) => {
      return new Array(3).fill(null).map((_, yIndex) => {
        return new Array(3).fill(null).map((_, xIndex) => {
          const position = [ xIndex, yIndex, zIndex ]
          const block = this.createBlock(position, position.map(n => n - 1))
          block.castShadow = true
          this.group.add(block)
          return block
        })
      })
    })
  }

  createBlock (position, normalizedPosition) {
    const colors = colorsMap[position.join('')].map(c => availableColors[c] || defaultColor)
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const cube = new THREE.Mesh(geometry, colors)
    cube.scale.set(1, 1, 1)
    cube.position.set(...normalizedPosition)
    return cube
  }

  createFloor () {
    const geometry = new THREE.PlaneGeometry(50, 50)
    const material = new THREE.MeshPhongMaterial({color: 0xffffff, side: THREE.DoubleSide})
    this.floor = new THREE.Mesh(geometry, material)
    this.floor.receiveShadow = true
    this.scene.add(this.floor)
    this.floor.translateY(-4)
    this.floor.rotateX(THREE.Math.degToRad(90))
  }

  async loadImage (url) {
    return new Promise((resolve) => {
      const image = new window.Image()
      image.onload = () => resolve(image)
      image.src = url
    })
  }

  async setupSMAAPass () {
    let [ areaImage, searchImage ] = await Promise.all([
      this.loadImage(SMAAPass.searchImageDataURL),
      this.loadImage(SMAAPass.areaImageDataURL)
    ])

    this.smaaPass = new SMAAPass(areaImage, searchImage)
    this.smaaPass.renderToScreen = true
    this.smaaPass.enabled = true
    this.composer.addPass(this.smaaPass)
  }

  setupRenderPass () {
    this.renderPass = new RenderPass(this.scene, this.camera)
    this.renderPass.renderToScreen = false
    this.composer.addPass(this.renderPass)
  }

  async setupPostProcessing () {
    this.setupRenderPass()
    await this.setupSMAAPass()
  }

  async setup () {
    this.cycle = 0
    this.frame = 0
    this.rotations = 0
    this.clock = new THREE.Clock()

    this.rotationsTracker = []

    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000)

    this.renderer = new THREE.WebGLRenderer({ canvas: this.ref, antialias: true })
    this.renderer.setClearColor(0xffffff)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.shadowMap.enabled = true

    this.group = new THREE.Group()
    this.group.scale.set(1, 1, 1)

    this.createFloor()
    this.createBlocks()
    this.setupLighting()

    this.group.position.set(0, 0, 0)
    this.scene.add(this.group)

    this.camera.position.set(-15, 12, 15)
    this.camera.lookAt(new THREE.Vector3(0, 0, 0))

    this.composer = new EffectComposer(this.renderer)
    await this.setupPostProcessing()

    this.animate()
    console.log(this)
  }

  render () {
    return (
      <canvas ref={el => (this.ref = el)} />
    )
  }
}
