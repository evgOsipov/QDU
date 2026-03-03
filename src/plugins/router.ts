import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/LoginView.vue'),
    meta: { layout: 'auth', requiresAuth: false },
  },
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/DashboardView.vue'),
    meta: { layout: 'default', requiresAuth: true },
    redirect: { name: 'analytics-main' },
    children: [
      {
        path: 'analytics/main',
        name: 'analytics-main',
        component: () => import('@/views/analytics/AnalyticsMainView.vue'),
      },
      {
        path: 'analytics/faculty',
        name: 'analytics-faculty',
        component: () => import('@/views/analytics/AnalyticsPlaceholderView.vue'),
      },
      {
        path: 'analytics/directions',
        name: 'analytics-directions',
        component: () => import('@/views/analytics/AnalyticsPlaceholderView.vue'),
      },
      {
        path: 'analytics/group',
        name: 'analytics-group',
        component: () => import('@/views/analytics/AnalyticsPlaceholderView.vue'),
      },
      {
        path: 'analytics/subjects',
        name: 'analytics-subjects',
        component: () => import('@/views/analytics/AnalyticsPlaceholderView.vue'),
      },
      {
        path: 'analytics/users',
        name: 'analytics-users',
        component: () => import('@/views/analytics/AnalyticsPlaceholderView.vue'),
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore()
  const isAuthenticated = authStore.isAuthenticated

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' })
  } else if (to.name === 'login' && isAuthenticated) {
    next({ name: 'dashboard' })
  } else {
    next()
  }
})
