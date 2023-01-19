import request from "@/utils/request"

export const getFoodList = () => {
  return request("/api/specail/food", "get")
}

export const getFoodDetail = (id) => {
  return request("/api/specail/food/food-detail", "post", id)
}
