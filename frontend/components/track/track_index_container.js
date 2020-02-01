import { connect } from 'react-redux';
import TrackIndex from './track_index';
import { selectTracksFromPlaylist } from '../../reducers/selectors';

const mapStateToProps = (state, { playlist }) => ({
  tracks: selectTracksFromPlaylist(state, playlist)
});

export default connect(mapStateToProps)(TrackIndex);