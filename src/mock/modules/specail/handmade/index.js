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
    title: "尧坝草鞋纯手工编制，历史悠久",
    star: 5,
    price: 121,
    oldPrice: 154,
    description: `
    <p>尧坝草鞋</p>
    <p>尧坝草鞋纯手工编制，历史悠久</p>
    <p>“竹杖芝鞋轻胜马，一蓑风雨任平生”。草鞋文化在中国起源很早，其历史可以追溯到商周时代，至今已有三千多年的历史。作为中国传统文化的重要组成部分，何有全决心不让这份手艺失传。“草鞋不仅经济又舒适，还有除湿的效果。”何有全说道，草鞋以太阳晾晒干后的稻草为原材料，在经过手搓、编织的过程以后，将草鞋的两头用麻绳绑好使之成型。同时，为了让草鞋做到舒适又美观，还需去掉多余的稻草，反复对比大小、调整比例，在经过一系列工序以后草鞋就制作完成了。</p>
    `,
    count: 99,
    category: {
      size: ["35", "36", "37", "38", "39", "40", "41", "42", "43"],
    },
    img_preview: require("@/assets/upload/handmade2.jpeg"),
    img_list: [
      require("@/assets/upload/handmade2.jpeg"),
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade1.webp"),
      require("@/assets/upload/handmade2.jpeg"),
      require("@/assets/upload/handmade1.webp"),
    ],
    detail: `
    <p>“竹杖芝鞋轻胜马，一蓑风雨任平生”。</p>
    <p>草鞋文化在中国起源很早，其历史可以追溯到商周时代，至今已有三千多年的历史。</p>
    <p>作为中国传统文化的重要组成部分，何有全决心不让这份手艺失传。</p>
    <p>但，如果说什么与古镇最搭</p>
    <p>“草鞋不仅经济又舒适，还有除湿的效果。”何有全说道，</p>
    <p>草鞋以太阳晾晒干后的稻草为原材料，在经过手搓、编织的过程以后，将草鞋的两头用麻绳绑好使之成型。</p>
    <p>同时，为了让草鞋做到舒适又美观，还需去掉多余的稻草，反复对比大小、调整比例，在经过一系列工序以后草鞋就制作完成了。</p>
    <img class='img-thumbnail mb-1' style='display:block;margin:0 auto;max-width:500px;width:100%' src='${require("@/assets/upload/handmade/xiezi.jpg")}'>
    <p>摄/向波</p>
     `,
  },
  {
    id: 2203,
    name: "香猴",
    star: 4,
    price: 100,
    oldPrice: 120,
    description: `
    <p>
    香猴—当地传统的小工艺品
    </p>
    <p>很有特色的手工艺品，价格却并不贵。</p>
    <p>香猴散发着草药的幽香，这正是用当地的草药来充当香料，完全没有经过化学调配。</p>
    <p>把它挂到身上，包上，真的是有着传统的优雅。</p>
    `,
    title:
      "当地的一种草药来充当填充香料，散发着幽幽的香，是很有当地特色的手工艺品，价格却并不贵。",
    title: "当地传统的很有特色的手工艺品",
    count: 99,
    category: {
      color: ["黑色", "红色"],
    },
    img_preview:
      "https://photocdn.sohu.com/20150915/mp31874925_1442280147809_5.jpeg",
    img_list: [
      "http://www.chuannan.net/uploads/ueditor/20210613/8-210613012P9295.png",
      "http://www.chuannan.net/uploads/ueditor/20210613/8-210613012913392.png",
      "http://www.chuannan.net/uploads/ueditor/20210613/8-21061301294I93.jpg",
      "http://www.chuannan.net/uploads/ueditor/20210613/8-2106130130211J.png",
      "https://photocdn.sohu.com/20150915/mp31874925_1442280147809_5.jpeg",
    ],
    detail: `
    <p>“竹杖芝鞋轻胜马，一蓑风雨任平生”。</p>
    <p>草鞋文化在中国起源很早，其历史可以追溯到商周时代，至今已有三千多年的历史。</p>
    <p>作为中国传统文化的重要组成部分，何有全决心不让这份手艺失传。</p>
    <p>但，如果说什么与古镇最搭</p>
    <p>“草鞋不仅经济又舒适，还有除湿的效果。”何有全说道，</p>
    <p>草鞋以太阳晾晒干后的稻草为原材料，在经过手搓、编织的过程以后，将草鞋的两头用麻绳绑好使之成型。</p>
    <p>同时，为了让草鞋做到舒适又美观，还需去掉多余的稻草，反复对比大小、调整比例，在经过一系列工序以后草鞋就制作完成了。</p>
    <img class='img-thumbnail mb-1' style='display:block;margin:0 auto;max-width:500px;width:100%' src='${require("@/assets/upload/handmade/xiezi.jpg")}'>
    <p>摄/向波</p>
     `,
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
export const getRecommend = () => {
  return Mock.mock(list.slice(0, 3))
}
