import API from '../../services/api/Endpoints';

const searchResultModule = {
  state: {
    albums: null,
    artists: null,
    playlists: null,
    tracks: null,
    error: null,
    searched: false
  },
  mutations: {
    SET_SEARCHED: state => {
      state.searched = true;
    },
    SET_SEARCH_RESULT: (state, payload) => {
      const { albums, artists, playlists, tracks } = payload;
      state.albums = albums;
      state.artists = artists;
      state.playlists = playlists;
      state.tracks = tracks;
    },
    ERROR_SEARCH_RESULT: (state, payload) => {
      state.error = payload;
    }
  },
  actions: {
    TRY_SEARCH: async ({ commit }, query) => {
      commit('SET_SEARCHED');
      try {
        const response = await API.searchSpotify(query);
        commit('SET_SEARCH_RESULT', response.data);
      } catch (e) {
        commit('ERROR_SEARCH_RESULT', e);
      }
    }
  },
  getters: {
    isSearched: state => {
      return state.searched;
    },
    getAllResults: state => {
      return {
        albums: state.albums,
        artists: state.artists,
        playlists: state.playlists,
        tracks: state.tracks
      };
    },
    getSingleResult: state => name => {
      console.log(state[name]);
      return state[name];
    }
  }
};

export default searchResultModule;
