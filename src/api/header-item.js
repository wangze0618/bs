// 定义header菜单数据
const headerItem = [
  {
    id: 0,
    title: "首页",
    to: "/",
  },
  {
    id: 1,
    title: "走进会理",
    to: "/about",
    children: [
      {
        id: 11,
        title: "关于会理",
        to: "/about/detail",
      },
      {
        id: 12,
        title: "标志景点",
      },
      {
        id: 13,
        title: "自然与动物aa",
      },
      {
        id: 14,
        title: "风俗文化",
      },
    ],
  },
  {
    id: 2,
    title: "最新动态",
    to: "",
    children: [
      {
        id: 21,
        title: "景区新闻",
        to: "/news/scenic-news",
      },
      {
        id: 22,
        title: "旅游公告",
        to: "notice",
      },
      {
        id: 23,
        title: "每日进沟人数",
      },
    ],
  },
  {
    id: 3,
    title: "旅游产品",
    to: "/c",
    children: [
      {
        id: 31,
        title: "3关于五凤溪",
      },
      {
        id: 32,
        title: "3标志景点",
      },
      {
        id: 33,
        title: "3自然与动物",
      },
      {
        id: 34,
        title: "3风俗文化",
      },
    ],
  },
  {
    id: 4,
    title: "智慧产品",
    to: "/d",
    children: [
      {
        id: 41,
        title: "4关于五凤溪",
      },
      {
        id: 42,
        title: "4标志景点",
      },
      {
        id: 43,
        title: "4自然与动物",
      },
      {
        id: 44,
        title: "4风俗文化",
      },
    ],
  },
  {
    id: 5,
    title: "智慧服务",
    to: "/5",
    children: [
      {
        id: 51,
        title: "5关于五凤溪",
      },
      {
        id: 52,
        title: "5标志景点",
      },
      {
        id: 53,
        title: "5自然与动物",
      },
      {
        id: 54,
        title: "5风俗文化",
      },
    ],
  },
]

export default headerItem
