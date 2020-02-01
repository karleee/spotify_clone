import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import playlistsReducer from './playlists_reducer';
import artistsReducer from './artists_reducer';
import tracksReducer from './tracks_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  playlists: playlistsReducer,
  artists: artistsReducer,
  tracks: tracksReducer
});

export default entitiesReducer;