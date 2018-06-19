import Three from 'three'

const colors = {
  red: 0xff00000,
  blue: 0x00000ff,
  green: 0x000ff00,
  orange: 0xffa500,
  yellow: 0xffff00,
  white: 0xffffff
}

export function create (color, position) {
  const geometry = new Three.BoxGeometry(1, 1, 1)
  const material = new Three.MeshLambertMaterial({ color: colors[color] })
  const cube = new Three.Mesh(geometry, material)
  cube.position.set(...position)
  return cube
}
