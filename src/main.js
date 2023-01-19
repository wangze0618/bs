import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
// css样式
import "@csstools/normalize.css"
import "@/assets/style/common.scss"
// nprogress
import "nprogress/nprogress.js"
import "nprogress/nprogress.css"
// animate.css
import "animate.css"
import "wowjs/css/libs/animate.css" // 巨坑... 此地方要引入两个css
// v-viewer
import "viewerjs/dist/viewer.css"
import VueViewer from "v-viewer"
import "@/mock/index.js"
const img = require("@/assets/image/loading.gif")
// mock.js

const app = createApp(App)

app.directive("img-lazyload", (el, binding) => {
  const observer = new IntersectionObserver(
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        observer.unobserve(el)
        el.src = binding.value
      } else {
        el.src = img
      }
    },
    {
      threshold: 0.6,
    }
  )
  observer.observe(el)

  el.onerror = () => {
    el.src = img
  }
})
app.directive("lazyload", {
  mounted(el, binding, vnode, prevVNode) {
    const observer = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          el.src = binding.value
          observer.unobserve(el)
        }
      },
      {
        threshold: 0,
      }
    )
    observer.observe(el)
  },
})

// 添加动画效果
app.directive("animate", {
  mounted(el, binding) {
    const { name } = binding.value
    // el.classList.add("wow", `${name}`)
    // 解构出 动画参数
    const observe = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        // 判断是否可视
        if (isIntersecting) {
          el.classList.add("animated", `${name}`)
        } else {
          el.classList.remove("animated", `${name}`)
          observe.unobserve(el)
        }
        console.log(isIntersecting)
      },
      {
        threshold: 0,
      }
    )
    observe.observe(el)
  },
})

const amapKeys = Object.keys(localStorage).filter((key) => key.match(/^_AMap_/))
amapKeys.forEach((key) => {
  localStorage.removeItem(key)
})
app.use(VueViewer)
app.use(store).use(router).mount("#app")
