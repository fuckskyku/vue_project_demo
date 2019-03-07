import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);
//数据
const state = {
  APPid: 'wx875dcc460cfe82ae',     //
  AppSecret: '88d8aa84e75f5976daf009191eece704',     //
  code: '',  //登录凭证
  token: '880A367FF38E46DF826C517294D8A386',
  family: { studentId: '', parentId: '', studentName: '' /*addisFull: ''*/ },
}

//获取数据（或者说是自定义过滤计算）
const getters = {
  getAPPid: state => state.APPid,
  getAppSecret: state => state.AppSecret,
  getCode: state => state.code,
  gettoKen: state => state.token,
  getFamily: state => state.family
}

//提交方法
const mutations = {
  //清空方法
  clearStore(state) {
    if (state) {
      state.code = ''
      state.token = ''
    }
  },
  code(state, value) {
    state.code = value;
  },
  token(state, value) {
    state.token = value;
  },
  family(state, obj) {
    obj.forEach((item) => {
      Vue.set(state.family, item.key, item.value);
    })
  },

};

//提交拦截
const actions = {
  //清空方法
  setClearStore(state) {
    state.commit('clearStore');
  },
  setAPPid(state, value) {
    state.commit('APPid', value);
  },
  setAppSecret(state, value) {
    state.commit('AppSecret', value);
  },
  setToKen(state, value) {
    state.commit('token', value)
  },
  setFamily(state, obj) {
    state.commit("family", obj);
  },

}

export default new Vuex.Store({
  state,
  getters,
  actions,
  plugins: [createPersistedState({
    storage: {
      getItem: key => wx.getStorageSync(key),
      setItem: (key, value) => window.sessionStorage,
      removeItem: key => { }
    }
  })],
  mutations,
  // plugins: [vuexLocal.plugin]
})

// export default Store
