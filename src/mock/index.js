import Mock from "mockjs"
import { getInfo, getOtherHotel } from "./modules/hotel/index.js"
Mock.setup({
  timeout: "300-600",
})
// hotel模块--获取酒店列表数据
Mock.mock("/api/hotel", "get", getInfo)

// hotel模块--获取酒店列表数据
// 路径最前面不要加 / , 否则会报错
Mock.mock("api/hotel/other", "get", getOtherHotel)
