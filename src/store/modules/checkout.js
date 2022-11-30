export default {
  namespaced: true,
  state() {
    return {
      goodsList: [],
    }
  },
  mutations: {
    // 从购物车添加商品列表
    setList(state, pd) {
      state.goodsList = pd
    },
    // 从详情页添加（单个）商品
    addList(state, pd) {
      state.goodsList.push(pd)
    },
  },
  getters: {
    getGoodsList: (state) => () => {
      return state.goodsList
    },
    // 计算价格
    getRealPrice: (state) => (id) => {
      let item = state.goodsList.find((item) => item.id === id)
      return item.prop.count * item.price
    },

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
