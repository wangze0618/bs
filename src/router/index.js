import { createRouter, createWebHashHistory } from "vue-router"
import nprogress from "nprogress"
import Layout from "@/views/Layout.vue"
import Home from "@/views/home/index.vue"
import About from "@/views/about/index.vue"
import AboutDetail from "@/views/about/views/about-detail.vue"
import AboutDetailInfo from "@/views/about/views/about-detail-info.vue"
import Login from "@/views/login/index.vue"
import User from "@/views/user/index.vue"
import store from "@/store"
import confirmBox from "@/components/UI/confirm"
nprogress.start()
const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/about",
        name: "About",
        component: () => import("@/views/about/index.vue"),
      },
      {
        path: "/about/detail/",
        name: "AboutDetail",
        component: () => import("@/views/about/views/about-detail.vue"),
      },
      {
        path: "/about/detail/:id",
        name: "AboutDetailInfo",
        component: () => import("@/views/about/views/about-detail-info.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  if (to.path == "/user" && store.state.user.token == null) {
    await confirmBox({ title: "提示", text: "请先登录" })
    router.push(`/login?redirect=${to.path}`)
  }
  next()
})
nprogress.done()

export default router
