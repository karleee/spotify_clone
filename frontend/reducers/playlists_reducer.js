import { RECEIVE_ALL_PLAYLISTS, RECEIVE_SINGLE_PLAYLIST, REMOVE_PLAYLIST } from "../actions/playlist_actions";

const playlistsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_PLAYLISTS:
      return action.playlists;
    case RECEIVE_SINGLE_PLAYLIST:
      return Object.assign({}, state, action.playlist);
    case REMOVE_PLAYLIST:
      let nextState = Object.assign({}, state);
      delete nextState[action.id];
      return nextState;
    default:
      return state;
  }
};

export default playlistsReducer;