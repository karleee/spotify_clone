import { connect } from 'react-redux';

import { receiveCurrentTrack, receiveNextTrack } from '../../actions/track_actions';
import { receiveTitle, receiveArtist, receivePlaylistId, receiveAlbumId, receiveIsPlaying, receiveAudio } from '../../actions/audio_actions';
// import { selectTracksFromPlaylist } from '../../reducers/selectors';

import AudioPlayer from './audio_player';

const mapStateToProps = state => {
  const tracks = JSON.parse(localStorage.getItem('playlist_tracks'));

  return ({
    currentTrack: state.ui.currentTrack,  
    volume: state.audio.volume,
    nextTrack: state.ui.nextTrack, 
    trackPlaying: state.audio.trackPlaying,
    tracks,
    isPlaying: state.ui.isPlaying
  });
}

const mapDispatchToProps = dispatch => ({
  receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track)),
  receiveNextTrack: track => dispatch(receiveNextTrack(track)),
  receiveTitle: title => dispatch(receiveTitle(title)),
  receiveArtist: artist => dispatch(receiveArtist(artist)),
  receivePlaylistId: playlistId => dispatch(receivePlaylistId(playlistId)), 
  receiveAlbumId: albumId => dispatch(receiveAlbumId(albumId)),
  receiveIsPlaying: isPlaying => dispatch(receiveIsPlaying(isPlaying)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);