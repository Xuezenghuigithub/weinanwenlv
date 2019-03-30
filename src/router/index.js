import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Introduction from '@/components/resources/Introduction'
import Pictures from '@/components/resources/Pictures'
import Comment from '@/components/resources/Comment'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
