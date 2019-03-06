import Vue from 'vue'
import App from './App'
import router from './router'
import store from './Store/store'

//引入elementUI
import ElementUI from 'element-ui';
import { Loading } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import "animate.css"
// 引入公共样式
import "../src/assets/css/public.css";

Vue.use(ElementUI);
Vue.prototype.$store = store;
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log('to',to,'from',from,'next',next)
  var token = store.getters.gettoKen;
  console.log('token',token)
  if (token == '' || token == null) {
    //token为空的时候
    if(to.name == 'Login') {
      next()
    }else {
      next('/Login')
    }
  }else {
    if(token) {
      if(to.name == 'Login') {
        next('/')
      }
    }
    next();
  }
});

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})