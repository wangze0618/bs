import { createStore } from "vuex"
import user from "./modules/user"
import createPersistedState from "vuex-persistedstate"

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
  },
  plugins: [
    // 默认存储在localstorage
    createPersistedState({
      // 本地存储的名字
      key: "bs",
      // 需要存储的模块
      paths: ["user"],
    }),
  ],
})
