import { getItem } from "@/utils/storage"
// const { hotel } = getItem("bs")
export default {
  namespaced: true,
  state() {
    return {
      list: [],
    }
  },
  mutations: {
    // 修改数组
    setList(state, playload) {
      state.list = playload
    },
  },
  actions: {},
  getters: {
    getList: (state) => () => {
      return state.list
    },
  },
}
