import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/components/index'),
      redirect: { name: 'homepage' },
      children: [
        {
          path: '/homepage',
          name: 'homepage',
          component: () => import('@/components/homepage')
        },
        {
          path: '/class',
          component: () => import('@/components/class')
        },
        {
          path: '/service',
          component: () => import('@/components/service')
        },
        {
          path: '/mine',
          component: () => import('@/components/mine')
        }
      ]
    }
  ]
})
