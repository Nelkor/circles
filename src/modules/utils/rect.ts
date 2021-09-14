import { RADIUS } from '@/modules/circles'

interface Rect {
  topLeft: Point
  width: number
  height: number
}

export const getRectOfCircles = (centers: Point[]): Rect => {
  let left = centers[0].x
  let right = left
  let top = centers[0].y
  let bottom = top

  centers.forEach(({ x, y }) => {
    if (x < left) {
      left = x
    }

    if (x > right) {
      right = x
    }

    if (y < top) {
      top = y
    }

    if (y > bottom) {
      bottom = y
    }
  })

  const x = left - RADIUS
  const y = top - RADIUS

  return {
    topLeft: { x, y },
    width: right - x + RADIUS,
    height: bottom - y + RADIUS,
  }
}
