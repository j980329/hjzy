import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'login',
    component: () => import('../views/admin/login.vue')
  },
  {
    path: '/zhu',
    name: 'zhu',
    component: () => import('../views/admin/zhu.vue'),
    children:[
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/admin/home.vue')
      },
      {
        path: '/spgl',
        name: 'spgl',
        component: () => import('../views/admin/spgl.vue')
      },
    ]
  },


]

const router = new VueRouter({
  routes
})

export default router
