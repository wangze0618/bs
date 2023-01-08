import request from "@/utils/request"

export const getQa = () => {
  return request("/api/service/qa", "get")
}
