import request from "@/utils/request"

export const getQa = () => {
  return request("/api/service/qa", "get")
}

export const getPlayGuide = () => {
  return request("/api/service/play-guide", "get")
}
export const postPlayGuideLike = (data) => {
  return request("/api/service/play-guide/like", "post", data)
}
