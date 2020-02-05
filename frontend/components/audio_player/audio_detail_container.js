import { connect } from 'react-redux';
import AudioDetail from './audio_detail';

const mapStateToProps = (state, ownProps) => {
  return ({
    title: state.audio.title,
    artist: state.audio.artist,
    album: state.entities.albums[state.audio.albumId]
  });
}

export default connect(mapStateToProps)(AudioDetail);
