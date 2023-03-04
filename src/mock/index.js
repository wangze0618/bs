import Mock from "mockjs"
import { getInfo, getOtherHotel } from "./modules/hotel/index.js"
import { getQa } from "./modules/qa/index.js"
import { getPlayGuide, postPlayGuideLike } from "./modules/play-guide/index"
import { getFood, getDetailFood } from "./modules/specail/food/index.js"
import { getCarouselList } from "./modules/home/index.js"
import {
  getDetailHandmadeList,
  getHandmadeList,
} from "./modules/specail/handmade/index.js"
Mock.setup({
  timeout: "300-800",
})

// home模块--获取轮播图数据
Mock.mock("/api/home/carousel", "get", getCarouselList)

// special模块--获取美食列表
Mock.mock("/api/specail/food", "get", getFood)

// play-guide游玩攻略模块
Mock.mock(/\/api\/specail\/food\/food-detail/, "post", (options) => {
  return getDetailFood(options)
})

// hotel模块--获取酒店列表数据
Mock.mock("/api/hotel", "get", getInfo)

// hotel模块--获取酒店列表数据
// 路径最前面不要加 / , 否则会报错
Mock.mock("api/hotel/other", "get", getOtherHotel)

// 问答qa模块
Mock.mock("/api/service/qa", "get", getQa)

// play-guide游玩攻略模块
Mock.mock("/api/service/play-guide", "get", getPlayGuide)

// play-guide游玩攻略模块
Mock.mock(/\/api\/service\/play-guide\/like/, "post", (options) => {
  return postPlayGuideLike(options)
})

Mock.mock(/\/api\/special\/handmade-detail/, "post", (options) => {
  return getDetailHandmadeList(options)
})
Mock.mock(/\/api\/special\/handmade/, "get", getHandmadeList)
