import request from "@/utils/request"

// 特色手工
export const getDetailHandmadeList = (id) => {
  return request("/api/special/handmade-detail", "post", id)
}
export const getHandmadeList = () => {
  return request("/api/special/handmade", "get")
}
