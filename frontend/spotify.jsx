import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import { selectTracksFromPlaylist } from './reducers/selectors';

// import * as SessionAPIUtil from './util/session_api_util';
// import { requestAllPlaylists } from './util/playlists_api_util';
// import { requestAllTracks } from './actions/playlist_actions';
 
document.addEventListener('DOMContentLoaded', () => {  
  let store;
  
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // window.login = SessionAPIUtil.login;
  // window.signup = SessionAPIUtil.signup;
  // window.logout = SessionAPIUtil.logout;
  // window.requestAllPlaylists = requestAllPlaylists;

  const root = document.getElementById('root');

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // window.selectTracksFromPlaylist = selectTracksFromPlaylist;

  ReactDOM.render(<Root store={store} />, root)
})