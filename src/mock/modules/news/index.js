import Mock from "mockjs"
const randomNum = () => {
  return (Math.random() * 10000 + 20000).toFixed(0)
}
let list1 = [
  {
    id: 0,
    title: "尧坝镇人民政府关于春节期间临时停车的通告",
    date: "2023-01-12",
    url: "https://mp.weixin.qq.com/s/orIkI7flFwIq8S2GbOzdSg",
  },
  {
    id: 1,
    title: "招聘|尧坝古镇景区招聘公告",
    date: "2022-12-21",
    url: "https://mp.weixin.qq.com/s/zCmKCj1j9cWwlz51OTVO5w",
  },
  {
    id: 2,
    title: "六问六答！权威解读四川这项加强政务新媒体管理的通知",
    date: "2023-01-11",
    url: "https://mp.weixin.qq.com/s/RA5XIbo1X1TRZEU3XXMeyw",
  },
  {
    id: 3,
    title: "检出混管阳性的楼栋怎么办、出现哪些症状后需要到医院就诊...",
    date: "2022-12-09",
    url: "https://mp.weixin.qq.com/s/B7aRW-FLGyrvDET0IIgH-Q",
  },
  {
    id: 4,
    title: "热血军营等你加入！2023年征兵号角已吹响，快来报名！",
    date: "2023-01-03",
    url: "https://mp.weixin.qq.com/s/Z608y8HJa49y5q-TW-rFzQ",
  },
  {
    id: 5,
    title: "关注|春有约，花不误，尧坝古镇邀您踏上春日赏花之旅",
    date: "2023-03-10",
    url: "https://mp.weixin.qq.com/s/nEg8-bQvkyQbnlB3srmykA",
  },
  {
    id: 6,
    title: "食在尧坝国庆假期一到，尧坝这座隐藏的美食之城就藏不住了!",
    date: "2021-09-30",
    url: "https://mp.weixin.qq.com/s/sqkghoqli0I2Ho6RZAcnYw",
  },
]
let list2 = [
  {
    id: 0,
    title: "尧坝镇人民政府关于春节期间临时停车的通告",
    date: "2023-01-12",
    url: "https://mp.weixin.qq.com/s/orIkI7flFwIq8S2GbOzdSg",
  },
  {
    id: 1,
    title: "招聘|尧坝古镇景区招聘公告",
    date: "2022-12-21",
    url: "https://mp.weixin.qq.com/s/zCmKCj1j9cWwlz51OTVO5w",
  },
  {
    id: 2,
    title: "六问六答！权威解读四川这项加强政务新媒体管理的通知",
    date: "2023-01-11",
    url: "https://mp.weixin.qq.com/s/RA5XIbo1X1TRZEU3XXMeyw",
  },
  {
    id: 3,
    title: "检出混管阳性的楼栋怎么办、出现哪些症状后需要到医院就诊...",
    date: "2022-12-09",
    url: "https://mp.weixin.qq.com/s/B7aRW-FLGyrvDET0IIgH-Q",
  },
  {
    id: 4,
    title: "热血军营等你加入！2023年征兵号角已吹响，快来报名！",
    date: "2023-01-03",
    url: "https://mp.weixin.qq.com/s/Z608y8HJa49y5q-TW-rFzQ",
  },
  {
    id: 5,
    title: "关注|春有约，花不误，尧坝古镇邀您踏上春日赏花之旅",
    date: "2023-03-10",
    url: "https://mp.weixin.qq.com/s/nEg8-bQvkyQbnlB3srmykA",
  },
  {
    id: 6,
    title: "食在尧坝国庆假期一到，尧坝这座隐藏的美食之城就藏不住了!",
    date: "2021-09-30",
    url: "https://mp.weixin.qq.com/s/sqkghoqli0I2Ho6RZAcnYw",
  },
]
let list3 = [
  {
    id: 0,
    title: "尧坝镇人民政府关于春节期间临时停车的通告",
    date: "2023-01-12",
    url: "https://mp.weixin.qq.com/s/orIkI7flFwIq8S2GbOzdSg",
  },
  {
    id: 1,
    title: "招聘|尧坝古镇景区招聘公告",
    date: "2022-12-21",
    url: "https://mp.weixin.qq.com/s/zCmKCj1j9cWwlz51OTVO5w",
  },
  {
    id: 2,
    title: "六问六答！权威解读四川这项加强政务新媒体管理的通知",
    date: "2023-01-11",
    url: "https://mp.weixin.qq.com/s/RA5XIbo1X1TRZEU3XXMeyw",
  },
  {
    id: 3,
    title: "检出混管阳性的楼栋怎么办、出现哪些症状后需要到医院就诊...",
    date: "2022-12-09",
    url: "https://mp.weixin.qq.com/s/B7aRW-FLGyrvDET0IIgH-Q",
  },
  {
    id: 4,
    title: "热血军营等你加入！2023年征兵号角已吹响，快来报名！",
    date: "2023-01-03",
    url: "https://mp.weixin.qq.com/s/Z608y8HJa49y5q-TW-rFzQ",
  },
  {
    id: 5,
    title: "关注|春有约，花不误，尧坝古镇邀您踏上春日赏花之旅",
    date: "2023-03-10",
    url: "https://mp.weixin.qq.com/s/nEg8-bQvkyQbnlB3srmykA",
  },
  {
    id: 6,
    title: "食在尧坝国庆假期一到，尧坝这座隐藏的美食之城就藏不住了!",
    date: "2021-09-30",
    url: "https://mp.weixin.qq.com/s/sqkghoqli0I2Ho6RZAcnYw",
  },
]
let list4 = [
  {
    id: 0,
    title: "尧坝镇人民政府关于春节期间临时停车的通告",
    date: "2023-01-12",
    url: "https://mp.weixin.qq.com/s/orIkI7flFwIq8S2GbOzdSg",
  },
  {
    id: 1,
    title: "招聘|尧坝古镇景区招聘公告",
    date: "2022-12-21",
    url: "https://mp.weixin.qq.com/s/zCmKCj1j9cWwlz51OTVO5w",
  },
  {
    id: 2,
    title: "六问六答！权威解读四川这项加强政务新媒体管理的通知",
    date: "2023-01-11",
    url: "https://mp.weixin.qq.com/s/RA5XIbo1X1TRZEU3XXMeyw",
  },
  {
    id: 3,
    title: "检出混管阳性的楼栋怎么办、出现哪些症状后需要到医院就诊...",
    date: "2022-12-09",
    url: "https://mp.weixin.qq.com/s/B7aRW-FLGyrvDET0IIgH-Q",
  },
  {
    id: 4,
    title: "热血军营等你加入！2023年征兵号角已吹响，快来报名！",
    date: "2023-01-03",
    url: "https://mp.weixin.qq.com/s/Z608y8HJa49y5q-TW-rFzQ",
  },
  {
    id: 5,
    title: "关注|春有约，花不误，尧坝古镇邀您踏上春日赏花之旅",
    date: "2023-03-10",
    url: "https://mp.weixin.qq.com/s/nEg8-bQvkyQbnlB3srmykA",
  },
  {
    id: 6,
    title: "食在尧坝国庆假期一到，尧坝这座隐藏的美食之城就藏不住了!",
    date: "2021-09-30",
    url: "https://mp.weixin.qq.com/s/sqkghoqli0I2Ho6RZAcnYw",
  },
]
let list5 = [
  {
    id: 0,
    title: `2023-03-01 旅游人次为${randomNum()}`,
    date: "2023-01-12",
    url: "https://mp.weixin.qq.com/s/orIkI7flFwIq8S2GbOzdSg",
  },
  {
    id: 1,
    title: `2023-03-02 旅游人次为${randomNum()}`,
    date: "2023-01-12",
    url: "https://mp.weixin.qq.com/s/orIkI7flFwIq8S2GbOzdSg",
  },
  {
    id: 2,
    title: `2023-03-04 旅游人次为${randomNum()}`,
    date: "2023-01-12",
    url: "https://mp.weixin.qq.com/s/orIkI7flFwIq8S2GbOzdSg",
  },
  {
    id: 3,
    title: `2023-03-05 旅游人次为${randomNum()}`,
    date: "2023-01-12",
    url: "https://mp.weixin.qq.com/s/orIkI7flFwIq8S2GbOzdSg",
  },
  {
    id: 4,
    title: `2023-03-06 旅游人次为${randomNum()}`,
    date: "2023-01-12",
    url: "https://mp.weixin.qq.com/s/orIkI7flFwIq8S2GbOzdSg",
  },
  {
    id: 5,
    title: `2023-03-07 旅游人次为${randomNum()}`,
    date: "2023-01-12",
    url: "https://mp.weixin.qq.com/s/orIkI7flFwIq8S2GbOzdSg",
  },
  {
    id: 6,
    title: `2023-03-08 旅游人次为${randomNum()}`,
    date: "2023-01-12",
    url: "https://mp.weixin.qq.com/s/orIkI7flFwIq8S2GbOzdSg",
  },
]
export const getNews1 = () => {
  return Mock.mock(list1)
}
export const getNews2 = () => {
  return Mock.mock(list2)
}
export const getNews3 = () => {
  return Mock.mock(list3)
}
export const getNews4 = () => {
  return Mock.mock(list4)
}
export const getNews5 = () => {
  return Mock.mock(list5)
}
