import Vue from 'vue';
import Vuex from 'vuex';

import userInfoModule from './modules/userInfo';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    userInfo: userInfoModule
  }
});
