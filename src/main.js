import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import axios from './http/http'
Vue.prototype.$axios = axios


// //面包屑
// router.beforeEach((to, from, next) => {
//   console.log(to.meta.break)
//   store.commit('Break', to.meta.break)
//   next()
// })


Vue.config.productionTip = false





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')