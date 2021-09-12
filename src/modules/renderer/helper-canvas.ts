import { RADIUS } from '@/modules/circles'
// import { redHatchingImage } from '@/modules/images'

export const canvas = document.createElement('canvas')

const ctx = canvas.getContext('2d')

if (!ctx) {
  throw new Error('can not get 2d context')
}

let tl: Point = { x: 0, y: 0 }

export const setRect = (
  topLeft: Point,
  width: number,
  height: number
): void => {
  tl = topLeft

  canvas.width = width
  canvas.height = height
}

export const clear = (): void => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = 'black'
  ctx.globalCompositeOperation = 'source-over'
}

export const fillCircle = ({ x, y }: Point): void => {
  ctx.beginPath()
  ctx.arc(x - tl.x, y - tl.y, RADIUS, 0, Math.PI * 2)
  ctx.fill()
}

export const fillPattern = (pattern: CanvasPattern): void => {
  ctx.fillStyle = pattern

  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

export const setSourceIn = (): void => {
  ctx.globalCompositeOperation = 'source-in'
}

export const setDestinationOut = (): void => {
  ctx.globalCompositeOperation = 'destination-out'
}
