import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home.vue';
import Callback from '../views/Callback.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true,
      meta: {
        title: 'Home - Vue spotify'
      }
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback,
      meta: {
        title: 'Callback - Vue spotify'
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
