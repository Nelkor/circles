export const RADIUS = 200

export const points: Point[] = [
  { x: 300, y: 300 },
  { x: 500, y: 400 },
  { x: 450, y: 550 },
]

export const setCircleByIndex = (index: number, x: number, y: number): void => {
  points[index] = { x, y }
}
