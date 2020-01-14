import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from '../views/login.vue'
import SecureComponent from '../views/secure.vue'
import register from '../views/register.vue'
import AddItems from '..//components/AddItems'
import SelectItems from '../components/SelectItems'
import selectMenus from '../components/selectMenus'

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
      component: LoginComponent
    },
    {
      path: '/secure',
      name: 'secure',
      component: SecureComponent
    },
    {
      path: '/register',
      name: 'register',
      component: register
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
