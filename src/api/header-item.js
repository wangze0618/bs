// 定义header菜单数据
const headerItem = [
  {
    id: 0,
    title: "首页",
    to: "/",
  },
  {
    id: 1,
    title: "走进尧坝",
    to: "/about",
    children: [
      {
        id: 11,
        title: "关于会理",
        to: "/about/detail",
      },
      // {
      //   id: 12,
      //   title: "关于会理id",
      //   to: "/about/detail/:id",
      // },
      {
        id: 13,
        title: "标志景点",
      },
      {
        id: 14,
        title: "自然与动物aa",
      },
      {
        id: 15,
        title: "风俗文化",
      },
    ],
  },
  {
    id: 2,
    title: "特色产品",
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
    title: "旅游服务",
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
    title: "新闻资讯",
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
    title: "登录注册",
    to: "/5",
  },
  {
    id: 6,
    title: "个人中心",
    to: "/my",
  },
  {
    id: 7,
    title: "用户留言",
    to: "/my",
  },
  {
    id: 8,
    title: "关于我们",
    to: "/about-us",
  },
]

export default headerItem
