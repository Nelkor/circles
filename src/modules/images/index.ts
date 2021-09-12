import doubleHatching from './double-hatching.svg'
import tripleHatching from './triple-hatching.svg'

export const doubleHatchingImage = new Image()

export const tripleHatchingImage = new Image()

const loadImage = (image: HTMLImageElement, src: string): Promise<void> =>
  new Promise(resolve => {
    image.onload = () => resolve()

    image.src = src
  })

export const loadImages = (): Promise<void[]> =>
  Promise.all([
    loadImage(doubleHatchingImage, doubleHatching),
    loadImage(tripleHatchingImage, tripleHatching),
  ])
