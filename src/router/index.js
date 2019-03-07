
import Vue from 'vue'
import Router from 'vue-router'
//引入路由组件
import Login from '@/components/pages/login/Login'
import Register from '@/components/pages/register/Register'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/',
      redirect: '/index',
      name: 'Index',
      component: Index,
      children: [
        //首页路由
        { path: '/index', name: "Home", component: (resolve) => require(['@/components/pages/home/Home'], resolve), meta: { title: "首页" } },
        { path: '/Approval', name: "Approval", component: (resolve) => require(['@/components/pages/approval/Approval'], resolve), meta: { title: "审批" } },
        { path: '/ApprovalVoting', name: "ApprovalVoting", component: (resolve) => require(['@/components/pages/approval/ApprovalVoting'], resolve), meta: { title: "审批成功" } },
      ]
    }
  ]
})
