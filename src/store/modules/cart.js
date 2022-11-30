export default {
  namespaced: true,
  state() {
    return {
      cartList: [],
    }
  },
  mutations: {
    // 添加购物车
    addCart(state, pd) {
      state.cartList.push(pd)
    },
    // 删除全部购物车
    clearList(state, pd) {
      state.cartList.splice(0)
    },
    // 删除单个商品
    deleteGoods(state, id) {
      let item = state.cartList.find((item) => item.id === id)
      state.cartList.splice(item, 1)
    },
    // 勾选单个商品
    selectGoods(state, pd) {
      let item = state.cartList.find((item) => item.id === pd.id)
      item.selected = pd.selected
    },
    // 全选商品
    selectAll(state, pd) {
      state.cartList.forEach((item) => {
        item.selected = pd
      })
    },
    // 修改单个商品件数
    setGoodsCount(state, pd) {
      let item = state.cartList.find((item) => item.id === pd.id)
      item.prop.count = pd.count
    },
  },
  actions: {},
  getters: {
    // 1. 返回购物车列表
    getCartList: (state) => () => {
      return state.cartList
    },
    // 2. 返回单个商品的价格
    getPrice: (state) => (id) => {
      let item = state.cartList.find((item) => item.id === id)
      return Math.ceil(item.prop.count * item.price).toFixed(2)
    },
    // 3. 返回选中商品的个数
    getSelectedCount: (state) => () => {
      return state.cartList.reduce((n, p) => n + p.selected, 0)
    },
    // 4. 是否全选
    isCheckAll: (state) => () => {
      return state.cartList.every((item) => item.selected === true)
    },
    // 5. 选中的总价格
    checkAllPrice: (state) => () => {
      let arr = state.cartList.filter((item) => item.selected == true)
      return arr.reduce(
        (n, p) => n + p.price * p.prop.count + p.freight + p.insurance,
        0
      )
    },
  },
}
