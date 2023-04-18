import { nextTick } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home page'
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About this project'
      },
    },
    {
      path: '/topic',
      name: 'topic',
      component: () => import('../views/TopicView.vue'),
      meta: {
        title: 'Topic'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('../views/NotFoundView.vue'),
      meta: {
        title: 'Page Not Found'
      },
    }
  ]
});

const DEFAULT_TITLE = 'NewsStock';
router.afterEach((to, from) => {
  nextTick(() => {
    document.title = to.meta.title as string || DEFAULT_TITLE;
  });
});

export default router