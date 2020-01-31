import * as PlaylistAPIUtil from '../util/playlists_api_util';

export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const RECEIVE_SINGLE_PLAYLIST = 'RECEIVE_SINGLE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';

export const receiveAllPlaylists = playlists => ({
  type: RECEIVE_ALL_PLAYLISTS,
  playlists
});

export const receiveSinglePlaylist = playlist => ({
  type: RECEIVE_SINGLE_PLAYLIST,
  playlist
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
    .then(playlist => dispatch(receiveSinglePlaylist(playlist)))
);

export const deletePlaylist = id => dispatch => (
  PlaylistAPIUtil.deletePlaylist(id) 
    .then(() => dispatch(removePlaylist(id)))
);