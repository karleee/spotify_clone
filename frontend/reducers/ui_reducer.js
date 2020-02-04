import { RECEIVE_CURRENT_TRACK, RECEIVE_NEXT_TRACK } from '../actions/track_actions';

const _initialState = {
  currentTrack: null,
  nextTrack: null
}

const uiReducer = (state = _initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_TRACK:
      return Object.assign({}, state, { currentTrack: action.track }); 
    case RECEIVE_NEXT_TRACK:
      return Object.assign({}, state, { currentTrack: state.currentTrack, nextTrack: action.track });
    default:
      return state;
  }
}

export default uiReducer;