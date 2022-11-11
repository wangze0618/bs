import { handmadeList } from "@/api/special/handmade/handmade"

export default {
  namespaced: true,

  state() {
    return {
      handmadeList: [],
    }
  },
  mutations: {
    // 设置值
    setHandmade(state, playload) {
      state.handmadeList = playload
    },
  },
  actions: {
    // 获取值
    getHandmade(content) {
      content.commit("setHandmade", handmadeList)
    },
  },
  getters: {
    handmadeList: (state) => () => state.handmadeList,
  },
}
