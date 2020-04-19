import * as ArtistPlaylistAPIUtil from '../util/artist_playlists_api_util';

export const RECEIVE_ALL_ARTIST_PLAYLISTS = 'RECEIVE_ALL_ARTISTS_PLAYLISTS';

export const receiveAllArtistPlaylists = artistPlaylists => ({
  type: RECEIVE_ALL_ARTIST_PLAYLISTS,
  artistPlaylists
});

export const requestAllArtistPlaylists = () => dispatch => (
  ArtistPlaylistAPIUtil.fetchAllArtistPlaylists().
    then(artistPlaylists => dispatch(receiveAllArtistPlaylists(artistPlaylists)))
); 