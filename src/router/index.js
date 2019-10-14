import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'defaultPage',
    component: defaultPage,
    redirect: '/index',
    children: [{
      path: 's/:name',
      name: 'goods',
      component: () => import('@/page/goodList')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/page/index.vue')
    },
    {
      path: '/changeCity',
      name: 'changeCity',
      component: () => import('@/page/changeCity.vue')
    }
    ]
  },
  {
    path: '/blank',
    name: 'blank',
    component: () => import('@/layout/blank'),
    redirect: '/login',
    children: [{
      path: 'login',
      name: 'login',
      component: () => import('@/page/login')
    }, {
      path: 'register',
      name: 'register',
      component: () => import('@/page/register')
    }]
  }
  ]
})
