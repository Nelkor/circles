import { RADIUS, points } from '@/modules/circles'
import {
  canvas,
  clear,
  fillCircle,
  fillPattern,
  setSourceIn,
  setDestinationOut,
  setRect,
} from '@/modules/renderer/helper-canvas'
import { getRectOfCircles } from '@/modules/utils'
import { doubleHatchingImage, tripleHatchingImage } from '@/modules/images'

import { ctx } from './main-canvas'

const drawPetal = (topLeft: Point, p1: Point, p2: Point, p3: Point) => {
  clear()
  fillCircle(p1)
  setSourceIn()
  fillCircle(p2)
  setDestinationOut()
  fillCircle(p3)

  ctx.drawImage(canvas, topLeft.x, topLeft.y)
}

const drawRing = ({ x, y }: Point) => {
  ctx.beginPath()
  ctx.arc(x, y, RADIUS, 0, Math.PI * 2)
  ctx.stroke()
}

export const startDrawing = (): void => {
  const doubleHatching = ctx.createPattern(doubleHatchingImage, 'repeat')
  const tripleHatching = ctx.createPattern(tripleHatchingImage, 'repeat')

  if (!doubleHatching || !tripleHatching) {
    throw new Error('can not create canvas pattern')
  }

  const draw = () => {
    requestAnimationFrame(draw)

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    const { topLeft, width, height } = getRectOfCircles(points)

    setRect(topLeft, width, height)

    ///
    drawPetal(topLeft, points[0], points[1], points[2])
    drawPetal(topLeft, points[1], points[2], points[0])
    drawPetal(topLeft, points[2], points[0], points[1])

    ///
    ctx.save()

    ctx.globalCompositeOperation = 'source-in'
    ctx.fillStyle = doubleHatching

    ctx.fillRect(topLeft.x, topLeft.y, width, height)

    ctx.restore()

    ///
    clear()
    fillCircle(points[0])
    setSourceIn()
    fillCircle(points[1])
    fillCircle(points[2])
    fillPattern(tripleHatching)

    ctx.drawImage(canvas, topLeft.x, topLeft.y)

    ///
    ctx.strokeStyle = '#3E4242'
    ctx.lineWidth = 3

    points.forEach(drawRing)
  }

  requestAnimationFrame(draw)
}
