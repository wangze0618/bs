import request from "@/utils/request"

export const getInfo = () => {
  return request("/api/hotel", "get")
}
export const getDetailInfo = (id) => {
  return request("/api/hotel/detail", "get")
}
