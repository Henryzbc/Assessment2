const user = {
  state: {
    token: '',
    roles: null,
    menu: '12',
    webSocketMsg: ''
  },

  mutations: {
    SET_MENU: (state, menu) => {
      state.menu = menu
      setStore({ name: 'menu', content: state.menu })
    },
    // 存储websocket推送的消息
    SET_WS_MSG: (state, msg) => {
      state.webSocketMsg = msg
    }
  },
  actions: {
    // 登录
  }
}

export default user
