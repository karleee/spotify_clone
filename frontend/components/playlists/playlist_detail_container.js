import { connect } from 'react-redux';
import { requestSinglePlaylist } from '../../actions/playlist_actions';
import { requestAllTracks } from '../../actions/track_actions';
import { receivePlaylistId } from '../../actions/audio_actions';
import { selectTracksFromPlaylist } from '../../reducers/selectors';
import PlaylistDetail from './playlist_detail';

const mapStateToProps = (state, ownProps) => { 
  const playlist = state.entities.playlists[ownProps.match.params.playlistId]; 

  return ({
    playlist,
    tracks: selectTracksFromPlaylist(state, playlist),
  });
};

const mapDispatchToProps = dispatch => ({
  // requestSinglePlaylist: id => dispatch(requestSinglePlaylist(id)),
  // requestAllTracks: () => dispatch(requestAllTracks()),
  receivePlaylistId: playlistId => dispatch(receivePlaylistId(playlistId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDetail);