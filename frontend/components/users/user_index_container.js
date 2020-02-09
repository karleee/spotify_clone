import { connect } from 'react-redux';
import UserIndex from './user_index';
import { selectPlaylistsFromUser } from '../../reducers/selectors';
import { requestSinglePlaylist } from '../../actions/playlist_actions';
import { receiveCurrentTrack, receiveNextTrack } from '../../actions/track_actions';
import { receiveTitle, receiveArtist, receivePlaylistId, receiveAlbumId, receivePhotoUrl } from '../../actions/audio_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId];

  return ({ 
    user,
    playlists: selectPlaylistsFromUser(state, user) 
  });
}

const mapDispatchToProps = dispatch => ({
  requestSinglePlaylist: id => dispatch(requestSinglePlaylist(id)),
  receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track)),
  receiveNextTrack: track => dispatch(receiveNextTrack(track)),
  receiveTitle: title => dispatch(receiveTitle(title)),
  receiveArtist: artist => dispatch(receiveArtist(artist)),
  receivePlaylistId: playlistId => dispatch(receivePlaylistId(playlistId)),
  receiveAlbumId: albumId => dispatch(receiveAlbumId(albumId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);