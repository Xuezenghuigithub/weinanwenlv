import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import Home from '@/components/home/Home'
import Introduction from '@/components/resources/Introduction'
import Pictures from '@/components/resources/Pictures'
import Comment from '@/components/resources/Comment'
import Food from '@/components/service/Food'
import Hotel from '@/components/service/Hotel'
import Traffic from '@/components/service/Traffic'
import Scenic from '@/components/service/Scenic'
import Recreation from '@/components/service/Recreation'
import Shop from '@/components/service/Shop'
import Login from '@/components/login/Login'
import Register from '@/components/login/Register'
import Historical from '@/components/details/historical/Historical'
import Red from '@/components/details/red/Red'
import Huashan from '@/components/details/Huashan'
import Simaqian from '@/components/details/historical/components/Simaqian'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: Introduction
    },
    {
      path: '/pictures',
      name: 'pictures',
      component: Pictures
    },
    {
      path: '/comment',
      name: 'comment',
      component: Comment
    },
    {
      path: '/food',
      name: 'food',
      component: Food
    },
    {
      path: '/hotel',
      name: 'hotel',
      component: Hotel
    },
    {
      path: '/traffic',
      name: 'traffic',
      component: Traffic
    },
    {
      path: '/scenic',
      name: 'scenic',
      component: Scenic
    },
    {
      path: '/recreation',
      name: 'recreation',
      component: Recreation
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/historical',
      name: 'historical',
      component: Historical
    },
    {
      path: '/red',
      name: 'red',
      component: Red
    },
    {
      path: '/huashan',
      name: 'huashan',
      component: Huashan
    },
    {
      path: '/simaqian',
      name: 'simaqian',
      component: Simaqian
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
// 注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  // 获取store里面的token
  let token = store.state.token
  // 判断要去的路由有没有requiresAuth
  if (to.meta.requiresAuth) {
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将刚刚要去的路由path作为参数，方便登录成功后直接跳转到该路由
      })
    }
  } else {
    next()
  }
})
export default router
