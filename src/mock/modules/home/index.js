import Mock from "mockjs"

export const getCarouselList = () => {
  return Mock.mock({
    message: "success",
    data: [
      {
        url: require("@/assets/upload/home/home3.jpg"),
        title: "账号admin1",
        desc: "密码000000",
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
