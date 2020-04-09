import { connect } from 'react-redux';
import TrackDetail from './track_detail';
import { receiveCurrentTrack, receiveNextTrack } from '../../actions/track_actions';
import { receiveTitle, receiveArtist, receivePlaylistId, receiveAlbumId } from '../../actions/audio_actions';

const mapStateToProps = (state, { playlist, tracks }) => ({ 
  playlist,
  tracks,
  photoUrl: playlist.photo_url,
  playlistId: playlist.id
});

const mapDispatchToProps = dispatch => ({ 
  receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track)), 
  receiveNextTrack: track => dispatch(receiveNextTrack(track)),
  receiveTitle: title => dispatch(receiveTitle(title)),
  receiveArtist: artist => dispatch(receiveArtist(artist)),
  receivePlaylistId: playlistId => dispatch(receivePlaylistId(playlistId)), 
  receiveAlbumId: albumId => dispatch(receiveAlbumId(albumId))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(TrackDetail);    