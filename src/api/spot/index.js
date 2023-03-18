import request from "@/utils/request"

export const getSpotInfo = (name) => {
  return request("/api/spot/detail", "post", name)
}
