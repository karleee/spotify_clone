import { 
  RECEIVE_VOLUME, 
  RECEIVE_TITLE, 
  RECEIVE_ARTIST, 
  RECEIVE_PHOTO_URL, 
  RECEIVE_PLAYLIST_ID, 
  RECEIVE_TRACK_PLAYING, 
  RECEIVE_CURRENT_TIME,
  RECEIVE_ALBUM_ID
} from "../actions/audio_actions";
// import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

// const _initialState = {
//   volume: 1
// }

const audioReducer = (state = { volume: 1 }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VOLUME:
      return Object.assign({}, state, { volume: action.volume });
    case RECEIVE_TITLE:
      return Object.assign({}, state, { title: action.title }); 
    case RECEIVE_ARTIST:
      return Object.assign({}, state, { artist: action.artist });
    case RECEIVE_PHOTO_URL:
      return Object.assign({}, state, { photo_url: action.photoUrl });
    case RECEIVE_PLAYLIST_ID:
      return Object.assign({}, state, { playlist_id: action.playlistId });  
    case RECEIVE_ALBUM_ID:
      return Object.assign({}, state, { albumId: action.albumId }); 
    case RECEIVE_TRACK_PLAYING:
      return Object.assign({}, state, { trackPlaying: action.track });
    case RECEIVE_CURRENT_TIME:
      return Object.assign({}, state, { currentTime: action.time });
    // case LOGOUT_CURRENT_USER:
    //   return _initialState;
    default:
      return state;
  }
}

export default audioReducer;