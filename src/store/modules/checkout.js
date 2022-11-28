export default {
  namespaced: true,
  state() {
    return {
      goodsList: [],
    }
  },
  mutations: {
    addList(state, pd) {
      state.goodsList.push(pd)
    },
  },
  getters: {
    getGoodsList: (state) => () => {
      return state.goodsList
    },
    getRealPrice: (state) => (id) => {
      let item = state.goodsList.find((item) => item.id === id)
      return item.prop.count * item.price
    },
    // 计算价格

    // 计算数量
    getCount: (state) => () => {
      return state.goodsList.reduce((n, p) => n + p.prop.count, 0)
    },
    // 计算运费险
    getInsurance: (state) => () => {
      return state.goodsList.reduce((n, p) => n + p.insurance, 0)
    },
    // 计算运费
    getFreight: (state) => () => {
      return state.goodsList.reduce((n, p) => n + p.freight, 0)
    },
    // 计算最终价格
    getFinalPrice: (state) => () => {
      return state.goodsList.reduce(
        (n, p) => n + p.price * p.prop.count + p.freight + p.insurance,
        0
      )
    },
  },
}
