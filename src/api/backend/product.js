import request from "@/utils/request"

// 请求文章
export const getProduct = () => {
  return request("/api/product", "get")
}
// 请求文章
export const getProductById = (id) => {
  return request(`/api/product/${id}`, "get")
}
