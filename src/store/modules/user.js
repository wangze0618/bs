// 用户模块
export default {
  namespaced: true,

  state() {
    return {
      // 用户信息
      profile: {
        id: "",
        username: "",
        nickname: "",
        email: "",
        user_pic: "", // 用户头像
        mobile: "",
        introduce: "",
      },
      token: null,
    }
  },

  mutations: {
    // 修改用户登录token
    setUserToken(state, payload) {
      state.token = payload
    },

    // 设置基本信息
    setUserProfile(state, payload) {
      state.profile.id = payload.id
      state.profile.username = payload.username
      state.profile.nickname = payload.nickname
      state.profile.email = payload.email
      state.profile.user_pic = payload.user_pic
      state.profile.mobile = payload.mobile
      state.profile.introduce = payload.introduce
    },
  },

  getters: {
    userToken: (state) => () => {
      return state.token
    },
  },
}
