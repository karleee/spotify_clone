import { connect } from 'react-redux';
import TrackDetail from './track_detail';
import { selectTracksFromPlaylist } from '../../reducers/selectors';

const mapStateToProps = (state, { playlistId }) => ({
  tracks: selectTracksFromPlaylist(state, state.entities.playlists[playlistId])
});
  
export default connect(mapStateToProps)(TrackDetail);   