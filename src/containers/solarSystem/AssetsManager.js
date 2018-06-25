import { IMAGE_URLS } from './constants'

export default class AssetsManager {
  constructor () {
    this.assets = {}
  }

  async loadImage (url) {
    return new Promise((resolve) => {
      const image = new window.Image()
      image.onload = () => resolve(image)
      image.src = url
    })
  }

  async loadImages () {
    const imagePromises = Object.values(IMAGE_URLS).map(url => this.loadImage(url))
    const images = await Promise.all(imagePromises)
    const names = Object.keys(IMAGE_URLS)
    images.forEach((image, index) => {
      this.assets[names[index]] = image
    })
  }

  getAsset (name) {
    if (!this.assets[name]) throw new Error(`Asset "${name}" does not exist`)
    return this.assets[name]
  }
}
