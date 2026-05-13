import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/launchpad',
    name: 'Launchpad',
    component: () => import('@/views/Launchpad.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/Settings.vue')
  },
  {
    path: '/app/:id',
    name: 'MicroApp',
    component: () => import('@/views/MicroApp.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
