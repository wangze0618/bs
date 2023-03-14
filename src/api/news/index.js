import request from "@/utils/request"

export const getNews1 = () => {
  return request("/api/news1", "get")
}
export const getNews2 = () => {
  return request("/api/news2", "get")
}
export const getNews3 = () => {
  return request("/api/news3", "get")
}
export const getNews4 = () => {
  return request("/api/news4", "get")
}
export const getNews5 = () => {
  return request("/api/news5", "get")
}
