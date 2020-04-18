import { connect } from 'react-redux';
import { receiveTitle } from '../../actions/audio_actions';
import SearchIndex from './search_index'; 

const mapStateToProps = state => {
  // Get the artists, albums, and tracks from localStorage in case of manual page refresh
  const artists = Object.values(JSON.parse(localStorage.getItem('artists')));
  const albums = Object.values(JSON.parse(localStorage.getItem('albums')));
  const tracks = Object.values(JSON.parse(localStorage.getItem('tracks')));
  const playlists = Object.values(JSON.parse(localStorage.getItem('playlists')));

  return ({
    values: [...artists, ...tracks, ...playlists, ...albums]
  });
};

const mapDispatchToProps = dispatch => ({
  receiveTitle: title => dispatch(receiveTitle(title)),
  receiveArtist: artist => dispatch(receiveArtist(artist))
});

 export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);  