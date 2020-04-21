import { connect } from 'react-redux';
import { requestAllAlbums } from '../../actions/album_actions';

import AudioDetail from './audio_detail';

const mapStateToProps = state => {
  return ({
    title: state.audio.title,
    artist: state.audio.artist,
    album: state.entities.albums[state.audio.albumId]
  }); 
}

const mapDispatchToProps = dispatch => ({
  requestAllAlbums: () => dispatch(requestAllAlbums())
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioDetail);
