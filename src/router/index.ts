import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: '/',
        name: 'AddArticle',
        component: () => import('@/component/AddArticle.vue')
      },
      {
        path: '/allArticle',
        name: 'ShowNotes',
        component: () => import('@/component/ShowNotes.vue')
      },
      {
        path: '/searchArticle',
        name: 'ShowSearchRet',
        component: () => import('@/component/ShowSearchRet.vue')
      },
      {
        path: '/favorite',
        name: 'ShowFavorite',
        component: () => import('@/component/ShowFavorite.vue')
      },
      {
        path: '/recycle',
        name: 'ShowRecycle',
        component: () => import('@/component/ShowRecycle.vue')
      },
      {
        path: '/tools',
        name: 'ShowTools',
        component: () => import('@/component/ShowTools.vue')
      },
      {
        path: '/canvas',
        name: 'Canvas',
        component: () => import('@/views/Canvas.vue')
      },
      {
        path: '/info',
        name: 'Info',
        component: () => import('@/component/ShowInfo.vue')
      },
      {
        path: '/cat/:articleId',
        name: 'CatArticle',
        component: () => import('@/component/CatArticle.vue')
      },
      {
        path: '/success/:articleId',
        name: 'SuccessPublish',
        component: () => import('@/component/SuccessPublish.vue')
      },
      {
        path: '/fail',
        name: 'FailPublish',
        component: () => import('@/component/FailPublish.vue')
      }
    ]
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
    path: '/forget',
    name: 'Forget',
    component: () => import('@/views/Forget.vue')
  },
  {
    path: '/api/test',
    name: 'Test',
    component: () => import('@/component/Test.vue')
  }
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
