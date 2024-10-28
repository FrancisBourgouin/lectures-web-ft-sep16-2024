export const checkIfWellWatered = (wateringInterval, lastWatered) => {
  const lastWateredDate = new Date(lastWatered)
  const todayDate = new Date()

  const diffInSeconds = (todayDate.getTime() - lastWateredDate.getTime()) / 1000
  const diffInDays = diffInSeconds / 86400

  return wateringInterval > diffInDays
}