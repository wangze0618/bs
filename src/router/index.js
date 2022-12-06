import { createRouter, createWebHashHistory } from "vue-router"
import nprogress from "nprogress"
// import Layout from "@/views/Layout.vue"
// import Home from "@/views/home/index.vue"
// import About from "@/views/about/index.vue"
// import AboutDetail from "@/views/about/views/about-detail.vue"
// import AboutDetailInfo from "@/views/about/views/about-detail-info.vue"
// import Login from "@/views/login/index.vue"
// import User from "@/views/user/index.vue"
import store from "@/store"
import confirmBox from "@/components/UI/confirm"
nprogress.start()
const routes = [
  {
    path: "/",
    component: () => import("@/views/Layout.vue"),
    children: [
      // 首页
      {
        path: "",
        name: "Home",
        component: () => import("@/views/home/index.vue"),
      },
      // 走进尧坝
      {
        path: "/about",
        name: "About",
        component: () => import("@/views/about/index.vue"),
      },
      // 走进尧坝--详细介绍
      {
        path: "/about/detail/",
        name: "AboutDetail",
        component: () => import("@/views/about/views/about-detail.vue"),
      },
      // // 走进尧坝--详细介绍详情页
      // {
      //   path: "/about/detail/:id",
      //   name: "AboutDetailInfo",
      //   component: () => import("@/views/about/views/about-detail-info.vue"),
      // },

      // 走进尧坝--主要景点页
      {
        path: "/about/main-spot",
        name: "MainSpot",
        component: () => import("@/views/about/views/main-spot/index.vue"),
      },
      // 走进尧坝--主要景点详情页
      {
        path: "/about/main-spot/:id",
        name: "MainSpotDetail",
        component: () =>
          import("@/views/about/views/main-spot-detail/index.vue"),
      },
      // 特色产品
      {
        path: "/special",
        name: "Special",
        component: () => import("@/views/special/index.vue"),
      },
      // 特色产品--特色美食
      {
        path: "/special/food",
        name: "SpecialFood",
        component: () => import("@/views/special/views/food/index.vue"),
      },
      {
        path: "/special/food/:id",
        name: "SpecialFoodDetail",
        component: () => import("@/views/news/index.vue"),
      },
      // 特色产品--特色手工
      {
        path: "/special/handmade",
        name: "SpecialHandmade",
        component: () => import("@/views/special/views/handmade/index.vue"),
      },
      // 特色产品--特色手工详情页
      {
        path: "/special/handmade/:id",
        name: "SpecialHandmadeDetail",
        component: () =>
          import("@/views/special/views/handmade-detail/index.vue"),
      },
      // 旅游服务
      {
        path: "/service",
        name: "Service",
        component: () => import("@/views/news/index.vue"),
      },
      // 旅游服务--酒店住宿
      {
        path: "/service/hotel",
        name: "ServiceHotel",
        component: () => import("@/views/news/index.vue"),
      },
      // 旅游服务--路线规划
      {
        path: "/service/route",
        name: "ServiceRoute",
        component: () => import("@/views/news/index.vue"),
      },
      // 旅游服务--门票预订
      {
        path: "/service/ticket",
        name: "ServiceTicket",
        component: () => import("@/views/news/index.vue"),
      },
      // 新闻资讯
      {
        path: "/news",
        name: "News",
        component: () => import("@/views/news/index.vue"),
      },
      // 用户留言
      {
        path: "/comment",
        name: "Comment",
        component: () => import("@/views/user-comment/index.vue"),
      },
      // 关于我们
      {
        path: "/aboutus",
        name: "Aboutus",
        component: () => import("@/views/aboutus/index.vue"),
      },
      // 购物车
      {
        path: "/cart",
        name: "Cart",
        component: () => import("@/views/cart/index.vue"),
      },
      // 结算界面
      {
        path: "/checkout",
        name: "Checkout",
        component: () => import("@/views/checkout/index.vue"),
      },
      // 支付结果界面
      {
        path: "/pay/",
        name: "Pay",
        component: () => import("@/views/pay/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/search",
    component: () => import("@/views/search/index.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

router.beforeEach(async (to, from, next) => {
  if (to.path == "/comment" && store.state.user.token == null) {
    await confirmBox({ title: "提示", text: "请先登录!" })
    router.push(`/login?redirect=${to.path}`)
  }
  next()
})
nprogress.done()

export default router
