import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login.vue'
import Home from '../views/homepage.vue'
import adminHome from '../components/admin/home.vue'
import viewMenu from '../components/admin/viewMenu.vue'
import viewOrder from '../components/admin/viewOrder.vue'

import userHome from '../components/user/home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'login'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/adminhome',
      name: 'adminhome',
      component: adminHome
    },
    {
      path: '/viewmenu',
      name: 'viewmenu',
      component: viewMenu
    },
    {
      path: '/vieworder',
      name: 'vieworder',
      component: viewOrder
    },
    {
      path: '/userhome',
      name: 'userhome',
      component: userHome
    }
  ]
})
