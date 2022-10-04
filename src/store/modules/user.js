// 用户模块
export default {
  namespaced: true,

  state() {
    return {
      // 用户信息
      profile: {
        id: "",
        avatar: "",
        nickname: "",
        account: "",
        mobile: "",
        token: "",
      },
    }
  },

  mutations: {
    // 修改用户信息
    setUserToken(state, payload) {
      state.profile.token = payload
    },
  },

  getters: {
    userToken: (state) => () => {
      return state.profile.token
    },
  },
}
