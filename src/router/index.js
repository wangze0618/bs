import { createRouter, createWebHashHistory } from "vue-router"
import confirmBox from "@/components/UI/confirm"
import nprogress from "nprogress"
import store from "@/store"

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

      {
        path: "/about/spot",
        name: "spot",
        component: () => import("@/views/about/views/spot/index.vue"),
        children: [
          // 景点详细介绍
          {
            path: "gujie",
            name: "gujie",
            component: () => import("@/views/about/views/spot/spot-info.vue"),
          },
          {
            path: "buxingjie",
            name: "buxingjie",
            component: () => import("@/views/about/views/spot/buxingjie.vue"),
          },
        ],
      },
      {
        path: "/about/spot/:id",
        name: "SpotInfo",
        component: () => import("@/views/about/views/spot/spot-info.vue"),
      },

      // 走进尧坝--详细介绍
      // {
      //   path: "/about/detail/",
      //   name: "AboutDetail",
      //   component: () => import("@/views/about/views/about-detail.vue"),
      // },
      // // 走进尧坝--详细介绍详情页
      // {
      //   path: "/about/detail/:id",
      //   name: "AboutDetailInfo",
      //   component: () => import("@/views/about/views/about-detail-info.vue"),
      // },

      // // 走进尧坝--主要景点页
      // {
      //   path: "/about/main-spot",
      //   name: "MainSpot",
      //   component: () => import("@/views/about/views/main-spot/index.vue"),
      // },
      // // 走进尧坝--主要景点详情页
      // {
      //   path: "/about/main-spot/:id",
      //   name: "MainSpotDetail",
      //   component: () =>
      //     import("@/views/about/views/main-spot-detail/index.vue"),
      // },

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
        component: () => import("@/views/special/views/food-detail/index.vue"),
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
        component: () => import("@/views/service/view/hotel/index.vue"),
      },
      // 旅游服务--酒店住宿-详情页
      {
        path: "/service/hotel/:id",
        name: "ServiceHotelDetail",
        component: () => import("@/views/service/view/hotel-detail/index.vue"),
      },
      // 旅游服务--路线规划
      {
        path: "/service/route",
        name: "ServiceRoute",
        component: () => import("@/views/service/view/route/index.vue"),
      },
      // 旅游服务--常见问答
      {
        path: "/service/qa",
        name: "ServiceQa",
        component: () => import("@/views/service/view/qa/index.vue"),
      },
      // 旅游服务--行程推荐
      {
        path: "/service/play-guide",
        name: "ServicePlayGuide",
        component: () => import("@/views/service/view/play-guide/index.vue"),
      },
      // 旅游服务--门票预订
      // {
      //   path: "/service/ticket",
      //   name: "ServiceTicket",
      //   component: () => import("@/views/news/index.vue"),
      // },

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
      // 联系我们
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
  {
    path: "/404",
    name: "NotFound",
    component: () => import("@/views/404/index.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

const checkPath = [
  "/comment",
  "/cart",
  "/service/hotel",
  "/checkout",
  "/pay",
  "/special/handmade",
  "/special/food",
]

router.beforeEach(async (to, from, next) => {
  if (checkPath.includes(to.path) && store.state.user.token == null) {
    if (await confirmBox({ title: "提示", text: "请先登录!" })) {
      router.push(`/login?redirectUrl=${to.path}`)
    } else {
      next(false)
    }
  }
  next()
})
nprogress.done()

export default router
