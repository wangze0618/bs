import request from "@/utils/request"

export const getInfo = () => {
  return request("/api/hotel", "get")
}

export const getOtherHotel = () => {
  return request("api/hotel/other", "get")
}
