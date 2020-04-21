import {connect} from 'react-redux';
import {requestAllPlaylists} from '../../actions/playlist_actions';
import {requestAllArtistPlaylists} from '../../actions/artist_playlist_actions';
import {requestAllTracks} from '../../actions/track_actions';
import {requestAllAlbums} from '../../actions/album_actions';
import {requestAllArtists} from '../../actions/artist_actions';
import {requestAllUsers} from '../../actions/user_actions';
import {selectPlaylistsFromType} from '../../reducers/selectors';
import HomeIndex from './home_index';
 
const mapStateToProps = state => {
  // Persisting values for page refresh
  // Local storage can only store string and values, no objects
  localStorage.setItem('playlists', JSON.stringify(state.entities.playlists));
  localStorage.setItem('artist_playlists', JSON.stringify(state.entities.artistPlaylists));
  localStorage.setItem('tracks', JSON.stringify(state.entities.tracks));
  localStorage.setItem('albums', JSON.stringify(state.entities.albums));
  localStorage.setItem('artists', JSON.stringify(state.entities.artists));
  localStorage.setItem('users', JSON.stringify(state.entities.users));

  return ({
    users: Object.values(state.entities.users),
    artists: Object.values(state.entities.artists),
    heavyRotation: selectPlaylistsFromType(state, 'heavyRotation'),
    artistPlaylists: state.entities.artistPlaylists
  })
};

const mapDispatchToProps = dispatch => ({
  requestAllPlaylists: () => dispatch(requestAllPlaylists()),
  requestAllArtistPlaylists: () => dispatch(requestAllArtistPlaylists()),
  requestAllTracks: () => dispatch(requestAllTracks()),
  requestAllAlbums: () => dispatch(requestAllAlbums()),
  requestAllArtists: () => dispatch(requestAllArtists()),
  requestAllUsers: () => dispatch(requestAllUsers()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndex);