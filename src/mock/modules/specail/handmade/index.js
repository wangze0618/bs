import Mock from "mockjs"
const list = [
  // 手工
  {
    id: 2201,
    name: "尧坝油纸伞",
    star: 4,
    price: 100,
    oldPrice: 120,
    title: "尧坝的雨伞☂",
    description: `
    <p>做一把尧坝油纸伞</p>
    <p>从开料到制作完毕</p>
    <p>需要经历采竹子、搭骨架、</p>
    <p>做伞边、上桐油等近百道工序</p>
    <p>这样匠心独具的尧坝油纸伞</p>
    <p>你难道不想来一把？</p>
    `,
    count: 99,
    category: {
      color: ["黑色", "红色"],
    },
    img_preview:
      "http://www.hejiang.gov.cn/Upload/main/image/2022/12/28/202212281126417851.jpeg",
    img_list: [
      "http://www.hejiang.gov.cn/Upload/main/image/2022/12/28/202212281126411686.jpeg",
      "http://www.hejiang.gov.cn/Upload/main/image/2022/12/28/202212281126417851.jpeg",
      "http://www.hejiang.gov.cn/Upload/main/image/2022/12/28/202212281126410902.jpeg",
      "http://www.hejiang.gov.cn/Upload/main/image/2022/12/28/202212281126410413.jpeg",
      "http://www.hejiang.gov.cn/Upload/main/image/2022/12/28/202212281126454191.jpeg",
    ],
    detail: `
    <p>来到尧坝古镇</p>
    <p>你能看到众多的古老建筑</p>
    <p>也能体验到丰富的传统文化</p>
    <p>但，如果说什么与古镇最搭</p>
    <p>小编觉得油纸伞堪称绝配</p>
    <img class='img-thumbnail mb-1' style='display:block;margin:0 auto;max-width:500px;width:100%' src='http://www.hejiang.gov.cn/Upload/main/image/2022/12/28/202212281126417851.jpeg'>
    <p>摄/向波</p>
    <p>在尧坝古镇</p>
    <p>随处可见一把把油纸伞</p>
    <p>那一把把</p>
    <p>红的描了牡丹，白的描了丁香</p>
    <p>蓝的绘了青花瓷</p>
    <p>如花般满街尽情绽放着</p>
    <img class='img-thumbnail mb-1' style='display:block;margin:0 auto;max-width:500px;width:100%' src='http://www.hejiang.gov.cn/Upload/main/image/2022/12/28/202212281126410902.jpeg'>
    <p>摄/龙国兵</p>
    <p>撑着油纸伞</p>
    <p>独自彷徨在悠长 悠长</p>
    <p>又寂寥的雨巷</p>
    <p>我希望逢着</p>
    <p>一个丁香一样地</p>
    <p>结着愁怨的姑娘</p>
     `,
  },
  {
    id: 2202,
    name: "尧坝草鞋",
    star: 5,
    price: 121,
    oldPrice: 154,
    description: "这是尧坝油纸伞这是尧坝油纸伞这是尧坝油纸伞",
    count: 99,
    category: {
      size: ["35", "36", "37", "38", "39", "40", "41", "42", "43"],
    },
    img_preview: require("@/assets/upload/handmade1.webp"),
    img_list: [
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade2.jpeg"),
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade2.jpeg"),
      require("@/assets/upload/handmade1.webp"),
    ],
  },
  {
    id: 2203,
    name: "尧坝油纸伞3",
    star: 2,
    price: 100,
    oldPrice: 120,
    description: "这是尧坝油纸伞这是尧坝油纸伞这是尧坝油纸伞",
    count: 99,
    category: {
      color: ["黑色", "红色"],
    },
    img_preview: require("@/assets/upload/handmade1.webp"),
    img_list: [
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade1.webp"),
    ],
  },
  {
    id: 2204,
    name: "尧坝油纸伞4",
    star: 3,
    price: 100,
    oldPrice: 120,
    description: "这是尧坝油纸伞这是尧坝油纸伞这是尧坝油纸伞",
    count: 99,
    category: {
      color: ["黑色", "红色"],
    },
    img_preview: require("@/assets/upload/handmade1.webp"),
    img_list: [
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade1.webp"),
    ],
  },
  {
    id: 2205,
    name: "尧坝油纸伞5",
    star: 2,
    price: 100,
    oldPrice: 120,
    description: "这是尧坝油纸伞这是尧坝油纸伞这是尧坝油纸伞",
    count: 99,
    category: {
      color: ["黑色", "红色"],
    },
    img_preview: require("@/assets/upload/handmade1.webp"),
    img_list: [
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade1.webp"),
    ],
  },
  {
    id: 2206,
    name: "尧坝油纸伞",
    star: 4,
    price: 100,
    oldPrice: 120,
    description: "这是尧坝油纸伞这是尧坝油纸伞这是尧坝油纸伞",
    count: 99,
    category: {
      color: ["黑色", "红色"],
    },
    img_preview: require("@/assets/upload/handmade1.webp"),
    img_list: [
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade1.webp"),
    ],
  },
  {
    id: 2207,
    name: "尧坝油纸伞",
    star: 4,
    price: 100,
    oldPrice: 120,
    description: "这是尧坝油纸伞这是尧坝油纸伞这是尧坝油纸伞",
    count: 99,
    category: {
      color: ["黑色", "红色"],
    },
    img_preview: require("@/assets/upload/handmade1.webp"),
    img_list: [
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade1.webp"),
    ],
  },
  {
    id: 2208,
    name: "尧坝油纸伞",
    star: 4,
    price: 100,
    oldPrice: 120,
    description: "这是尧坝油纸伞这是尧坝油纸伞这是尧坝油纸伞",
    count: 99,
    category: {
      color: ["黑色", "红色"],
    },
    img_preview: require("@/assets/upload/handmade1.webp"),
    img_list: [
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade1.webp"),
    ],
  },
]
export const getDetailHandmadeList = (options) => {
  const item = list.filter((it) => it.id == options.body)
  return Mock.mock({
    data: item,
  })
}
export const getHandmadeList = () => {
  return Mock.mock(list)
}
