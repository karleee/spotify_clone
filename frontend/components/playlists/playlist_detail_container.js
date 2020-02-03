import { connect } from 'react-redux';
import { requestSinglePlaylist } from '../../actions/playlist_actions';
import { requestAllTracks } from '../../actions/track_actions';
import PlaylistDetail from './playlist_detail';

const mapStateToProps = (state, ownProps) => ({ 
  playlist: state.entities.playlists[ownProps.match.params.playlistId]
});

const mapDispatchToProps = dispatch => ({
  requestSinglePlaylist: id => dispatch(requestSinglePlaylist(id)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDetail);