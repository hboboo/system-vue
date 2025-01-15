import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'
import { createWebHistory, createRouter } from 'vue-router'


const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/pages/login.vue')
  },
  {
    name: 'register',
    path: '/register',
    component: () => import('@/views/pages/register.vue')
  },
  {
    path: '/home',
    component: () => import('@/views/home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router