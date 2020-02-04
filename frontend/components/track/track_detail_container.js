import { connect } from 'react-redux';
import TrackDetail from './track_detail';
import { selectTracksFromPlaylist } from '../../reducers/selectors';
import { requestAllTracks, receiveCurrentTrack, receiveNextTrack } from '../../actions/track_actions';
import { receiveTitle, receiveArtist, receivePhotoUrl, receivePlaylistId, receiveAlbumId } from '../../actions/audio_actions';

const mapStateToProps = (state, { playlist, tracks }) => ({
  tracks,
  photoUrl: playlist.photo_url,
  playlistId: playlist.id
});

const mapDispatchToProps = dispatch => ({ 
  receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track)),
  receiveNextTrack: track => dispatch(receiveNextTrack(track)),
  receiveTitle: title => dispatch(receiveTitle(title)),
  receiveArtist: artist => dispatch(receiveArtist(artist)),
  receivePhotoUrl: photoUrl => dispatch(receivePhotoUrl(photoUrl)),
  receivePlaylistId: playlistId => dispatch(receivePlaylistId(playlistId)), 
  // receiveAlbumId: albumId => dispatch(receiveAlbumId(albumId))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(TrackDetail);    