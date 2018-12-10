import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home.vue';
import Callback from '../views/Callback.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback
    }
  ]
});
