import * as ArtistAPIUtil from '../util/artists_api_util';

export const RECEIVE_ALL_ARTISTS = 'RECEIVE_ALL_ARTISTS';
export const RECEIVE_SINGLE_ARTIST= 'RECEIVE_SINGLE_ARTIST';

export const receiveAllArtists = artists => ({
  type: RECEIVE_ALL_ARTISTS,
  artists
});

export const receiveSingleArtist = artist => ({
  type: RECEIVE_SINGLE_ARTIST,
  artist
}); 

export const requestAllArtists = () => dispatch => (
  ArtistAPIUtil.fetchAllArtists().
    then(artists => dispatch(receiveAllArtists(artists)))
);

export const requestSingleArtist = id => dispatch => (
  ArtistAPIUtil.fetchSingleArtist(id)
    .then(artist => dispatch(receiveSingleArtist(artist)))
);