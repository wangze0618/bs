import request from "@/utils/request"

export const getCarouselListData = () => {
  return request("/api/home/carousel", "get")
}
