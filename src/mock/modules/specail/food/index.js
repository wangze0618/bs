import Mock from "mockjs"
const Random = require("mockjs").Random
export const getFood = () => {
  return Mock.mock({
    message: "success",
    data: [
      {
        id: 0,
        title: "尧坝红汤羊肉",
        img: `https://pic.rmb.bdstatic.com/bjh/news/b284c5875d05978713451fc9c870ed05.png`,
        desc: `尧坝红汤羊肉，四川省特色菜品。<br>
        2021年7月，尧坝红汤羊肉入选四川省省级天府旅游美食候选名单`,
        star: 5,
      },
      {
        id: 1,
        title: "尧坝黄粑",
        img: `http://image.qingk.cn/image/zhhj/2c37e567f78b4771b3561bc3e172410e.png`,
        desc: `第一次在尧坝吃黄粑的时候还是惊艳了一把——明明米粒分明，咬上去的口感居然软糯q弹而且 一！点！也！不！粘牙！`,
        star: 5,
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
      "https://pic.rmb.bdstatic.com/bjh/news/b284c5875d05978713451fc9c870ed05.png",
      "https://pic.rmb.bdstatic.com/bjh/news/a587bb0d360253fedfd331cc8525afe4.png",
      "https://pic.rmb.bdstatic.com/bjh/news/96cdf3051f032089dea370532f168961.png",
    ],
    title: "尧坝红汤羊肉",
    desc: `<p>民以食为天，在外旅游观光，到了目的地首先要解决的就是吃的问题。在尧坝古镇旅游时，你可选择最实惠又廉价还有地方特色的佳肴——“红汤羊肉汤锅”。<p/><p>小寒吃羊肉，大寒吃萝卜，在合江县人们有入冬喝羊肉汤的习惯。尧坝红汤羊肉作为合江县县级非物质文化遗产代表性项目，由传统祖传秘方烹调熬制，鲜嫩的黑山羊肉，再配上泡萝卜泡椒蘸水，酸辣爽口。
   </p><p>当你看到一大锅红红的，冒着热汽的，散发着羊肉香汽的大锅时，这就是远近闻名的尧坝红汤羊肉汤锅。你乍一看，好红的汤啊，是不是很辣啊！不！不是的，你不要被那红红的汤色吓着了。看着好象很辣，其实辣味温和，刚好恰当。不信你尝尝。
   <br/><p>品尝尧坝古镇的羊肉汤锅要先喝汤，当你喝下第一口汤的时候，那鲜鲜的汤味可以让你的每一根神经都调动起来，迫不急待地想挟住一块羊肉。据说，尧坝古镇的羊肉汤锅吃了能滋阴补肾，强身健体，特别是对女性还有美容的作用。<p/>　`,
    star: 5,
    url: "https://baijiahao.baidu.com/s?id=1717036697917741747",
  },
  {
    id: 1,
    star: 5,
    carousel: [
      "http://image.qingk.cn/image/zhhj/b0d4cc5d2fe945c8824f816565e4ff60.png",
      "http://image.qingk.cn/image/zhhj/baf7e3026bd4492d9198848c57968dca.png",
      "http://image.qingk.cn/image/zhhj/659d147db9be4a2dbebe7f7bdbf56e83.png",
    ],
    title: "尧坝黄粑",
    desc: `<p>尧坝黄粑是四川省泸州市合江县传统手工制作的特色食品。选择尧坝山区、天堂坝等地的糯米、粘米配用红糖、
    冰糖和良姜叶、楠竹笋尖、棕丝等制作包裹而成。其制作历史悠久、工艺传统，是具有地方特色的天然绿色食品。其成品晶莹黄亮，
    清香糍润、甜而不腻、柔韧瓷实，兼以糯米、红糖原香，竹叶、良姜叶的特殊气味，上蒸时香味弥漫，方圆数里可闻。在尧坝古镇临街叫卖的商家小铺里，
    必不可少的东西就是黄粑了，造型古朴的黄粑整齐摆在摊前，或者把蒸熟的黄粑存放在木甑里，一打开，热气和清香就弥漫在古镇街道上，本地人爱黄粑，
    因为这股香甜陪伴他们长大，外地人喜欢黄粑，因为这是属于尧坝古镇的舌尖味道。</p>
    <img style='display:block;margin:0 auto;' src='http://image.qingk.cn/image/zhhj/659d147db9be4a2dbebe7f7bdbf56e83.png'>
    <p>蒸制好的黄粑色泽红亮且味甜，因加入红糖，加上长时间蒸煮，糯米饭在密闭的木甑中经过长时间的蒸煮和发酵，分解出大量的糖分，而糯米饭的色泽也由白变黄，同时也越发的香糯，黄粑的黄润与香甜，完全就赖这漫长的蒸煮。香糯软绵的黄粑，不仅回味无尽香醇自然，而且是人们生活甜美的寄托和祝福。不仅可以蒸食，还能烧烤、烹炒。在当地，人们对黄粑情有独钟，甚至将其作为年节婚庆走亲访友、合家欢宴的主打佳肴。黄粑造型朴素，拨开外衣才知其中醇香，也正如尧坝古镇，走进它，你才会感受到那份厚重的历史文化底蕴，令人回味悠长。来到尧坝，带走黄粑，正是带走那份独有的古镇风味。小伙伴们，四川合江小吃“尧坝黄粑”，你吃过吗？
    </p>
    `,
    url: "https://baijiahao.baidu.com/s?id=1740771483209279739",
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
