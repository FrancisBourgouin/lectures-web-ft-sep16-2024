export const calculateDistance3D = (pointA, pointB) => {
  const xDistance = Math.pow(pointA.x - pointB.x, 2)
  const yDistance = Math.pow(pointA.y - pointB.y, 2)
  const zDistance = Math.pow(pointA.z - pointB.z, 2)

  return Math.sqrt(xDistance + yDistance + zDistance)
}