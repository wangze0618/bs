// 定义header菜单数据
const headerItem = [
  {
    id: 0,
    title: "首页",
    to: "/",
  },
  {
    id: 100,
    title: "走进尧坝",
    to: "/about",
    children: [
      {
        id: 101,
        title: "详细介绍",
        to: "/about/detail",
      },
      {
        id: 102,
        title: "景区景点",
        to: "/about/spot",
      },
    ],
  },
  {
    id: 200,
    title: "特色产品",
    to: "",
    children: [
      {
        id: 201,
        title: "景区新闻",
        to: "/news/scenic-news",
      },
      {
        id: 202,
        title: "旅游公告",
        to: "notice",
      },
      {
        id: 203,
        title: "每日进沟人数",
      },
    ],
  },
  {
    id: 300,
    title: "旅游服务",
    to: "/c",
    children: [
      {
        id: 301,
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
    to: "/login",
  },
  {
    id: 6,
    title: "用户留言",
    to: "/comment",
  },
  {
    id: 7,
    title: "关于我们",
    to: "/aboutus",
  },
]

export default headerItem
