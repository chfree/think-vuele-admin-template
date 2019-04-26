import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/page/login'
import layoutMain from '@/views/page/layout/main'
import main from '@/views/page/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'main',
      component: layoutMain,
      children: [
        {
          path: 'index',
          name: 'mainIndex',
          component: main
        }
      ]
    }
  ]
})
