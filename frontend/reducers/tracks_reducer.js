import { RECEIVE_SINGLE_PLAYLIST } from '../actions/playlist_actions';

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SINGLE_PLAYLIST:
      return Object.assign({}, state, action.payload.tracks);
    default:
      return state;
  }
};

export default tracksReducer;