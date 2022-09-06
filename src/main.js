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
const app = createApp(App)
app.use(store).use(router).mount("#app")
