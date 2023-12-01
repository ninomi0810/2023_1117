import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/VtextAndVmodel',
      name: 'VtextAndVmodel',
      // route level code-splitting
      // this generates a separate chunk (VtextAndVmodel.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VtextAndVmodel.vue')
    },
    {
      path: '/Vfor',
      name: 'Vfor',
      component: () => import('../views/Vfor.vue')
    },
    {
      path: '/Von',
      name: 'Von',
      component: () => import('../views/Von.vue')
    },
    {
    path: '/Vbind',
    name: 'Vbind',
    component: () => import('../views/Vbind.vue')
  },
    {
    path: '/VifAndVshow',
    name: 'VifAndVshow',
    component: () => import('../views/VifAndVshow.vue')
  },
    {
    path: '/WatchAndComputed',
    name: 'WatchAndComputed',
    component: () => import('../views/WatchAndComputed.vue')
  },
    {
    path: '/storage',
    name: 'storage',
    component: () => import('../views/storage.vue')
  },
    {
    path: '/Props',
    name: 'Props',
    component: () => import('../views/Props.vue')
  },
    {
    path: '/Emit',
    name: 'Emit',
    component: () => import('../views/Emit.vue')
  },
  
  ]
})

export default router
