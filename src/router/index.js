import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import AddItems from '../components/AddItems'
import SelectItems from '../components/SelectItems'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
