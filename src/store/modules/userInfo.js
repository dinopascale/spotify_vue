import API from '../../services/api/Endpoints';

const userInfoModule = {
  state: {
    info: {},
    error: null
  },
  mutations: {
    SET_USERINFO: (state, payload) => {
      state.info = payload;
      state.error = null;
    },
    ERROR_USERINFO: (state, payload) => {
      state.error = payload;
    }
  },
  actions: {
    GET_USERINFO: async ({ commit }) => {
      console.log('qui');
      try {
        const response = await API.getUserInfo();
        commit('SET_USERINFO', response.data);
      } catch (e) {
        commit('ERROR_USERINFO', e);
      }
    }
  },
  getters: {
    USERINFO(state) {
      return state.userInfo;
    }
  }
};

export default userInfoModule;
