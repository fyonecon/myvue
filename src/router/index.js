import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

/*
* 引入公共js
* */
import {all} from '../assets/js/all.js'

/*
* 注册模块页面路由
* */
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/pages/home/home'
import Test from '@/components/pages/test/test'

/*
* 注册url访问路由
* http://localhost:8081/#/index
* */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index', // url访问地址
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },

  ]
})
