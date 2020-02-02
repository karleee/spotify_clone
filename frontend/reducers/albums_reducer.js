import { RECEIVE_ALL_ALBUMS, RECEIVE_SINGLE_ALBUM } from "../actions/album_actions";

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_ALL_ALBUMS:
      return Object.assign({}, state, action.albums);
    case RECEIVE_SINGLE_ALBUM:
      return Object.assign({}, state, { [action.album.id]: action.album });
    default:
      return state;
  }
}

export default albumsReducer;