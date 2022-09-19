import { createRouter, createWebHashHistory } from "vue-router"
import nprogress from "nprogress"
import Layout from "@/views/Layout.vue"
import Home from "@/views/home/index.vue"
import About from "@/views/about/index.vue"
import AboutDetail from "@/views/about/views/about-detail.vue"
nprogress.start()
const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/about",
        component: About,
      },
      {
        path: "/about/detail",
        component: AboutDetail,
      },
    ],
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
