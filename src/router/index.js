import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Bak from '../views/bak.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bak',
      name: 'bak',
      component: Bak
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404.vue')
    }
  ]
})

export default router
