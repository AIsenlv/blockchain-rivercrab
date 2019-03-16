// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'iview'

import 'iview/dist/styles/iview.css'
import store from '@/store/store.js'//引入store

Vue.use(iview);

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  document.documentElement.scrollTop = 0;//跳转后滚动条回到顶部
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
