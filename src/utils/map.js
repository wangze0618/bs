import { useGeolocation } from "@vueuse/core"
export default () => {
  return new Promise((resolve, reject) => {
    const { coords, locatedAt, error } = useGeolocation()
    if (coords) {
      return resolve(coords)
    }
    if (error) {
      return reject(error)
    }
  })
}
