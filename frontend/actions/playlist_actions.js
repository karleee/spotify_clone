import * as PlaylistAPIUtil from '../util/playlists_api_util';

export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const RECEIVE_SINGLE_PLAYLIST = 'RECEIVE_SINGLE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';

export const receiveAllPlaylists = playlists => ({
  type: RECEIVE_ALL_PLAYLISTS,
  playlists
});

export const receiveSinglePlaylist = payload => ({ 
  type: RECEIVE_SINGLE_PLAYLIST,
  payload
});

export const removePlaylist = id => ({
  type: REMOVE_PLAYLIST,
  id
});

export const requestAllPlaylists = () => dispatch => (
  PlaylistAPIUtil.fetchAllPlaylists().
    then(playlists => dispatch(receiveAllPlaylists(playlists))) 
);

export const requestSinglePlaylist = id => dispatch => (
  PlaylistAPIUtil.fetchSinglePlaylist(id)
    .then(payload => dispatch(receiveSinglePlaylist(payload)))
);

export const deletePlaylist = id => dispatch => (
  PlaylistAPIUtil.deletePlaylist(id) 
    .then(() => dispatch(removePlaylist(id)))
);