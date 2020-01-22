import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from '../views/login.vue'
import AddItems from '../components/AddItems'
import SelectItems from '../components/SelectItems'
import selectMenus from '../components/selectMenus'
import Homepage from '../views/homepage.vue'

Vue.use(Router)

export default new Router({
  // mode: history,
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
      component: LoginComponent
    },
    {
      path: '/home',
      name: 'home',
      component: Homepage
    },
    {
      path: '/AddItems',
      name: 'AddItems',
      component: AddItems
    },
    {
      path: '/SelectItems',
      name: 'SelectItems',
      component: SelectItems
    },
    {
      path: '/selectMenus',
      name: 'selectMenus',
      component: selectMenus
    }
  ]
})
