import { connect } from 'react-redux';
import UserIndexItem from './user_index_item';
import { selectTracksFromPlaylist } from '../../reducers/selectors'; 
import { receiveIsPlaying } from '../../actions/audio_actions';

const mapStateToProps = (state, { playlist }) => {
  const tracks = selectTracksFromPlaylist(state, playlist);

  return ({
    playlist,
    tracks,
    isPlaying: state.ui.isPlaying 
  });
}

const mapDispatchToProps = dispatch => ({
  receiveIsPlaying: isPlaying => dispatch(receiveIsPlaying(isPlaying))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserIndexItem);