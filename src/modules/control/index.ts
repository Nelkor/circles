import { setCircleByIndex, points, RADIUS } from '@/modules/circles'
import { getDistance } from '@/modules/utils'

const state: {
  circleIndex: null | number
  circleOrigin: Point
  cursorOrigin: Point
} = {
  circleIndex: null,
  circleOrigin: { x: 0, y: 0 },
  cursorOrigin: { x: 0, y: 0 },
}

const onDown = ({ offsetX: x, offsetY: y }: MouseEvent) => {
  const point: Point = { x, y }

  const { distance, index } = points.reduce(
    (acc, cur, index) => {
      const distance = getDistance(point, cur)

      if (distance < acc.distance) {
        acc.distance = distance
        acc.index = index
      }

      return acc
    },
    { index: 0, distance: Infinity }
  )

  if (distance > RADIUS) {
    return
  }

  state.circleIndex = index
  state.circleOrigin = points[index]
  state.cursorOrigin = { x, y }
}

const onMove = ({ offsetX: x, offsetY: y }: MouseEvent) => {
  if (state.circleIndex === null) {
    return
  }

  setCircleByIndex(
    state.circleIndex,
    state.circleOrigin.x + x - state.cursorOrigin.x,
    state.circleOrigin.y + y - state.cursorOrigin.y
  )
}

const onUp = () => {
  state.circleIndex = null
}

export const startListening = (): void => {
  addEventListener('mousedown', onDown)
  addEventListener('mousemove', onMove)
  addEventListener('mouseup', onUp)
}
