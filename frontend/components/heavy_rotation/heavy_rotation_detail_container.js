import { connect } from 'react-redux';
import { requestSinglePlaylist } from '../../actions/playlist_actions';
import HeavyRotationDetail from './heavy_rotation_detail';

const mapStateToProps = (state, ownParams) => ({
  playlist: state.entities.playlists[ownParams.match.params.playlistId]
});

const mapDispatchToProps = dispatch => ({
  requestSinglePlaylist: id => dispatch(requestSinglePlaylist(id)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(HeavyRotationDetail);