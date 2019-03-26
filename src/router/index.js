import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import detail from '@/components/login/detail'
import passwd from '@/components/login/passwd'
import preview from '@/components/preview/preview'
import home from '@/components/home/home'
import production from '@/components/production/production'
import productionhistory from '@/components/production/productionhistory'
import cultivation from '@/components/culteiva/cultivation'
import orderform from '@/components/modelcommon/orderform'
import catchs from '@/components/culteiva/catchs'
import sourcecode from '@/components/source/sourcecode'
import sourcemanag from '@/components/source/sourcemanag'
import blockchain from '@/components/source/blockchain'
import coldchain from '@/components/source/coldchain'
import detection from  '@/components/modelcommon/detection'
import market from  '@/components/modelcommon/market'
import aftersale from  '@/components/modelcommon/aftersale'
import client from  '@/components/modelcommon/client'
import breedingbase from  '@/components/basicmessage/breedingbase'
import inClassification from  '@/components/basicmessage/inClassification'
import productClassify from  '@/components/basicmessage/productClassify'
import birthCategory from  '@/components/basicmessage/birthCategory'
import breedCategory from  '@/components/basicmessage/breedCategory'


import product from  '@/components/basicmessage/product'
import ontheproduct from  '@/components/basicmessage/ontheproduct'
import eInformation from  '@/components/basicmessage/eInformation'
import usermeages from  '@/components/systemmanagement/usermeages'
import role from  '@/components/systemmanagement/role'
import pests from  '@/components/systemmanagement/pests'
import loginlog from  '@/components/systemmanagement/loginlog'
import operationlog from  '@/components/systemmanagement/operationlog'
import sensor from  '@/components/systemmanagement/sensor'
import managers from  '@/components/systemmanagement/managers'
import dictionary from  '@/components/systemmanagement/dictionary'

import picturevideo from  '@/components/internetOfThings/picturevideo'
import historyDataIndex from  '@/components/internetOfThings/historyDataIndex'
import timemonitor from '@/components/internetOfThings/timemonitor'

import statisticsproduction from  '@/components/statistics/statisticsproduction'
import statisticemarket from  '@/components/statistics/statisticemarket'




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
      path:'/detail',
      name:'detail',
      component:detail
    },
    {
      path:'/passwd',
      name:'passwd',
      component:passwd
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
        },
        {
          path:'/culteiva/cultivation',
          name: 'cultivation',
          component: cultivation
        },
        {
          path:'/modelcommons/orderform',
          name: 'orderform',
          component: orderform
        },
        {
          path:'/culteiva/catchs',
          name: 'catchs',
          component: catchs
        },
        {
          path:'/source/sourcecode',
          name: 'sourcecode',
          component: sourcecode
        },
        {
          path:'/source/coldchain',
          name: 'coldchain',
          component: coldchain
        },
        {
          path:'/source/sourcemanag',
          name: 'sourcemanag',
          component: sourcemanag
        },
        {
          path:'/source/blockchain',
          name: 'blockchain',
          component: blockchain
        },
        {
          path:'/internetOfThings/detection',
          name: 'detection',
          component: detection
        },
        {
          path:'/modelcommons/market',
          name: 'market',
          component: market
        },
        {
          path:'/modelcommons/aftersale',
          name: 'aftersale',
          component: aftersale
        },
        {
          path:'/modelcommons/client',
          name: 'client',
          component: client
        },
        {
          path:'/basicmessage/breedingbase',
          name: 'breedingbase',
          component: breedingbase
        },
        {
          path:'/basicmessage/product',
          name: 'product',
          component: product
        },
        {
          path:'/basicmessage/ontheproduct',
          name: 'ontheproduct',
          component: ontheproduct
        },
        {
          path:'/basicmessage/eInformation',
          name: 'eInformation',
          component: eInformation
        },
        {
          path:'/basicmessage/inClassification',
          name: 'inClassification',
          component: inClassification
        },
        {
          path:'/basicmessage/productClassify',
          name: 'productClassify',
          component: productClassify
        },
        {
          path:'/basicmessage/birthCategory',
          name: 'birthCategory',
          component: birthCategory
        },
        {
          path:'/basicmessage/breedCategory',
          name: 'breedCategory',
          component: breedCategory
        },
        {
          path:'/systemmanagement/usermeages',
          name: 'usermeages',
          component: usermeages
        },
        {
          path:'/systemmanagement/role',
          name: 'role',
          component: role
        },
        {
          path:'/systemmanagement/pests',
          name: 'pests',
          component: pests
        },
        {
          path:'/systemmanagement/loginlog',
          name: 'loginlog',
          component: loginlog
        },
        {
          path:'/systemmanagement/operationlog',
          name: 'operationlog',
          component: operationlog
        },
        {
          path:'/systemmanagement/sensor',
          name: 'sensor',
          component: sensor
        },
        {
          path:'/systemmanagement/managers',
          name: 'managers',
          component: managers
        },
        {
          path:'/systemmanagement/dictionary',
          name: 'dictionary',
          component: dictionary
        },
        {
          path:'/internetOfThings/picturevideo',
          name: 'picturevideo',
          component: picturevideo
        },
        {
          path:'/internetOfThings/historyDataIndex',
          name: 'historyDataIndex',
          component: historyDataIndex
        },
        {
          path:'/internetOfThings/timemonitor',
          name: 'timemonitor',
          component: timemonitor
        },
        {
          path:'/statistics/statisticsproduction',
          name: 'statisticsproduction',
          component: statisticsproduction
        },
        {
          path:'/statistics/statisticemarket',
          name: 'statisticemarket',
          component: statisticemarket
        },
        
      ],
      redirect: '/home'
    }
  ]
})