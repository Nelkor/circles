type setCircle = (x: number, y: number) => void

export const RADIUS = 200

export const points: Point[] = [
  { x: 300, y: 300 },
  { x: 500, y: 400 },
  { x: 450, y: 550 },
]

export const setFirstCircle: setCircle = (x, y) => {
  points[0] = { x, y }
}

export const setSecondCircle: setCircle = (x, y) => {
  points[1] = { x, y }
}

export const setThirdCircle: setCircle = (x, y) => {
  points[2] = { x, y }
}
