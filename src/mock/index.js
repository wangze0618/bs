import Mock from "mockjs"
import { getInfo, getDetailInfo } from "./modules/hotel/index"
Mock.setup({
  timeout: "300-600",
})

// hotel模块--获取酒店列表数据
Mock.mock("/api/hotel", "get", getInfo)

// hotel模块--获取酒店列表数据
Mock.mock("/api/hotel/detail", "get", getDetailInfo)
