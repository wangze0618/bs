export const getItem = (name) => {
  let item = window.localStorage.getItem(name)
  try {
    return JSON.parse(item)
  } catch (error) {
    return item
  }
}
