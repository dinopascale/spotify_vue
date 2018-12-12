import axios from 'axios';
import { generateRandomString, getHashParams } from '../utils/OAuth';

const __baseurl = 'https://api.spotify.com/v1/';
const __stateKey = 'spotify_auth_state';
let __authToken = null;

export default {
  getAuthHref() {
    const client_id = process.env.VUE_APP_CLIENTID;
    const redirect_uri = process.env.VUE_APP_NAME
      ? `https://${process.env.VUE_APP_NAME}.herokuapp.com/callback`
      : 'http://localhost:8080/callback';

    const state = generateRandomString(16);

    localStorage.setItem(__stateKey, state);

    const scope =
      'user-read-private user-read-email user-read-currently-playing';

    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);
    url += '&show_dialog=true';

    return url;
  },

  async getUserInfo() {
    const params = getHashParams();

    const { access_token, state } = params;
    const storedState = localStorage.getItem(__stateKey);

    if (access_token && (state == null || state !== storedState)) {
      console.log('Error in auth');
    } else {
      localStorage.removeItem(__stateKey);
      if (access_token) {
        try {
          __authToken = access_token;
          return await axios.get(__baseurl + 'me', {
            headers: {
              Authorization: 'Bearer ' + access_token
            }
          });
        } catch (e) {
          console.log(e);
        }
      }
    }
  },

  async getTrack() {
    if (!__authToken) {
      return false;
    }

    const config = {
      headers: {
        Authorization: 'Bearer ' + __authToken
      }
    };

    return await axios.get(__baseurl + 'tracks/3n3Ppam7vgaVa1iaRUc9Lp', config);
  },

  async searchSpotify(q, types = 'album,track,artist,playlist') {
    if (!__authToken) {
      return false;
    }

    const config = {
      headers: {
        Authorization: 'Bearer ' + __authToken
      }
    };

    let url = __baseurl + 'search?';
    url += `q=${encodeURIComponent(q)}`;
    url += `&type=${encodeURIComponent(types)}`;
    url += `&limit=4`;

    try {
      return await axios.get(url, config);
    } catch (e) {
      return e;
    }
  }
};
