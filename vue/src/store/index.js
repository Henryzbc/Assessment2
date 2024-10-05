import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)
export default new Vuex.Store({
  state: { // 状态
    count: 1,
    roles: null,
    userIp: '',
    menu: [],
    lastMenu: [],
    menuShowFlag: false,
  },
  mutations: {// 包含多个更新state函数的对象
    changeUserIp(state, msg){
      state.userIp = msg
    },
    changeMenu(state, msg){
      state.menu = msg
    },
    changeLastMenu(state, msg){
      state.lastMenu = msg
    },
    setMenuShowFlag(state, msg){
      console.log(state, msg)
      state.menuShowFlag = msg
    },
    newComponent(msg){
      return {
        aaa: '123'
      }
    }
  },
  getters:{// 包含多个getter计算属性函数的对象
    getMenuShowFlag: state=> state.menuShowFlag,
    webSocketMsg: state => state.user.webSocketMsg
  },
  actions: {// 包含多个队形事件回调函数的对象

  },
  // modules: {
  //   user
  // }
})
