import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/Test.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/canvas',
    name: 'Canvas',
    component: () => import('@/views/Canvas.vue')
  },
  {
    path: '/api/test',
    name: 'Test',
    component: () => import('@/componemt/Test.vue')
  }
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
