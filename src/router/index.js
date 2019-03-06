
import Vue from 'vue'
import Router from 'vue-router'
//引入路由组件
import Login from '@/components/pages/login/Login'
import Home from '@/components/pages/home/Home'

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
        path: '/',
        redirect: '/index',
        name: 'Home',
        component: Home,
        children: [
          //首页路由
          { path: '/index', name: "index", component: (resolve) => require(['@/components/pages/home/Home'], resolve), meta: { title: "首页" } },
          { path: '/approval', name: "approval", component: (resolve) => require(['@/components/pages/approval/Approval'], resolve), meta: { title: "审批" } },         
          { path: '/approvalVoting', name: "approvalVoting", component: (resolve) => require(['@/components/pages/approval/ApprovalVoting'], resolve), meta: { title: "审批成功" } },         
        ]
      }
    ]
  })
  