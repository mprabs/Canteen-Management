import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from '../views/login.vue'
import AdminPage from '../views/adminPage.vue'
import CanteenPage from '../views/canteenPage.vue'
import UserPage from '../views/userPage.vue'
import AddItems from '../components/AddItems'
import SelectItems from '../components/SelectItems'
import selectMenus from '../components/selectMenus'

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
      path: '/admin',
      name: 'admin',
      component: AdminPage
    },
    {
      path: '/canteen',
      name: 'canteen',
      component: CanteenPage
    },
    {
      path: '/user',
      name: 'user',
      component: UserPage
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
