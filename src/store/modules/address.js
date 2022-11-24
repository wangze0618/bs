export default {
  namespaced: true,

  state() {
    return {
      addressList: [],
    }
  },
  mutations: {
    // 新增地址
    addAddress(state, playload) {
      // 深拷贝
      let obj = JSON.parse(JSON.stringify(playload))
      // 添加id bug
      obj.id = this.state.address.addressList.length
      state.addressList.push(obj)
    },
    // 删除地址
    delAddress(state, playload) {
      // 这里因为id有bug
      let delobj = state.addressList.find((item) => item.id === playload)
      state.addressList.splice(playload, 1)
    },
  },

  getters: {
    addressList: (state) => () => state.addressList,
    addressListLength: (state) => () => state.addressList.length,
  },
}
