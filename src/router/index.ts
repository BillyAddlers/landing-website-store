import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
    {
      path: '/products/featuring',
      name: 'FeaturingMore',
      component: () => import('../views/FeaturingMore.vue')
    }
];

const router = new VueRouter({
  routes
})

export default router
