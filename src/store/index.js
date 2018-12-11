import Vue from 'vue';
import Vuex from 'vuex';

import userInfoModule from './modules/userInfo';
import searchResultModule from './modules/searchResult';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    userInfo: userInfoModule,
    searchResult: searchResultModule
  }
});
