import { RECEIVE_ALL_TRACKS, RECEIVE_SINGLE_TRACK } from '../actions/track_actions';

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_TRACKS:
      return Object.assign({}, state, action.tracks);
    case RECEIVE_SINGLE_TRACK:
      return Object.assign({}, state, { [action.track.id]: action.track });
    default:
      return state;
  }
};

export default tracksReducer;