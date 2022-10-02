import request from "@/utils/request"

// 请求文章
export const getArticles = () => {
  return request("/api/article", "get")
}
