import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import cookies from 'js-cookies'
Vue.config.productionTip = false


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
import qs from 'qs'
Vue.use(qs)
axios.defaults.withCredentials = true
axios.defaults.baseURL = "http://admintest.happymmall.com"
Vue.prototype.$axios = axios

// axios.interceptors.request.use(config => {
//   // console.log(config)
//   config.headers['名子']=cookies.get('获取的cookie值 ')
//   let token = 'Bearer '+sessionStorage.getItem('ht')
//   config.headers[`Authorization`] = token
//   // 在最后必须 return config

//   return config
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
