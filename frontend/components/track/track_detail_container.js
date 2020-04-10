import { connect } from 'react-redux';
import TrackDetail from './track_detail';
import { receiveCurrentTrack, receiveNextTrack } from '../../actions/track_actions';
import { receiveTitle, receiveArtist, receivePlaylistId, receiveAlbumId, receiveIsPlaying } from '../../actions/audio_actions';

const mapStateToProps = (state, { playlist, tracks }) => { 
  let currentPlaylist = playlist || JSON.parse(localStorage.getItem('viewing_playlist'));
  const currentTracks = tracks || JSON.parse(localStorage.getItem('playlist_tracks'));

  return ({
    playlist: currentPlaylist,
    tracks: currentTracks
  });
};

const mapDispatchToProps = dispatch => ({ 
  receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track)), 
  receiveNextTrack: track => dispatch(receiveNextTrack(track)),
  receiveTitle: title => dispatch(receiveTitle(title)),
  receiveArtist: artist => dispatch(receiveArtist(artist)),
  receivePlaylistId: playlistId => dispatch(receivePlaylistId(playlistId)), 
  receiveAlbumId: albumId => dispatch(receiveAlbumId(albumId)),
  receiveIsPlaying: isPlaying => dispatch(receiveIsPlaying(isPlaying))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(TrackDetail);    