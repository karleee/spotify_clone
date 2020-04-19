import {RECEIVE_ALL_ARTIST_PLAYLISTS} from '../actions/artist_playlist_actions';

const artistPlaylistsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_ARTIST_PLAYLISTS:
      return Object.assign({}, state, action.artistPlaylists);
    default:
      return state;
  }
};

export default artistPlaylistsReducer;