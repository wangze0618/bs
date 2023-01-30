import Mock from "mockjs"

export const getCarouselList = () => {
  return Mock.mock({
    message: "success",
    data: [
      {
        url: require("@/assets/upload/home/home4.png"),
        title: "尧坝景区欢迎您",
        desc: "争创国家全域旅游示范区!",
      },
      {
        url: require("@/assets/upload/home/home1.webp"),
        title: "尧坝景区欢迎您",
        desc: "建设一流景区",
      },
      {
        url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fss2.meipian.me%2Fusers%2F2210709%2Ff235b8e3-46c2-433b-99c2-a56f2e2bbcfd.jpg%3Fmeipian-raw%2Fbucket%2Fivwen%2Fkey%2FdXNlcnMvMjIxMDcwOS9mMjM1YjhlMy00NmMyLTQzM2ItOTljMi1hNTZmMmUyYmJjZmQuanBn%2Fsign%2F0bbd1d46e8a79304f387b67da07032d4.jpg&refer=http%3A%2F%2Fss2.meipian.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1677340850&t=79c0dc58a77439e9c48819c1882209de",
        title: "尧坝景区欢迎您",
        desc: "建设一流景区",
      },
      {
        url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fss2.meipian.me%2Fusers%2F2210709%2F19f2634b156c48ee9a12f9a1bf0f7c93.jpeg%3Fmeipian-raw%2Fbucket%2Fivwen%2Fkey%2FdXNlcnMvMjIxMDcwOS8xOWYyNjM0YjE1NmM0OGVlOWExMmY5YTFiZjBmN2M5My5qcGVn%2Fsign%2F7aca397def62418050f8873c26e9fda1.jpg&refer=http%3A%2F%2Fss2.meipian.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1677340821&t=e2622a51344dfaa1ff048453bda83a2b",
        title: "尧坝景区欢迎您",
        desc: "建设一流景区",
      },
    ],
  })
}
