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
  getters: {},
}
