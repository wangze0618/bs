import { createRouter, createWebHashHistory } from "vue-router"
import nprogress from "nprogress"
import Layout from "@/views/Layout.vue"
import Home from "@/views/home/index.vue"
import About from "@/views/about/index.vue"
import AboutDetail from "@/views/about/views/about-detail.vue"
import AboutDetailInfo from "@/views/about/views/about-detail-info.vue"
import Login from "@/views/login/index.vue"
nprogress.start()
const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "/",
        component: Home,
      },
      {
        path: "/about",
        name: "/about",
        component: About,
      },
      {
        path: "/about/detail/",
        name: "/about/detail/",
        component: AboutDetail,
      },
      {
        path: "/about/detail/:id",
        name: "/about/detail/:id",
        component: AboutDetailInfo,
      },
    ],
  },
  {
    path: "/login",
    component: Login,
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
nprogress.done()

export default router
