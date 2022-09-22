export const getLocation = async () => {
  let local = []
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((eva) => {
      local = [
        eva.coords.longitude.toFixed(6) - 0,
        eva.coords.latitude.toFixed(6) - 0,
      ]
      resolve(local)
    })
  })
}
