import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from '@/components/views'
import Home from '@/components/pages/home'
import Cart from '@/components/pages/cart'
import Mine from '@/components/pages/mine'
import Order from '@/components/pages/order'
import List from '@/components/pages/list'

import Login from '@/components/views/login'
import Register from '@/components/views/register'
import Sort from '@/components/views/sort'
import Info from '@/components/views/info'
export default new Router({
  routes: [
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: '/home',
          component: Home
        },
        {
          path: '/cart',
          component: Cart
        },
        {
          path: '/mine',
          component: Mine
        },
        {
          path: '/order',
          component: Order
        },
        {
          path: '/list',
          component: List
        },
        {
          path: '',
          redirect: '/home'
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/sort',
      component: Sort
    },
    {
      path: '/info',
      component: Info
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
