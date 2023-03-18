import Mock from "mockjs"

export const getCarouselList = () => {
  return Mock.mock({
    message: "success",
    data: [
      {
        url: require("@/assets/upload/home/home3.jpg"),
        title: "尧坝摄影比赛活动即将开始",
        desc: "活动将于6月18日开始，敬请关注",
      },
      {
        url: require("@/assets/upload/home/home2.jpg"),
        title: "尧坝景区欢迎您",
        desc: "建设一流景区",
      },
      {
        url: require("@/assets/upload/home/home1.jpg"),
        title: "尧坝景区欢迎您",
        desc: "建设一流景区",
      },
    ],
  })
}
