export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_SINGLE_ALBUM = 'RECEIVE_SINGLE_ALBUM';
import * as AlbumAPIUtil from '../util/albums_api_util'; 

export const receiveAllAlbums = albums => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
});

export const receiveSingleAlbum = album => ({
  type: RECEIVE_SINGLE_ALBUM,
  album
});

export const requestAllAlbums = () => dispatch => (
  AlbumAPIUtil.fetchAllAlbums()
    .then(albums => dispatch(receiveAllAlbums(albums))
  )
);

export const requestSingleAlbum = id => dispatch => (
  AlbumAPIUtil.fetchSingleAlbum(id)
    .then(album => dispatch(receiveSingleAlbum(album)) 
  )
);