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
const app = createApp(App)

app.directive("lazyLoad", {
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

// 添加 bounceInDown 动画效果
app.directive("bounceInDown", {
  mounted(el) {
    el.classList.add("wow", "bounceInDown")
  },
})
app.use(VueViewer)
app.use(store).use(router).mount("#app")
