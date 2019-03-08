import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import preview from '@/components/preview/preview'
import home from '@/components/home/home'
import production from '@/components/production/production'
import productionhistory from '@/components/production/productionhistory'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/preview',
      name: 'preview',
      component: preview,
      children:[
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path:'/production',
          name: 'production',
          component: production
        },
        {
          path:'/production/productionhistory',
          name: 'productionhistory',
          component: productionhistory
        }
      ],
      redirect: '/home'
    }
  ]
})