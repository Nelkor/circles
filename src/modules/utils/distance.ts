const { sqrt, pow } = Math

export const getDistance = (p1: Point, p2: Point): number => {
  const dx = p2.x - p1.x
  const dy = p2.y - p1.y

  return sqrt(pow(dx, 2) + pow(dy, 2))
}
