import { RECEIVE_ALL_ARTISTS, RECEIVE_SINGLE_ARTIST } from "../actions/artist_actions";

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_ARTISTS: 
      return Object.assign({}, state, action.artists);
    case RECEIVE_SINGLE_ARTIST:
      return Object.assign({}, state, {[action.artist.id]: action.artist});
    default:
      return state;
  }
}

export default artistsReducer;