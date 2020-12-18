import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import films_router from '@/router/routes/films'
import cinema_router from '@/router/routes/cinema'
import mine_router from '@/router/routes/mine'

const routes = [
  films_router,
  cinema_router,
  mine_router,
  {
    path: '/',
    redirect: '/films'
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router