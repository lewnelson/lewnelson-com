import { SMAAPass } from 'postprocessing'
import * as THREE from 'three'

export const IMAGE_URLS = {
  SMAASearch: SMAAPass.searchImageDataURL,
  SMAAArea: SMAAPass.areaImageDataURL,
  spaceSkyBox_nx: '/images/solar-system/skybox/nx.png',
  spaceSkyBox_ny: '/images/solar-system/skybox/ny.png',
  spaceSkyBox_nz: '/images/solar-system/skybox/nz.png',
  spaceSkyBox_px: '/images/solar-system/skybox/px.png',
  spaceSkyBox_py: '/images/solar-system/skybox/py.png',
  spaceSkyBox_pz: '/images/solar-system/skybox/pz.png',
  sun: '/images/solar-system/sun.jpg'
}

export const TARGET_FRAME_RATE = 60

export const SIZES = {
  sun: 30,
  mercury: 1,
  venus: 2,
  earth: 4,
  mars: 3,
  jupiter: 10,
  saturn: 9,
  uranus: 8,
  neptune: 7
}

export const DISTANCES = {
  mercury: 58,
  venus: 70,
  earth: 90,
  mars: 112,
  jupiter: 170,
  saturn: 210,
  uranus: 265,
  neptune: 290
}

export const YEARS = {
  sun: 0.07,
  mercury: 0.24,
  venus: 0.62,
  earth: 1,
  mars: 1.88,
  jupiter: 11.78,
  saturn: 30.14,
  uranus: 84.93,
  neptune: 164.93
}

export const YEAR = 60

export const SPHERE_SEGMENTS = 128

export const AXES = {
  x: new THREE.Vector3(1, 0, 0),
  y: new THREE.Vector3(0, 1, 0),
  z: new THREE.Vector3(0, 0, 1)
}

export const ORIGIN = new THREE.Vector3(0, 0, 0)
