import { connect } from 'react-redux';
import { requestAllPlaylists } from '../../actions/playlist_actions';
import { selectPlaylistsFromType } from '../../reducers/selectors';
import HeavyRotationIndex from './heavy_rotation_index';
 
const mapStateToProps = state => ({
  playlists: selectPlaylistsFromType(state, 'heavyRotation')
});

const mapDispatchToProps = dispatch => ({
  requestAllPlaylists: () => dispatch(requestAllPlaylists())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeavyRotationIndex);