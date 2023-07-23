import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

/**
 * Function to load views using lazy loading.
 * @param view
 */
const loadComponent = (view: string) => {
  return () => import(`../views/${view}.vue`);
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/results',
    name: 'results',
    component: loadComponent('ResultsView')
  },
  {
    path: '/:catchAll(.*)',
    name: 'error-page',
    component: loadComponent('ErrorPageView')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
