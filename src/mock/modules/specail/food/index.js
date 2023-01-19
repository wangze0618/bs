import Mock from "mockjs"
const Random = require("mockjs").Random
export const getFood = () => {
  return Mock.mock({
    message: "success",
    data: [
      {
        id: 0,
        title: "尧坝古镇美食1",
        img: `https://picsum.photos/600/400?random=1`,
        desc: Random.cparagraph(3, 9),
      },
      {
        id: 1,
        title: "尧坝古镇美食2",
        img: `https://picsum.photos/600/400?random=2`,
        desc: Random.cparagraph(3, 9),
      },
      {
        id: 2,
        title: "尧坝古镇美食3",
        img: `https://picsum.photos/600/400?random=3`,
        desc: Random.cparagraph(3, 9),
      },
      {
        id: 3,
        title: "尧坝古镇美食4",
        img: `https://picsum.photos/600/400?random=4`,
        desc: Random.cparagraph(3, 9),
      },
      {
        id: 4,
        title: "尧坝古镇美食5",
        img: `https://picsum.photos/600/400?random=5`,
        desc: Random.cparagraph(3, 9),
      },
      {
        id: 5,
        title: "尧坝古镇美食6",
        img: `https://picsum.photos/600/400?random=6`,
        desc: Random.cparagraph(3, 9),
      },
      {
        id: 6,
        title: "尧坝古镇美食7",
        img: `https://picsum.photos/600/400?random=7`,
        desc: Random.cparagraph(3, 9),
      },
      {
        id: 7,
        title: "尧坝古镇美食8",
        img: `https://picsum.photos/600/400?random=8`,
        desc: Random.cparagraph(3, 9),
      },
      {
        id: 8,
        title: "尧坝古镇美食9",
        img: `https://picsum.photos/600/400?random=9`,
        desc: Random.cparagraph(3, 9),
      },
      {
        id: 9,
        title: "尧坝古镇美食10",
        img: `https://picsum.photos/600/400?random=10`,
        desc: Random.cparagraph(3, 9),
      },
      {
        id: 10,
        title: "尧坝古镇美食11",
        img: `https://picsum.photos/600/400?random=11`,
        desc: Random.cparagraph(3, 9),
      },
      {
        id: 11,
        title: "尧坝古镇美食12",
        img: require("@/assets/upload/minsu.jpg"),
        desc: Random.cparagraph(3, 9),
      },
    ],
  })
}
let list = [
  {
    id: 0,
    carousel: [
      "https://picsum.photos/800/700",
      "https://picsum.photos/800/700",
      "https://picsum.photos/800/700",
    ],
    title: "美食1",
    desc: Random.cparagraph(20),
    imgs: [
      "https://picsum.photos/800/700",
      "https://picsum.photos/800/700",
      "https://picsum.photos/800/700",
    ],
  },
  {
    id: 1,
    carousel: [
      "https://picsum.photos/800/700",
      "https://picsum.photos/800/700",
      "https://picsum.photos/800/700",
    ],
    title: "美食2",
    desc: Random.cparagraph(5, 10),
    imgs: [
      "https://picsum.photos/800/700",
      "https://picsum.photos/800/700",
      "https://picsum.photos/800/700",
    ],
  },
  {
    id: 2,
    carousel: [
      "https://picsum.photos/800/700",
      "https://picsum.photos/800/700",
      "https://picsum.photos/800/700",
    ],
    title: "美食3",
    desc: Random.cparagraph(5, 10),
    imgs: [
      "https://picsum.photos/800/700",
      "https://picsum.photos/800/700",
      "https://picsum.photos/800/700",
    ],
  },
]
export const getDetailFood = (op) => {
  return Mock.mock({
    message: op.body,
    data: list.filter((item) => item.id == op.body),
  })
}
